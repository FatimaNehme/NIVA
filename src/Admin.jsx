import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";

function Admin() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  async function checkSession() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    setSession(session);
    setLoading(false);
  }

  async function handleLogin(email, password) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
}

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <div>
      <h1>NIVA</h1>

      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

function Dashboard({ onLogout }) {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error loading projects:", error);
      return;
    }

    setProjects(data || []);
  }

  async function deleteProject(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting project:", error);
      alert("Could not delete the project.");
      return;
    }

    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== id)
    );
  }

  async function addProject(project) {
    const { data, error } = await supabase
      .from("projects")
      .insert([project])
      .select()
      .single();

    if (error) {
      console.error("Error adding project:", error);
      alert("Could not add the project.");
      return;
    }

    setProjects((currentProjects) => [
      ...currentProjects,
      data,
    ]);

    setShowForm(false);
  }

  return (
    <div className="admin-page">

      <header className="admin-header">
        <div>
          <span>NIVA / ADMIN</span>
          <h1>Projects</h1>
        </div>

        <div className="admin-actions">
          <button onClick={() => setShowForm(true)}>
            + Add Project
          </button>

          <button onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      {showForm && (
        <AddProjectForm
          onAdd={addProject}
          onCancel={() => setShowForm(false)}
        />
      )}

      <section className="admin-projects">

        {projects.length === 0 ? (
          <div className="empty-projects">
            <h2>No projects yet.</h2>
            <p>
              Add your first NIVA project to make it appear
              on the website.
            </p>

            <button onClick={() => setShowForm(true)}>
              + Add Your First Project
            </button>
          </div>
        ) : (
          projects.map((project) => (
            <article
              className="admin-project"
              key={project.id}
            >
              <div>
                <span>{project.number}</span>

                <h2>{project.title}</h2>

                <p>{project.category}</p>
              </div>

              <div className="admin-project-actions">
                <button
                  onClick={() => deleteProject(project.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))
        )}

      </section>

    </div>
  );
}

function AddProjectForm({ onAdd, onCancel }) {
  const [imageFile, setImageFile] = useState(null);

  const [form, setForm] = useState({
    number: "",
    category: "",
    title: "",
    description: "",
    tag: "",
    style: "",
    image_url: "",
    link: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

 async function handleSubmit(e) {
  e.preventDefault();

  let imageUrl = "";

  if (imageFile) {
    const fileExt = imageFile.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(fileName, imageFile);

    if (uploadError) {
      console.error("Image upload error:", uploadError);
      alert("Could not upload the image.");
      return;
    }

    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);

    imageUrl = data.publicUrl;
  }

  await onAdd({
    ...form,
    image_url: imageUrl,
  });
}

  return (
    <div className="admin-form">

      <div className="admin-form-header">
        <h2>Add Project</h2>

        <button onClick={onCancel}>
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit}>

        <input
          name="number"
          placeholder="Project number (01)"
          value={form.number}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          name="title"
          placeholder="Project title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Project description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          name="tag"
          placeholder="Tag (Concept / Web Project)"
          value={form.tag}
          onChange={handleChange}
          required
        />

        <input
          name="style"
          placeholder="Style (lune / noor / melo)"
          value={form.style}
          onChange={handleChange}
          required
        />

        <div className="admin-image-upload">

  <label>Project Image</label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setImageFile(e.target.files[0])}
  />

  {imageFile && (
    <span>
      Selected: {imageFile.name}
    </span>
  )}

</div>

        <input
          name="link"
          placeholder="Website link"
          value={form.link}
          onChange={handleChange}
        />

        <div className="admin-form-buttons">
          <button type="submit">
            Save Project
          </button>

          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>

      </form>

    </div>
  );
}

export default Admin;
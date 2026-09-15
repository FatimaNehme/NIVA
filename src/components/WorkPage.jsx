import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function WorkPage() {
  const [projects, setProjects] = useState([]);

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

  return (
    <section className="all-work">

      <div className="all-work-header">
        <span className="section-number">
          ALL / SELECTED WORK
        </span>

        <h1>
          Ideas we've
          <span>brought to life.</span>
        </h1>

        <p>
          Explore the digital experiences we've created
          for different ideas, brands, and businesses.
        </p>
      </div>

      <div className="all-work-grid">

        {projects.map((project) => {

          const cardContent = (
            <>
              <div className="work-image">

                <div className="concept-label">
                  {project.tag}
                </div>

                {project.image_url ? (

                  <img
                    src={project.image_url}
                    alt={`${project.title} website preview`}
                    className="work-project-image"
                  />

                ) : (

                  <div className="work-browser">

                    <div className="browser-top">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="browser-content">

                      <div className="browser-nav">
                        <strong>
                          {project.title}
                        </strong>

                        <div>
                          <span>ABOUT</span>
                          <span>SHOP</span>
                        </div>
                      </div>

                      <div className="browser-hero">

                        <small>
                          {project.category}
                        </small>

                        <h3>
                          {project.title}
                        </h3>

                        <span className="browser-line"></span>

                      </div>

                      <div className="browser-orbit"></div>
                      <div className="browser-bubble"></div>

                    </div>

                  </div>

                )}

              </div>

              <div className="work-info">

                <span className="work-number">
                  {project.number}
                </span>

                <div className="work-details">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>

                <span className="work-arrow">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 19L19 5M9 5H19V15" />
  </svg>
</span>

              </div>
            </>
          );

          if (project.link) {
            return (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`work-card ${project.style}`}
                key={project.id}
              >
                {cardContent}
              </a>
            );
          }

          return (
            <article
              className={`work-card ${project.style}`}
              key={project.id}
            >
              {cardContent}
            </article>
          );

        })}

      </div>

      <Link to="/" className="all-work-back">
  <span className="back-arrow">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5M11 6L5 12L11 18" />
    </svg>
  </span>
  Back to home
</Link>

    </section>
  );
}

export default WorkPage;

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { supabase } from "../lib/supabaseClient";

function Work() {
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
    <section className="work" id="work">

      <div className="work-header">

        <div>
          <span className="section-number">
            03 / SELECTED WORK
          </span>

          <h2>
            Ideas we've
            <span>brought to life.</span>
          </h2>
        </div>

        <p>
          A glimpse into the kind of digital experiences
          NIVA can create for businesses with something to say.
        </p>

      </div>

      <Reveal className="reveal-stagger">

        <div className="work-grid">

          {projects.slice(0, 4).map((project) => {

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
                    ↗
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

      </Reveal>
      <div className="work-explore">
  <a href="/work">
    Explore more work <span>↗</span>
  </a>
</div>

      <div className="work-bottom">

        <span>
          MORE IDEAS ARE ALWAYS IN THE MAKING
        </span>

        <span>
          🫧
        </span>

      </div>

    </section>
  );
}

export default Work;

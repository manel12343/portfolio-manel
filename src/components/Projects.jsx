import { motion } from "framer-motion";
import { Mail, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

import "./Projects.css";

function Projects() {
  return (
    <section id="projets" className="projects page-gradient">

      <div className="projects-container">

        <div className="projects-title-row">

          <h2>
            PROJETS:
          </h2>

          <p>
            Découvrez quelques projets réalisés durant
            mon parcours académique et personnel.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
              }}
            >

              <div className="project-preview">

                {project.type === "image" && (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                )}

                {project.type === "video" && project.src && (
                  <video
                    src={project.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                )}

                {project.type === "placeholder" && (
                  <div className="video-placeholder">
                    <Play size={23} />
                    <span>
                      Aperçu du projet
                    </span>
                  </div>
                )}

                {project.type === "video" && !project.src && (
                  <div className="video-placeholder">
                    <Play size={23} />
                    <span>
                      Aperçu vidéo
                    </span>
                  </div>
                )}

              </div>

              <div className="project-body">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tags">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-project"
                >
                  <FaGithub size={20} />

                  Voir le projet sur GitHub

                  <ExternalLink size={9} />
                </a>

              </div>

            </motion.article>
          ))}

        </div>

      </div>

      <a
        href="mailto:manelsekrafi44@gmail.com"
        className="mail-floating"
      >
        <Mail size={15} />
      </a>

    </section>
  );
}

export default Projects;
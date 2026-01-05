import React from "react";
import { Link } from "react-router-dom";

export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  year: string;
  image?: string;
  logo?: React.ReactNode;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="project-card">
      {project.logo && (
        <div className="project-card__logo-container">
          <div className="project-card__logo-wrapper">{project.logo}</div>
          <div className="project-card__logo-accent"></div>
        </div>
      )}
      {!project.logo && project.image && (
        <div className="project-card__image-wrapper">
          <img
            src={project.image}
            alt={project.title}
            className="project-card__image"
          />
          <div className="project-card__image-accent"></div>
        </div>
      )}

      <div className="project-card__header">
        <span className="project-card__number">{project.number}</span>
        <span className="project-card__year">{project.year}</span>
      </div>

      <div className="project-card__line"></div>

      <h3 className="project-card__title">{project.title}</h3>

      <p className="project-card__description">{project.description}</p>

      <div className="project-card__tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {project.link && (
        <>
          {project.link.startsWith("/") ? (
            <Link to={project.link} className="project-card__link">
              VIEW PROJECT →
            </Link>
          ) : (
            <a
              href={project.link}
              className="project-card__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW PROJECT →
            </a>
          )}
        </>
      )}
    </article>
  );
};

export default ProjectCard;

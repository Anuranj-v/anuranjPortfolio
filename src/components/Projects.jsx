import { useState } from 'react';
import { ExternalLink, ChevronRight, Folder } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import projects from '../data/projects';
import './Projects.css';

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

// Gradient placeholders for projects without images
const placeholderGradients = [
  'linear-gradient(135deg, #1a0010 0%, #0d001a 50%, #1a0508 100%)',
  'linear-gradient(135deg, #001a10 0%, #00101a 50%, #1a1000 100%)',
  'linear-gradient(135deg, #1a1000 0%, #0d1a00 50%, #1a000d 100%)',
];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section projects" aria-label="Projects section">
      <div className="projects__glow" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">
            A selection of projects built during my training and personal learning journey.
          </p>
          <div className="section-divider" />
        </div>

        {/* Filter tabs */}
        <div className="projects__filters" role="tablist" aria-label="Project categories">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`projects__filter-btn ${active === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="projects__grid">
          {filtered.map((project, idx) => (
            <article key={project.id} className="project-card glass-card" aria-label={project.title}>
              {/* Image */}
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-card__image"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="project-card__placeholder"
                  style={{ background: placeholderGradients[idx % placeholderGradients.length] }}
                >
                  <Folder size={48} className="project-card__placeholder-icon" />
                  <span>{project.title}</span>
                </div>
                <div className="project-card__overlay" />
                {project.featured && (
                  <span className="project-card__featured-badge">Featured</span>
                )}
                <span className="project-card__category-badge">{project.category}</span>
              </div>

              {/* Content */}
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <ul className="project-card__features">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="project-card__feature">
                        <ChevronRight size={12} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-card__actions">
                  {project.viewUrl ? (
                    <a
                      href={project.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-card__btn"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={15} /> View Project
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-card__btn"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubIcon size={15} /> GitHub
                    </a>
                  ) : null}

                  {!project.viewUrl && !project.githubUrl && (
                    <span className="project-card__coming-soon">Links coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="projects__empty">
            <Folder size={48} />
            <p>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

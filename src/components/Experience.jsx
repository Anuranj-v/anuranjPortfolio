import { Briefcase, MapPin, Calendar, CheckCircle, ChevronRight } from 'lucide-react';
import experience from '../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-label="Experience section">
      <div className="experience__glow" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
          <p className="section-subtitle">
            My professional training and hands-on experience in data analytics.
          </p>
          <div className="section-divider" />
        </div>

        {experience.length === 0 ? (
          <div className="experience__empty">
            <Briefcase size={48} />
            <p>Experience details coming soon.</p>
          </div>
        ) : (
          <div className="experience__timeline">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="exp-item">
                {/* Timeline spine */}
                <div className="exp-item__spine">
                  <div className="exp-item__dot" style={{ '--dot-color': exp.color }}>
                    <Briefcase size={16} />
                  </div>
                  {idx < experience.length - 1 && <div className="exp-item__line" />}
                </div>

                {/* Card */}
                <article className="exp-card glass-card">
                  <div className="exp-card__header">
                    {/* Logo */}
                    <div className="exp-card__logo-wrap">
                      {exp.logo ? (
                        <img src={exp.logo} alt={`${exp.organization} logo`} className="exp-card__logo" />
                      ) : (
                        <div className="exp-card__logo-placeholder" style={{ '--c': exp.color }}>
                          {exp.organization.substring(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <div className="exp-card__title-group">
                      <h3 className="exp-card__role">{exp.role}</h3>
                      <p className="exp-card__org">{exp.organization}</p>
                      <div className="exp-card__meta">
                        <span className="exp-card__meta-item">
                          <Calendar size={13} />
                          {exp.startDate} – {exp.endDate}
                        </span>
                        <span className="exp-card__meta-item">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <span className="tag exp-card__type-tag">{exp.type}</span>
                  </div>

                  <p className="exp-card__desc">{exp.description}</p>

                  {/* Skills learned */}
                  <div className="exp-card__section">
                    <h4 className="exp-card__section-title">
                      <CheckCircle size={15} />
                      Skills Learned
                    </h4>
                    <div className="exp-card__skills">
                      {exp.skillsLearned.map((skill, i) => (
                        <span key={i} className="exp-card__skill-chip">
                          <ChevronRight size={11} />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="exp-card__section">
                      <h4 className="exp-card__section-title">
                        <Briefcase size={15} />
                        Projects Worked On
                      </h4>
                      <ul className="exp-card__projects">
                        {exp.projects.map((proj, i) => (
                          <li key={i} className="exp-card__project-item">
                            <span className="exp-card__project-dot" />
                            {proj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

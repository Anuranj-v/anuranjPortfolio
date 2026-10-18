import { ExternalLink, GraduationCap, MapPin, Mail, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profile from '../data/profile';
import './About.css';

const interests = profile.about.interests;

export default function About() {
  return (
    <section id="about" className="section about" aria-label="About me section">
      {/* Glow */}
      <div className="about__glow" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <div className="section-divider" />
        </div>

        <div className="about__grid">
          {/* ── Image column ── */}
          <div className="about__image-col">
            <div className="about__image-wrap">
              <div className="about__image-border" />
              <div className="about__image-glow" />
              <img
                src={profile.about.profileImage}
                alt={`${profile.name} – Data Analyst`}
                className="about__image"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="about__image-placeholder">
                <span>AV</span>
              </div>

              {/* Info chip */}
              <div className="about__chip">
                <GraduationCap size={16} />
                <div>
                  <div className="about__chip-title">BCA Graduate</div>
                  <div className="about__chip-sub">Yeldo Mar Baselios College (MG Univ)</div>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div className="about__info-cards">
              <div className="about__info-item glass-card">
                <MapPin size={16} className="about__info-icon" />
                <span>{profile.location}</span>
              </div>
              <a href={`mailto:${profile.email}`} className="about__info-item glass-card" aria-label={`Email ${profile.name}`}>
                <Mail size={16} className="about__info-icon" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>

          {/* ── Content column ── */}
          <div className="about__content">
            <div className="about__intro glass-card">
              <p className="about__para">{profile.about.intro}</p>
              <p className="about__para">{profile.about.description}</p>
            </div>

            <div className="about__interests">
              <h3 className="about__interests-title">Areas of Interest</h3>
              <div className="about__interests-grid">
                {interests.map((item, i) => (
                  <div className="about__interest-item" key={i}>
                    <ChevronRight size={16} className="about__interest-arrow" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline about__social-btn"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline about__social-btn"
                aria-label="GitHub profile"
              >
                <GithubIcon size={18} /> GitHub
              </a>
              <button
                className="btn btn-primary about__more-btn"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Know more – go to contact"
              >
                Know More <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

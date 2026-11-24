import { useState, useEffect } from 'react';
import { ArrowRight, Mail, TrendingUp, BarChart2, Activity } from 'lucide-react';
import profile from '../data/profile';
import './Hero.css';

const roles = ['Data Analyst', 'Power BI Specialist', 'React & Django Developer', 'Problem Solver'];

const HERO_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${((i * 37 + 13) % 100)}%`,
  y: `${((i * 43 + 27) % 100)}%`,
  delay: `${((i * 1.3) % 5).toFixed(1)}s`,
  size: `${(2 + ((i * 1.7) % 3)).toFixed(1)}px`,
}));

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  const handleExplore = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Ambient glows */}
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {HERO_PARTICLES.map((p) => (
          <span
            key={p.id}
            className="hero__particle"
            style={{
              '--x': p.x,
              '--y': p.y,
              '--delay': p.delay,
              '--size': p.size,
            }}
          />
        ))}
      </div>

      <div className="container hero__inner">
        {/* ── LEFT COLUMN ─────────────────────────────── */}
        <div className="hero__content">
          <div className="hero__badge">
            <Activity size={14} />
            Available for opportunities
          </div>

          <p className="hero__greeting">{profile.hero.greeting}</p>

          <h1 className="hero__name">{profile.name}</h1>

          <div className="hero__role-wrapper" aria-live="polite">
            <span className="hero__role-prefix">&lt;</span>
            <span className="hero__role text-gradient" key={roleIndex}>
              {roles[roleIndex]}
            </span>
            <span className="hero__role-prefix">/&gt;</span>
          </div>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">50K+</span>
              <span className="hero__stat-label">Data Records Analysed</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">4+</span>
              <span className="hero__stat-label">Projects Completed</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">8+</span>
              <span className="hero__stat-label">Tools Mastered</span>
            </div>
          </div>

          <div className="hero__actions">
            <button className="btn btn-primary hero__btn" onClick={handleExplore} aria-label="Explore my work">
              Explore My Work <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline hero__btn" onClick={handleContact} aria-label="Contact me">
              <Mail size={18} /> Contact Me
            </button>
          </div>

          <div className="hero__tech-badges">
            {['Power BI', 'Python', 'SQL', 'Excel', 'React', 'Django', 'PHP'].map(t => (
              <span key={t} className="hero__tech-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ────────────────────────────── */}
        <div className="hero__visual" aria-hidden="true">
          {/* Portrait */}
          <div className="hero__portrait-wrap">
            <div className="hero__portrait-ring hero__portrait-ring--outer" />
            <div className="hero__portrait-ring hero__portrait-ring--inner" />
            <div className="hero__portrait-glow" />
            <div className="hero__portrait">
              {/* Replace /images/portrait.jpg with your actual photo */}
              <img
                src={profile.hero.portraitImage}
                alt="Anuranj V – Data Analyst"
                className="hero__portrait-img"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hero__portrait-placeholder">
                <span>AV</span>
              </div>
            </div>

            {/* Floating analytics cards */}
            <div className="hero__float-card hero__float-card--tl">
              <BarChart2 size={14} className="hero__float-icon" />
              <span>Analytics</span>
            </div>

            <div className="hero__float-card hero__float-card--tr">
              <TrendingUp size={14} className="hero__float-icon" />
              <span>+24.5%</span>
            </div>

            <div className="hero__float-card hero__float-card--bl">
              <span className="hero__float-label">Insights</span>
              <span className="hero__float-value">Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}

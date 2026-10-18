import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Download, TrendingUp, BarChart2, Activity } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import profile from '../data/profile';
import './Hero.css';

const barData = [
  { name: 'Jan', v: 65 },
  { name: 'Feb', v: 78 },
  { name: 'Mar', v: 55 },
  { name: 'Apr', v: 88 },
  { name: 'May', v: 72 },
  { name: 'Jun', v: 95 },
];

const lineData = [
  { name: 'W1', v: 30 },
  { name: 'W2', v: 52 },
  { name: 'W3', v: 44 },
  { name: 'W4', v: 68 },
  { name: 'W5', v: 60 },
  { name: 'W6', v: 80 },
  { name: 'W7', v: 72 },
  { name: 'W8', v: 95 },
];

const roles = ['Data Analyst', 'Power BI Specialist', 'React & Django Developer', 'Problem Solver'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [resumeOk, setResumeOk] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    fetch(profile.resumePath, { method: 'HEAD' })
      .then(r => setResumeOk(r.ok))
      .catch(() => setResumeOk(false));
  }, []);

  const handleExplore = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    if (resumeOk) {
      const a = document.createElement('a');
      a.href = profile.resumePath;
      a.download = 'Anuranj_V_Resume.pdf';
      a.click();
    } else {
      alert('Resume PDF not found. Please place your resume at /public/resume.pdf');
    }
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Ambient glows */}
      <div className="hero__glow hero__glow--left" aria-hidden="true" />
      <div className="hero__glow hero__glow--right" aria-hidden="true" />

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="hero__particle" style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 5}s`,
            '--size': `${2 + Math.random() * 3}px`,
          }} />
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

          {/* Charts */}
          <div className="hero__charts">
            <div className="hero__chart-card glass-card">
              <div className="hero__chart-header">
                <BarChart2 size={14} />
                <span>Monthly Performance</span>
              </div>
              <ResponsiveContainer width="100%" height={90}>
                <BarChart data={barData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fill: '#606080', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: '#0a0a12', border: '1px solid rgba(255,23,68,0.3)', borderRadius: 8, fontSize: 11 }}
                    cursor={false}
                  />
                  <Bar dataKey="v" fill="url(#barGrad)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff1744" />
                      <stop offset="100%" stopColor="#c62828" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="hero__chart-card glass-card">
              <div className="hero__chart-header">
                <Activity size={14} />
                <span>Growth Trend</span>
              </div>
              <ResponsiveContainer width="100%" height={90}>
                <LineChart data={lineData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fill: '#606080', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{ background: '#0a0a12', border: '1px solid rgba(255,23,68,0.3)', borderRadius: 8, fontSize: 11 }}
                    cursor={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke="#ff1744"
                    strokeWidth={2}
                    dot={{ fill: '#ff1744', r: 3 }}
                    activeDot={{ r: 5, fill: '#ff4569' }}
                  />
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff1744" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#ff1744" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
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

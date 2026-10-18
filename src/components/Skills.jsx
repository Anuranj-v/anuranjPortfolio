import { useState } from 'react';
import {
  FileSpreadsheet, BarChart2, Filter, Code2,
  Database, Terminal, PieChart, Sparkles,
  Layers, Star, Globe, Server, Cpu, Cloud, MessageSquare
} from 'lucide-react';
import skills from '../data/skills';
import './Skills.css';

// Map icon name string → Lucide component
const iconMap = {
  FileSpreadsheet,
  BarChart2,
  Filter,
  Code2,
  Database,
  Terminal,
  PieChart,
  Sparkles,
  Layers,
  Star,
  Globe,
  Server,
  Cpu,
  Cloud,
  MessageSquare,
};

const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];

export default function Skills() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="section skills" aria-label="Skills section">
      <div className="skills__glow" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">Skills &amp; <span className="text-gradient">Technologies</span></h2>
          <p className="section-subtitle">
            A collection of tools and technologies I've worked with across data analytics, visualisation, and programming.
          </p>
          <div className="section-divider" />
        </div>

        {/* Category filter */}
        <div className="skills__filters" role="tablist" aria-label="Skill categories">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`skills__filter-btn ${active === cat ? 'skills__filter-btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards grid */}
        <div className="skills__grid" role="tabpanel">
          {filtered.map(skill => {
            const Icon = iconMap[skill.icon] || Star;
            return (
              <div key={skill.id} className="skill-card glass-card" aria-label={skill.name}>
                <div className="skill-card__icon-wrap" style={{ '--icon-color': skill.color }}>
                  <Icon size={28} className="skill-card__icon" />
                  <div className="skill-card__icon-glow" />
                </div>

                <div className="skill-card__body">
                  <h3 className="skill-card__name">{skill.name}</h3>
                  <p className="skill-card__desc">{skill.description}</p>
                  <span className="tag skill-card__cat">{skill.category}</span>
                </div>

                <div className="skill-card__bar-wrap" aria-label={`${skill.proficiency}% proficiency`}>
                  <div className="skill-card__bar-track">
                    <div
                      className="skill-card__bar-fill"
                      style={{ width: `${skill.proficiency}%`, '--skill-color': skill.color }}
                    />
                  </div>
                  <span className="skill-card__bar-pct">{skill.proficiency}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="skills__empty">No skills found in this category.</p>
        )}
      </div>
    </section>
  );
}

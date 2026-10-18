import { Mail, ArrowUp, BarChart2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import profile from '../data/profile';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Home',         href: '#home' },
    { label: 'About',        href: '#about' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Experience',   href: '#experience' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact',      href: '#contact' },
  ];

  const handleNav = (href) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      {/* Top border glow */}
      <div className="footer__border" aria-hidden="true" />

      <div className="container footer__inner">
        {/* ── Brand ── */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">
              <BarChart2 size={20} />
            </span>
            <span className="footer__logo-text">
              Anuranj <span className="text-gradient">V</span>
            </span>
          </div>
          <p className="footer__tagline">{profile.footer.tagline}</p>
          <p className="footer__desc">
            A passionate data analyst turning complex datasets into clear, actionable insights.
          </p>
          <div className="footer__socials">
            <a
              href={`mailto:${profile.email}`}
              className="footer__social-btn"
              aria-label="Send email"
              title="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-btn"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>

        {/* ── Quick links ── */}
        <div className="footer__links">
          <h3 className="footer__links-title">Navigation</h3>
          <ul className="footer__links-list" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  className="footer__link"
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div className="footer__contact">
          <h3 className="footer__links-title">Contact</h3>
          <div className="footer__contact-items">
            <a href={`mailto:${profile.email}`} className="footer__contact-item">
              <Mail size={14} />
              {profile.email}
            </a>
            <span className="footer__contact-item">
              <span className="footer__contact-dot" />
              {profile.location}
            </span>
          </div>

          {/* Back to top */}
          <button className="footer__back-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">{profile.footer.copyright}</p>
          <p className="footer__built">
            Built with <span className="footer__heart">♥</span> using React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

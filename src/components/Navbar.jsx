import { useState, useEffect, useRef } from 'react';
import { BarChart2, Menu, X, Download } from 'lucide-react';
import profile from '../data/profile';
import './Navbar.css';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const menuRef = useRef(null);

  /* Scroll handler */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container navbar__inner">
        {/* Logo */}
        <a className="navbar__logo" href="#home" onClick={() => handleNavClick('#home')} aria-label="Anuranj V – Home">
          <span className="navbar__logo-icon">
            <BarChart2 size={22} />
          </span>
          <span className="navbar__logo-text">
            Anuranj <span className="text-gradient">V</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links" role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                className={`navbar__link ${activeLink === link.href ? 'navbar__link--active' : ''}`}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                aria-current={activeLink === link.href ? 'page' : undefined}
              >
                {link.label}
                {activeLink === link.href && <span className="navbar__link-dot" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV */}
        <a
          href={profile.resumePath}
          download="Anuranj_V_Resume.pdf"
          className="btn btn-primary navbar__cv-btn"
          aria-label="Download CV"
          title="Download CV"
        >
          <Download size={16} />
          <span>Download CV</span>
        </a>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                className={`navbar__mobile-link ${activeLink === link.href ? 'navbar__mobile-link--active' : ''}`}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumePath}
              download="Anuranj_V_Resume.pdf"
              className="btn btn-primary navbar__mobile-cv"
              aria-label="Download CV"
            >
              <Download size={16} /> Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

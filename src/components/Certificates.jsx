import { Award, Calendar, ExternalLink, FileText } from 'lucide-react';
import certificates from '../data/certificates';
import './Certificates.css';

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates" aria-label="Certificates section">
      <div className="certificates__glow" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Certificates &amp; <span className="text-gradient">Awards</span></h2>
          <p className="section-subtitle">
            Certifications and recognition earned through training and learning.
          </p>
          <div className="section-divider" />
        </div>

        {certificates.length === 0 ? (
          <div className="certificates__empty">
            <div className="certificates__empty-icon">
              <Award size={56} />
            </div>
            <h3 className="certificates__empty-title">Certificates Coming Soon</h3>
            <p className="certificates__empty-desc">
              I'm actively working towards completing certifications. Check back soon to see my achievements!
            </p>
            <div className="certificates__empty-hint">
              <FileText size={14} />
              <span>To add a certificate, edit <code>src/data/certificates.js</code></span>
            </div>
          </div>
        ) : (
          <div className="certificates__grid">
            {certificates.map(cert => (
              <article key={cert.id} className="cert-card glass-card" aria-label={cert.title}>
                {/* Card top */}
                <div className="cert-card__top" style={{ '--c': cert.color || '#ff1744' }}>
                  <div className="cert-card__icon-wrap">
                    {cert.logo ? (
                      <img src={cert.logo} alt={`${cert.organization} logo`} className="cert-card__org-logo" />
                    ) : (
                      <Award size={28} className="cert-card__icon" />
                    )}
                  </div>
                  <div className="cert-card__badge">Verified</div>
                </div>

                {/* Image preview */}
                {cert.certificateFile && (
                  <div className="cert-card__preview">
                    <img
                      src={cert.certificateFile}
                      alt={`${cert.title} certificate`}
                      className="cert-card__preview-img"
                      onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="cert-card__content">
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__org">{cert.organization}</p>
                  {cert.description && (
                    <p className="cert-card__desc">{cert.description}</p>
                  )}
                  <div className="cert-card__meta">
                    <Calendar size={13} />
                    <span>Issued: {cert.issueDate}</span>
                  </div>

                  {cert.certificateUrl && (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost cert-card__btn"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                  )}
                  {cert.certificateFile && !cert.certificateUrl && (
                    <a
                      href={cert.certificateFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost cert-card__btn"
                      aria-label={`Open ${cert.title} certificate`}
                    >
                      <FileText size={14} />
                      Open Certificate
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

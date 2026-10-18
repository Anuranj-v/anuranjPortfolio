import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profile from '../data/profile';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const { name, email, subject, message } = form;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      desc: 'Send me an email anytime',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[\s+]/g, '')}`,
      desc: 'Call or message directly',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile.linkedin,
      desc: 'Let\'s connect professionally',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'View my code',
      href: profile.github,
      desc: 'Check out my repositories',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: null,
      desc: 'Open to remote opportunities',
    },
  ];

  return (
    <section id="contact" className="section contact" aria-label="Contact section">
      <div className="contact__glow" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact <span className="text-gradient">Me</span></h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <div className="section-divider" />
        </div>

        <div className="contact__grid">
          {/* ── Left: Info ── */}
          <div className="contact__info">
            <div className="contact__info-header glass-card">
              <MessageSquare size={24} className="contact__info-icon" />
              <div>
                <h3 className="contact__info-title">Let's Work Together</h3>
                <p className="contact__info-subtitle">
                  I'm currently open to new opportunities and collaborations in data analytics.
                </p>
              </div>
            </div>

            <div className="contact__items">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="contact__item glass-card" key={i}>
                    <div className="contact__item-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <div className="contact__item-body">
                      <span className="contact__item-label">{item.label}</span>
                      <span className="contact__item-value">{item.value}</span>
                      <span className="contact__item-desc">{item.desc}</span>
                    </div>
                    {item.href && <Mail size={14} className="contact__item-arrow" />}
                  </div>
                );
                return item.href
                  ? <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{content}</a>
                  : content;
              })}
            </div>

            <div className="contact__disclaimer glass-card">
              <AlertCircle size={16} />
              <p>
                The contact form uses <strong>mailto:</strong> links to open your email app. Messages are not stored on a server. A backend integration can be added later if needed.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact__form-wrap">
            <form className="contact__form glass-card" onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <h3 className="contact__form-title">Send Me a Message</h3>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject" className="contact__label">Subject *</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="contact__input"
                  placeholder="Project collaboration / Job opportunity..."
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''}`}
                disabled={status === 'sending'}
                aria-label="Send message"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'sent' ? (
                  <><CheckCircle size={18} /> Email Client Opened</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>

              {status === 'sent' && (
                <p className="contact__success-msg">
                  <CheckCircle size={16} />
                  Your email app should have opened with the message pre-filled.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

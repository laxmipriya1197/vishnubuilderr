import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';

export function ContactPage({
  openQuote,
  motionProps,
}: {
  openQuote: () => void;
  motionProps: Record<string, unknown>;
}) {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>We are always<br /><em>ready to help.</em></>}
        text="Have a project in mind? Tell us what you are thinking and we will help you find the right next step."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="section-pad contact-page">
        <div className="container contact-page-grid">
          <motion.div
            className="contact-card contact-card-with-bg"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Contact Vishnu Builderr"
              className="contact-card-bg-img"
              loading="lazy"
            />
            <div className="contact-card-overlay light-overlay" />
            <div className="contact-card-inner">
              <p className="eyebrow">Get in touch</p>
              <h2>Let&apos;s discuss<br /><em>your plans.</em></h2>
              <p>Whether you are planning a new home, refreshing an existing space, or looking for a property, we would love to hear from you.</p>
              <div className="contact-detail-list">
                <a href="tel:+919566714471">
                  <Phone size={19} />
                  <span>Call us<strong>+91 95667 14471</strong></span>
                </a>
                <a href="mailto:vishnubuilderr@gmail.com">
                  <Mail size={19} />
                  <span>Email us<strong>vishnubuilderr@gmail.com</strong></span>
                </a>
                <div>
                  <MapPin size={19} />
                  <span>Visit us<strong>Pappampatti Pirivu, Coimbatore - 641103</strong></span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-panel contact-panel-with-bg"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Enquire Vishnu Builderr"
              className="contact-card-bg-img"
              loading="lazy"
            />
            <div className="contact-card-overlay dark-overlay" />
            <div className="contact-card-inner flex-between">
              <div className="form-panel-top">
                <p className="eyebrow light">Send us a note</p>
                <h3>Tell us a little about your project.</h3>
              </div>
              <button className="button button-primary contact-form-button" onClick={openQuote}>
                Open enquiry form <ArrowRight size={17} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="map-section section-pad">
        <div className="container">
          <div className="map-wrapper-card">
            <div className="map-header-bar">
              <div className="map-info">
                <MapPin size={22} className="map-pin-icon" />
                <div>
                  <strong>Vishnu Builderr</strong>
                  <p>Pappampatti Pirivu, Coimbatore - 641103, Tamil Nadu</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pappampatti+Pirivu+Coimbatore+641103"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary map-directions-btn"
              >
                <span>Get Directions</span> <ArrowRight size={16} />
              </a>
            </div>
            <div className="map-iframe-container">
              <iframe
                title="Vishnu Builderr Pappampatti Pirivu Coimbatore Map"
                src="https://maps.google.com/maps?q=Pappampatti+Pirivu,+Coimbatore,+Tamil+Nadu+641103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
      />
      <section className="section-pad contact-page">
        <div className="container contact-page-grid">
          <motion.div className="contact-card" {...motionProps}>
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
                <span>Visit us<strong>Coimbatore, Tamil Nadu</strong></span>
              </div>
            </div>
          </motion.div>
          <motion.div className="contact-form-panel" {...motionProps} transition={{ delay: 0.15 }}>
            <div className="form-panel-top">
              <p className="eyebrow">Send us a note</p>
              <h3>Tell us a little about your project.</h3>
            </div>
            <button className="button button-dark contact-form-button" onClick={openQuote}>
              Open enquiry form <ArrowRight size={17} />
            </button>
          </motion.div>
        </div>
      </section>
      <section className="map-section">
        <div className="container map-card">
          <div className="map-lines" />
          <MapPin size={30} />
          <span>Coimbatore<br /><strong>Vishnu Builderr</strong></span>
        </div>
      </section>
    </>
  );
}

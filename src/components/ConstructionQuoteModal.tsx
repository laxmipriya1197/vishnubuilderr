import type { FormEvent } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { constructionServices } from '../data/content';

export function ConstructionQuoteModal({
  closeQuote,
  formSent,
  setFormSent,
  initialService = 'Residential construction',
}: {
  closeQuote: () => void;
  formSent: boolean;
  setFormSent: (sent: boolean) => void;
  initialService?: string;
}) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const phone = String(form.get('phone') ?? '');
    const email = String(form.get('email') ?? '');
    const service = String(form.get('service') ?? initialService);
    const message = String(form.get('message') ?? '');

    const text = `*New Construction Project Enquiry - Vishnu Builderr*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Construction Service:* ${service}${message ? `\n\n*Project Details:*\n${message}` : ''}`;

    const waUrl = `https://wa.me/919566714471?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setFormSent(true);
  };

  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) closeQuote(); }}>
      <motion.div className="quote-modal" initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
        <button className="modal-close" onClick={closeQuote} aria-label="Close construction quote form"><X size={20} /></button>
        {formSent ? (
          <div className="success-state">
            <div className="success-icon"><Check size={30} /></div>
            <h2>WhatsApp Opened!</h2>
            <p>We opened WhatsApp with your construction project enquiry details pre-filled for <strong>+91 95667 14471</strong>. Press send in WhatsApp and our team will get back to you shortly.</p>
            <button className="button button-dark" onClick={closeQuote}>Back to website</button>
          </div>
        ) : (
          <>
            <div className="modal-intro">
              <p className="eyebrow">Start a conversation</p>
              <h2>Start your<br /><em>construction project.</em></h2>
              <p>Select your construction service and share project details for a custom consultation.</p>
            </div>
            <form onSubmit={submit}>
              <label>Name *<input name="name" required placeholder="Your name" /></label>
              <label>Phone number *<input name="phone" type="tel" required placeholder="Your phone number" /></label>
              <label>Email address *<input name="email" type="email" required placeholder="Your email address" /></label>

              <label>Choose construction service *
                <select name="service" defaultValue={initialService}>
                  {constructionServices.map(({ title }) => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>
              </label>

              <label>Tell us a little about your project<textarea name="message" rows={3} placeholder="A little about plot location, size, timeline, or requirements..." /></label>

              <button className="button button-dark modal-submit" type="submit">
                Get a free quote <ArrowRight size={17} />
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

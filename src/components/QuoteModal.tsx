import type { FormEvent } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { coimbatoreLocations } from '../data/content';

export function QuoteModal({
  closeQuote,
  formSent,
  setFormSent,
  initialService = 'Construction',
  isRealEstate = false,
}: {
  closeQuote: () => void;
  formSent: boolean;
  setFormSent: (sent: boolean) => void;
  initialService?: string;
  isRealEstate?: boolean;
}) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const phone = String(form.get('phone') ?? '');
    const email = String(form.get('email') ?? '');
    const message = String(form.get('message') ?? '');

    let text = '';
    if (isRealEstate) {
      const location = String(form.get('location') ?? '');
      const propertyAction = String(form.get('propertyAction') ?? initialService);
      text = `*New Property Enquiry - Vishnu Builderr*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Property Requirement:* ${propertyAction}\n*Location:* ${location}${message ? `\n\n*Project Details:*\n${message}` : ''}`;
    } else {
      const service = String(form.get('service') ?? initialService);
      text = `*New Quote Enquiry - Vishnu Builderr*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Selected Service:* ${service}${message ? `\n\n*Project Details:*\n${message}` : ''}`;
    }

    const waUrl = `https://wa.me/919566714471?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setFormSent(true);
  };

  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) closeQuote(); }}>
      <motion.div className="quote-modal" initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }}>
        <button className="modal-close" onClick={closeQuote} aria-label="Close quote form"><X size={20} /></button>
        {formSent ? (
          <div className="success-state">
            <div className="success-icon"><Check size={30} /></div>
            <h2>WhatsApp Opened!</h2>
            <p>We opened WhatsApp with your enquiry details pre-filled for <strong>+91 95667 14471</strong>. Press send in WhatsApp and our team will get back to you shortly.</p>
            <button className="button button-dark" onClick={closeQuote}>Back to website</button>
          </div>
        ) : (
          <>
            <div className="modal-intro">
              <p className="eyebrow">Start a conversation</p>
              <h2>Let&apos;s talk about<br /><em>your project.</em></h2>
              <p>Share a few details and we will get back to you soon.</p>
            </div>
            <form onSubmit={submit}>
              <label>Name *<input name="name" required placeholder="Your name" /></label>
              <label>Phone number *<input name="phone" type="tel" required placeholder="Your phone number" /></label>
              <label>Email address *<input name="email" type="email" required placeholder="Your email address" /></label>

              {isRealEstate ? (
                <>
                  <label>Property Requirement / Service *
                    <select name="propertyAction" defaultValue={initialService === 'Construction' ? 'Buy Property' : initialService}>
                      <option value="Buy Property">Buy Property</option>
                      <option value="Sell Property">Sell Property</option>
                    </select>
                  </label>
                  <label>Select Place / Location *
                    <select name="location" defaultValue={coimbatoreLocations[0]}>
                      {coimbatoreLocations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </label>
                </>
              ) : (
                <label>Choose our services *
                  <select name="service" defaultValue={initialService}>
                    <option value="Construction">Construction</option>
                    <option value="Interior">Interior</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="I am not sure">I am not sure</option>
                  </select>
                </label>
              )}

              <label>Tell us a little more<textarea name="message" rows={3} placeholder="A little about your project or property..." /></label>

              <button className="button button-dark modal-submit" type="submit">
                {isRealEstate ? 'Submit' : 'Get a free quote'} <ArrowRight size={17} />
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

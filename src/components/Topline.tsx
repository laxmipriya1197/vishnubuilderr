import { Mail, Phone, Instagram } from 'lucide-react';

export function Topline() {
  return (
    <div className="topline">
      <div className="container top-inner">
        <a href="mailto:vishnubuilderr@gmail.com"><Mail size={14} /> vishnubuilderr@gmail.com</a>
        <span className="top-divider" />
        <a href="tel:+919566714471"><Phone size={14} /> +91 95667 14471</a>
        <span className="top-spacer" />
        <span>Coimbatore · Tamil Nadu</span>
        <a
          href="https://www.instagram.com/vishnubuilderr?igsh=dmkyeG00cmhuYmJx"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Vishnu Builderr on Instagram"
          style={{ color: 'inherit', display: 'inline-flex', alignItems: 'center' }}
        >
          <Instagram size={15} />
        </a>
      </div>
    </div>
  );
}

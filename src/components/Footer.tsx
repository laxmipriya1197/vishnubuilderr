import { Mail, Phone, MapPin } from 'lucide-react';
import type { Page } from '../types';

export function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-col footer-about">
          <button className="footer-brand" onClick={() => navigate('home')}>Vishnu Builderr</button>
          <p>We engineer your dreams — construction, interior design, and real estate services in and around Coimbatore.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><button onClick={() => navigate('home')}>Home</button></li>
            <li><button onClick={() => navigate('about')}>About us</button></li>
            <li><button onClick={() => navigate('construction')}>Construction</button></li>
            <li><button onClick={() => navigate('real-estate')}>Real estate</button></li>
            <li><button onClick={() => navigate('contact')}>Contact us</button></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Residential construction</li>
            <li>Architectural works</li>
            <li>Interior designs</li>
            <li>Real estate investments</li>
            <li>Property management</li>
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <h4>Get in touch</h4>
          <a href="tel:+919566714471"><Phone size={16} /> +91 95667 14471</a>
          <a href="mailto:vishnubuilderr@gmail.com"><Mail size={16} /> vishnubuilderr@gmail.com</a>
          <span><MapPin size={16} /> Pappampatti Pirivu, Coimbatore - 641103</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Vishnu Builderr. All rights reserved.</span>
          <span>We engineer your dreams.</span>
        </div>
      </div>
    </footer>
  );
}

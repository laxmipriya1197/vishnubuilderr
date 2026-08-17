import { ArrowRight, Menu, X } from 'lucide-react';
import type { Page } from '../types';
import { navItems } from '../data/content';

export function Header({
  page,
  scrolled,
  menuOpen,
  setMenuOpen,
  navigate,
  openQuote,
}: {
  page: Page;
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  navigate: (page: Page) => void;
  openQuote: () => void;
}) {
  return (
    <>
      <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container nav-inner">
          <button className="brand brand-button" onClick={() => { navigate('home'); setMenuOpen(false); }} aria-label="Vishnu Builderr home">
            <img src="/images/logo.png" alt="Vishnu Builderr" width="190" height="48" style={{ objectFit: 'contain' }} />
          </button>

          {/* Hamburger / Close Toggle Button */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="nav-links desktop-only">
            {navItems.map((item) => (
              <button className={page === item.page ? 'active' : ''} key={item.page} onClick={() => navigate(item.page)}>
                {item.label}
              </button>
            ))}
          </nav>

          <button className="nav-cta desktop-only" onClick={openQuote}>
            Get a free quote <ArrowRight size={16} />
          </button>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer sliding from LEFT */}
      <aside className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <button className="brand brand-button" onClick={() => { navigate('home'); setMenuOpen(false); }}>
            <img src="/images/logo.png" alt="Vishnu Builderr" width="150" height="38" style={{ objectFit: 'contain' }} />
          </button>
          <button className="drawer-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <p className="drawer-eyebrow">NAVIGATION</p>
          <nav className="mobile-nav-list">
            {navItems.map((item, index) => (
              <button
                key={item.page}
                className={`mobile-nav-item ${page === item.page ? 'active' : ''}`}
                onClick={() => { navigate(item.page); setMenuOpen(false); }}
                style={{ transitionDelay: `${index * 0.07 + 0.12}s` }}
              >
                <span className="mobile-nav-num">0{index + 1}</span>
                <span className="mobile-nav-text">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mobile-drawer-footer">
          <button className="button button-primary mobile-drawer-cta" onClick={() => { openQuote(); setMenuOpen(false); }}>
            Get a free quote <ArrowRight size={16} />
          </button>
          <div className="mobile-drawer-contact">
            <p>📍 Pappampatti Pirivu, Coimbatore - 641103</p>
            <p>📞 +91 95667 14471</p>
          </div>
        </div>
      </aside>
    </>
  );
}

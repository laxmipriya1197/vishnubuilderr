import { ArrowRight, Menu } from 'lucide-react';
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
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container nav-inner">
        <button className="brand brand-button" onClick={() => navigate('home')} aria-label="Vishnu Builderr home">
          <img src="/images/logo.png" alt="Vishnu Builderr" width="190" height="48" style={{ objectFit: 'contain' }} />
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <Menu size={23} />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <button className={page === item.page ? 'active' : ''} key={item.page} onClick={() => navigate(item.page)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className="nav-cta" onClick={openQuote}>
          Get a free quote <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}

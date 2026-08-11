import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Page } from './types';
import { fadeUp } from './data/content';
import { Topline } from './components/Topline';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingButtons } from './components/FloatingButtons';
import { HomePage } from './pages/Home';
import { ConstructionPage } from './pages/Construction';
import { RealEstatePage } from './pages/RealEstate';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';

function getPage(): Page {
  const path = window.location.pathname.replace(/\/$/, '');
  if (path === '/construction') return 'construction';
  if (path === '/real-estate') return 'real-estate';
  if (path === '/about') return 'about';
  if (path === '/contact') return 'contact';
  return 'home';
}

function App() {
  const [page, setPage] = useState<Page>(getPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteService, setQuoteService] = useState<string>('Construction');
  const [isRealEstateModal, setIsRealEstateModal] = useState<boolean>(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onPopState = () => { setPage(getPage()); setMenuOpen(false); window.scrollTo(0, 0); };
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('popstate', onPopState);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('popstate', onPopState); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => { document.body.style.overflow = quoteOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [quoteOpen]);

  const navigate = (nextPage: Page) => {
    const path = nextPage === 'home' ? '/' : `/${nextPage}`;
    window.history.pushState({}, '', path);
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const openQuote = (service = 'Construction', isRealEstate = false) => {
    setQuoteService(service);
    setIsRealEstateModal(isRealEstate);
    setQuoteOpen(true);
    setFormSent(false);
  };
  const closeQuote = () => { setQuoteOpen(false); setFormSent(false); };
  const viewport = { once: true, amount: 0.18 } as const;
  const motionProps = reduceMotion ? { initial: false, animate: { opacity: 1, y: 0 } } : { initial: 'hidden', whileInView: 'visible', variants: fadeUp, viewport };

  return (
    <div className="site-shell">
      <Topline />
      <Header page={page} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} openQuote={() => openQuote('Construction')} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div key={page} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.35 }}>
            {page === 'home' && <HomePage navigate={navigate} openQuote={() => openQuote('Construction')} reduceMotion={reduceMotion} motionProps={motionProps} viewport={viewport} />}
            {page === 'construction' && <ConstructionPage openQuote={() => openQuote('Construction')} motionProps={motionProps} viewport={viewport} />}
            {page === 'real-estate' && <RealEstatePage openQuote={(service) => openQuote(service, true)} motionProps={motionProps} viewport={viewport} />}
            {page === 'about' && <AboutPage motionProps={motionProps} viewport={viewport} />}
            {page === 'contact' && <ContactPage openQuote={() => openQuote('Construction')} motionProps={motionProps} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer navigate={navigate} />
      <FloatingButtons />
      {quoteOpen && <QuoteModal closeQuote={closeQuote} formSent={formSent} setFormSent={setFormSent} initialService={quoteService} isRealEstate={isRealEstateModal} />}
    </div>
  );
}

export default App;

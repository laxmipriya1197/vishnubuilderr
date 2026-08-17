import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, BookOpen, Sparkles } from 'lucide-react';

interface BookPage {
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  fallback: string;
  highlights: string[];
}

const bookPages: BookPage[] = [
  {
    number: '01',
    tag: 'Phase 01 • Property Trading',
    title: 'Buy & sell property',
    description: 'Make your next property move with clear advice, deep local knowledge, and absolute legal confidence in Coimbatore and surrounding regions.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    fallback: '/images/hero-1.png',
    highlights: [
      'Legal verification & title deed validation',
      'Accurate market valuation & price negotiation',
      'DTCP & RERA approved land & home selections',
      'Hassle-free registration & documentation support',
    ],
  },
  {
    number: '02',
    tag: 'Phase 02 • Wealth Growth',
    title: 'Real estate investments',
    description: 'Discover high-growth real estate opportunities tailored to your financial goals, timeline, and risk preference with expert strategic guidance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    fallback: '/images/hero-2.png',
    highlights: [
      'Prime growth corridor & plot identification',
      'ROI & rental yield projection analysis',
      'Joint venture & commercial land advisory',
      'Comprehensive risk assessment & portfolio planning',
    ],
  },
  {
    number: '03',
    tag: 'Phase 03 • Brand & Promotion',
    title: 'Marketing & management',
    description: 'Showcase your property professionally to reach verified buyers quickly. We handle targeted marketing, site tours, and smooth negotiation.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    fallback: '/images/hero-3.png',
    highlights: [
      'High-impact visual listing & photography',
      'Targeted buyer network matching',
      'Managed site visits & verified buyer screening',
      'Transparent contract drafting & closing support',
    ],
  },
  {
    number: '04',
    tag: 'Phase 04 • Asset Protection',
    title: 'Property management',
    description: 'Practical, reliable asset care that protects your property value and gives you complete peace of mind, whether resident or NRI.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    fallback: '/images/image copy.png',
    highlights: [
      'Tenant screening & verified lease contracts',
      'Periodic physical site inspections & reports',
      'Quality maintenance & repair coordination',
      'Property tax tracking & utility management',
    ],
  },
];

export function BookFlipSection({ openQuote }: { openQuote?: (service?: string) => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goToPage = (index: number) => {
    if (index === currentPage) return;
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  const nextPage = () => {
    if (currentPage < bookPages.length - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    } else {
      setDirection(1);
      setCurrentPage(0);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    } else {
      setDirection(-1);
      setCurrentPage(bookPages.length - 1);
    }
  };

  const page = bookPages[currentPage];

  // 3D Flip Variant
  const flipVariants = {
    initial: (dir: number) => ({
      rotateY: dir > 0 ? 45 : -45,
      opacity: 0,
      scale: 0.96,
      transformPerspective: 1200,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformPerspective: 1200,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -45 : 45,
      opacity: 0,
      scale: 0.96,
      transformPerspective: 1200,
      transition: {
        duration: 0.45,
        ease: [0.7, 0, 0.84, 0],
      },
    }),
  };

  return (
    <div className="book-flip-container">
      {/* Journal Header Bar */}
      <div className="book-header-bar">
        <div className="book-badge">
          <BookOpen size={16} />
          <span>Real Estate Journal & Services</span>
        </div>
        <div className="book-page-indicator">
          <Sparkles size={14} className="sparkle-icon" />
          <span>Page <strong>0{currentPage + 1}</strong> of 0{bookPages.length}</span>
        </div>
      </div>

      {/* 3D Book Experience Stage */}
      <div className="book-stage">
        {/* Outer 3D Book Frame */}
        <div className="book-wrapper">
          {/* Subtle page background stack edges */}
          <div className="book-stack-layer book-stack-3" />
          <div className="book-stack-layer book-stack-2" />
          <div className="book-stack-layer book-stack-1" />

          {/* Central Book Spine Fold Shadow */}
          <div className="book-center-spine" aria-hidden="true" />

          {/* Animated 3D Spread */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={flipVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="book-spread"
            >
              {/* Left Page (Image & Visual Spread) */}
              <div className="book-page book-page-left">
                <div className="page-texture-overlay" />
                <div className="book-image-frame">
                  <img
                    src={page.image}
                    alt={page.title}
                    className="book-page-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = page.fallback;
                    }}
                  />
                  <div className="book-img-gradient" />
                  
                  {/* Photo Stamp Badge */}
                  <div className="book-stamp">
                    <span className="stamp-num">{page.number}</span>
                    <span className="stamp-text">Vishnu Builderr</span>
                  </div>

                  {/* Caption overlay */}
                  <div className="book-img-caption">
                    <p className="caption-tag">{page.tag}</p>
                    <h4 className="caption-title">{page.title}</h4>
                  </div>
                </div>
                
                {/* Left Page Number */}
                <div className="page-footer-num left-num">0{currentPage * 2 + 1}</div>
              </div>

              {/* Right Page (Details & Highlights) */}
              <div className="book-page book-page-right">
                <div className="page-texture-overlay" />
                <div className="book-page-content">
                  <div className="book-page-header">
                    <span className="book-chapter-tag">{page.tag}</span>
                    <span className="book-large-num">{page.number}</span>
                  </div>

                  <h3 className="book-service-title">{page.title}</h3>
                  <p className="book-service-desc">{page.description}</p>

                  <div className="book-highlights-title">Key Advantages</div>
                  <ul className="book-highlights-list">
                    {page.highlights.map((item, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="highlight-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {openQuote && (
                    <div className="book-action-wrap">
                      <button
                        className="button button-primary book-quote-btn"
                        onClick={() => openQuote(`Real Estate - ${page.title}`)}
                      >
                        <span>Consult on {page.title}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </div>

                {/* Right Page Number */}
                <div className="page-footer-num right-num">0{currentPage * 2 + 2}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <button
          className="book-nav-btn book-nav-prev"
          onClick={prevPage}
          aria-label="Previous Page"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="book-nav-btn book-nav-next"
          onClick={nextPage}
          aria-label="Next Page"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Book Page Tabs Pagination */}
      <div className="book-tabs">
        {bookPages.map((item, index) => (
          <button
            key={item.number}
            className={`book-tab-btn ${index === currentPage ? 'active' : ''}`}
            onClick={() => goToPage(index)}
          >
            <span className="tab-num">{item.number}</span>
            <span className="tab-title">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

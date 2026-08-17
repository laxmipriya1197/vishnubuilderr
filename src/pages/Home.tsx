import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Building2, Landmark, ShieldCheck, MapPin } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { Page } from '../types';
import { heroSlides, constructionServices, realEstateServices, testimonials, fadeUp, stagger } from '../data/content';
import { SectionTitle } from '../components/SectionTitle';
import { BuildingIllustration } from '../components/BuildingIllustration';

export function HomePage({
  navigate,
  openQuote,
  reduceMotion,
  motionProps,
  viewport,
}: {
  navigate: (page: Page) => void;
  openQuote: () => void;
  reduceMotion: boolean | null;
  motionProps: Record<string, unknown>;
  viewport: { once: boolean; amount: number };
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [visibleTestimonialsCount, setVisibleTestimonialsCount] = useState(3);
  const [openServiceCard, setOpenServiceCard] = useState<number | null>(null);
  const introRef = useRef<HTMLElement>(null);
  const { scrollYProgress: introProgress } = useScroll({ target: introRef, offset: ['start 82%', 'start 32%'] });
  const introLeftX = useSpring(useTransform(introProgress, [0, 1], [-105, 0]), { stiffness: 70, damping: 24 });
  const introRightX = useSpring(useTransform(introProgress, [0, 1], [105, 0]), { stiffness: 70, damping: 24 });
  const introOpacity = useTransform(introProgress, [0, .35], [0, 1]);
  const serviceImages = [
    '/images/construction-service-01.webp',
    '/images/construction-service-02.webp',
    '/images/construction-service-03.webp',
    '/images/construction-service-04.webp',
  ];
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateVisibleTestimonials = () => {
      if (window.innerWidth <= 680) setVisibleTestimonialsCount(1);
      else if (window.innerWidth <= 900) setVisibleTestimonialsCount(2);
      else setVisibleTestimonialsCount(3);
    };

    updateVisibleTestimonials();
    window.addEventListener('resize', updateVisibleTestimonials);
    return () => window.removeEventListener('resize', updateVisibleTestimonials);
  }, []);

  const moveSlide = (direction: number) => setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  const moveTestimonials = (direction: number) => {
    setTestimonialIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = Array.from({ length: visibleTestimonialsCount }, (_, index) => {
    const testimonialIndexValue = (testimonialIndex + index) % testimonials.length;
    return testimonials[testimonialIndexValue];
  });

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeSlide}
              className="hero-bg-layer"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(20,24,22,0.88) 0%, rgba(20,24,22,0.6) 55%, rgba(20,24,22,0.45) 100%), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </AnimatePresence>
          <div className="hero-grid-pattern" />
          <motion.div
            className="hero-shape hero-shape-1"
            animate={reduceMotion ? {} : { y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ background: slide.accent }}
          />
          <motion.div
            className="hero-shape hero-shape-2"
            animate={reduceMotion ? {} : { y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              className="hero-copy"
              key={activeSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow light"><span /> {slide.eyebrow}</p>
              <h1>{slide.title.map((line) => <span key={line}>{line}<br /></span>)}</h1>
              <p className="hero-body">{slide.body}</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={openQuote}>Start a conversation <ArrowRight size={18} /></button>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="hero-bottom">
            <div className="hero-counter"><strong>0{activeSlide + 1}</strong><span />0{heroSlides.length}</div>
            <div className="slider-controls">
              <button onClick={() => moveSlide(-1)} aria-label="Previous slide"><ChevronLeft size={18} /></button>
              <button onClick={() => moveSlide(1)} aria-label="Next slide"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="intro section-pad split-intro-reveal" ref={introRef}>
        <div className="container intro-grid">
          <motion.div style={reduceMotion ? undefined : { x: introLeftX, opacity: introOpacity }}>
            <p className="eyebrow">The Vishnu Builderr way</p>
            <h2>Spaces made with <em>care</em>,<br />not just concrete.</h2>
          </motion.div>
          <motion.div className="intro-text" style={reduceMotion ? undefined : { x: introRightX, opacity: introOpacity }}>
            <p>We are a construction, interior design, and real estate company helping people make confident decisions about the places they call home.</p>
            <p>With deep local knowledge and a practical approach, we turn big ideas into well-built, well-loved spaces.</p>
            <button className="text-link" onClick={() => navigate('about')}>More about us <ArrowRight size={16} /></button>
          </motion.div>
        </div>
      </section>

      <section className="dark-section section-pad home-about">
        <div className="container home-about-grid">
          <motion.div className="about-visual" {...motionProps}>
            <BuildingIllustration />
          </motion.div>
          <motion.div className="about-copy" {...motionProps} transition={{ delay: 0.15 }}>
            <p className="eyebrow light">About Vishnu Builderr</p>
            <h2>Built on experience.<br /><em>Driven by trust.</em></h2>
            <p>For us, building is personal. It is about listening properly, guiding honestly, and delivering the quality we promised.</p>
            <button className="button button-primary" onClick={() => navigate('about')}>Our story <ArrowRight size={17} /></button>
          </motion.div>
        </div>
      </section>

      <section className="service-section section-pad">
        <div className="container">
          <SectionTitle
            eyebrow="What we do"
            title={<>Everything you need<br />to <em>build better.</em></>}
            text="One team, from first conversation to final handover. Thoughtful work, transparent communication, and no unnecessary complications."
          />
          <motion.div className="service-grid home-service-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            {constructionServices.slice(0, 4).map(({ icon: Icon, title, text }, index) => (
              <motion.article
                className={`service-card home-image-service-card${openServiceCard === index ? ' is-open' : ''}`}
                key={title}
                variants={fadeUp}
                tabIndex={0}
                role="button"
                aria-label={`${title} service card`}
                aria-expanded={openServiceCard === index}
                onClick={() => setOpenServiceCard((current) => current === index ? null : index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setOpenServiceCard((current) => current === index ? null : index);
                  }
                }}
              >
                <img className="home-service-image" src={serviceImages[index]} alt="" />
                <div className="home-service-content">
                  <div className="icon-box"><Icon size={23} strokeWidth={1.5} /></div>
                  <span className="card-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <button tabIndex={openServiceCard === index ? 0 : -1} onClick={(event) => { event.stopPropagation(); navigate('construction'); }} aria-label={`Learn more about ${title}`}><ArrowRight size={18} /></button>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <button className="center-link" onClick={() => navigate('construction')}>View all construction services <ArrowRight size={17} /></button>
        </div>
      </section>

      {/* Real Estate Section below What we do section */}
      <section className="estate-section section-pad home-real-estate-section">
        <div className="container">
          <SectionTitle
            eyebrow="Real estate & land guidance"
            title={<>Trusted guidance for<br /><em>land, homes & investment.</em></>}
            text="With 15+ years of real estate experience in Coimbatore, we help you buy, sell, and invest with absolute clarity and legal confidence."
          />

          <div className="home-estate-grid">
            <motion.div
              className="home-estate-visual-wrap"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="home-estate-image-box">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80"
                  alt="Real Estate & Property Investment Coimbatore"
                  className="home-estate-img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/hero-1.png';
                  }}
                />
                <div className="home-estate-img-overlay" />
                <div className="home-estate-badge">
                  <strong>15+</strong>
                  <span>Years Real Estate<br />Trust in Coimbatore</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="home-estate-features"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
            >
              {realEstateServices.map(({ icon: Icon, title, text }) => (
                <motion.div
                  className="home-estate-feature-card"
                  key={title}
                  variants={fadeUp}
                  whileHover={{ x: 8, transition: { duration: 0.25, ease: 'easeOut' } }}
                  onClick={() => navigate('real-estate')}
                >
                  <div className="feature-icon-box">
                    <Icon size={22} />
                  </div>
                  <div className="feature-info">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span className="feature-arrow"><ArrowRight size={16} /></span>
                </motion.div>
              ))}

              <div className="home-estate-actions">
                <button className="button button-primary" onClick={() => navigate('real-estate')}>
                  Explore Real Estate Services <ArrowRight size={17} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="testimonial-section section-pad">
        <div className="container">
          <div className="testimonial-header">
            <SectionTitle
              eyebrow="Client Testimonials"
              title={<>What our clients say about<br /><em>Vishnu Builderr.</em></>}
              text="Real feedback from property owners, homeowners, and commercial clients across Coimbatore."
            />
            <div className="testimonial-controls" aria-label="Testimonial controls">
              <button type="button" onClick={() => moveTestimonials(-1)} aria-label="Previous testimonial"><ChevronLeft size={18} /></button>
              <button type="button" onClick={() => moveTestimonials(1)} aria-label="Next testimonial"><ChevronRight size={18} /></button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              className="testimonial-grid"
              style={{ gridTemplateColumns: `repeat(${visibleTestimonialsCount}, minmax(0, 1fr))` }}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {visibleTestimonials.map(({ name, role, quote, rating }, index) => (
                <motion.article className="testimonial-card" key={`${name}-${testimonialIndex}-${index}`} variants={fadeUp}>
                  <div className="testimonial-stars">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
                  <div className="testimonial-author">
                    <div className="avatar-badge">{name.charAt(0)}</div>
                    <div className="author-info">
                      <strong>{name}</strong>
                      <span>{role}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="testimonial-dots" aria-label="Testimonial pagination">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === testimonialIndex ? 'active' : ''}
                onClick={() => setTestimonialIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container quote-band-inner">
          <div>
            <p className="eyebrow light">Your vision, our expertise</p>
            <h2>Let&apos;s make something<br /><em>worth coming home to.</em></h2>
          </div>
          <button className="button button-primary" onClick={openQuote}>Contact us <ArrowRight size={17} /></button>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import { BadgeCheck, Check, Clock3, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../data/content';
import { PageHero } from '../components/PageHero';
import { BuildingIllustration } from '../components/BuildingIllustration';

export function AboutPage({
  motionProps,
  viewport,
}: {
  motionProps: Record<string, unknown>;
  viewport: { once: boolean; amount: number };
}) {
  return (
    <>
      <PageHero
        eyebrow="About Vishnu Builderr"
        title={<>Built with purpose.<br /><em>Made to last.</em></>}
        text="We help people make better decisions about the places they build, live, work, and invest in."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
      />
      <motion.section
        className="section-pad about-introduction"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25, once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <div className="container about-intro-grid">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <p className="eyebrow">Professional construction & real estate services</p>
            <h2>We build more than<br /><em>four walls.</em></h2>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 90 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <p>Vishnu Builderr is a construction, interior, and real estate company serving in and around Coimbatore, Tamil Nadu. With 8 years of experience in construction and interior works, and 7+ years in real estate, we bring a practical understanding of how good spaces come together.</p>
            <p>Our promise is simple: listen properly, guide honestly, and deliver work we are proud to put our name on.</p>
          </motion.div>
        </div>
      </motion.section>

      <section className="dark-section section-pad">
        <div className="container about-story-grid">
          <motion.div className="about-story-visual" {...motionProps}>
            <BuildingIllustration />
          </motion.div>
          <motion.div className="about-copy" {...motionProps} transition={{ delay: 0.15 }}>
            <p className="eyebrow light">Our approach</p>
            <h2>Building dreams with<br /><em>innovation and excellence.</em></h2>
            <p>From design thinking to responsible execution, every project receives the attention it deserves. We believe the best work happens when people feel informed, respected, and involved.</p>
            <div className="about-checks">
              <span><Check size={16} /> Clear communication</span>
              <span><Check size={16} /> Practical guidance</span>
              <span><Check size={16} /> Quality-focused work</span>
              <span><Check size={16} /> Respect for your budget</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad difference-stack-section">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">What makes us different</p>
            <h2>A better experience<br /><em>from day one.</em></h2>
            <p className="difference-subtext">Swipe or click the cards below to explore our core pillars.</p>
          </div>

          <DifferenceCardStack />
        </div>
      </section>
    </>
  );
}

function DifferenceCardStack() {
  const [cards, setCards] = useState([
    {
      id: '1',
      number: '01',
      icon: Users,
      tag: '01 • CLIENT FIRST',
      title: 'Client-first understanding',
      text: 'We begin with your real needs, lifestyle, and vision — creating custom structural & architectural plans instead of one-size-fits-all templates.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      fallback: '/images/construction-service-01.webp',
    },
    {
      id: '2',
      number: '02',
      icon: ShieldCheck,
      tag: '02 • TRANSPARENCY',
      title: 'Transparent process & BOQ',
      text: 'You always know every detail before construction begins — line-item budget estimates, exact material specs, schedules, and engineering responsibilities.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      fallback: '/images/construction-service-07.webp',
    },
    {
      id: '3',
      number: '03',
      icon: BadgeCheck,
      tag: '03 • CRAFTSMANSHIP',
      title: 'Quality without compromise',
      text: 'We balance beautiful architectural aesthetics with sound structural engineering, strict IS safety codes, and rigorous multi-stage quality inspections.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      fallback: '/images/hero-3.png',
    },
    {
      id: '4',
      number: '04',
      icon: Clock3,
      tag: '04 • TIMELINE & BUDGET',
      title: 'On-time, on-budget delivery',
      text: 'Milestone-based project management and regular weekly progress updates keep your construction moving forward reliably with total peace of mind.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      fallback: '/images/hero-2.png',
    },
  ]);

  const [activeId, setActiveId] = useState('1');

  const handleNext = () => {
    setCards((prev) => {
      const list = [...prev];
      const first = list.shift();
      if (first) list.push(first);
      setActiveId(list[0].id);
      return list;
    });
  };

  const handlePrev = () => {
    setCards((prev) => {
      const list = [...prev];
      const last = list.pop();
      if (last) list.unshift(last);
      setActiveId(list[0].id);
      return list;
    });
  };

  const jumpToCard = (targetId: string) => {
    setCards((prev) => {
      const foundIndex = prev.findIndex((c) => c.id === targetId);
      if (foundIndex <= 0) return prev;
      const list = [...prev];
      const moved = list.splice(foundIndex, 1)[0];
      list.unshift(moved);
      return list;
    });
    setActiveId(targetId);
  };

  const stackTransforms = [
    { scale: 1, rotate: 0, x: 0, y: 0, zIndex: 10, opacity: 1 },
    { scale: 0.94, rotate: -6, x: -22, y: -16, zIndex: 9, opacity: 0.88 },
    { scale: 0.88, rotate: -12, x: -40, y: -30, zIndex: 8, opacity: 0.65 },
    { scale: 0.82, rotate: -18, x: -56, y: -44, zIndex: 7, opacity: 0.4 },
  ];

  return (
    <div className="swipe-deck-wrapper">
      <div className="swipe-deck-container">
        {cards.map((card, idx) => {
          const isTop = idx === 0;
          const transform = stackTransforms[idx] || stackTransforms[stackTransforms.length - 1];
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              className={`swipe-card-item ${isTop ? 'is-top-card' : ''}`}
              style={{ zIndex: transform.zIndex }}
              animate={{
                scale: transform.scale,
                rotate: transform.rotate,
                x: transform.x,
                y: transform.y,
                opacity: transform.opacity,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              drag={isTop ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              dragSnapToOrigin={true}
              onDragEnd={(e, info) => {
                if (isTop && Math.abs(info.offset.x) > 70) {
                  handleNext();
                }
              }}
              onClick={() => {
                if (!isTop) {
                  jumpToCard(card.id);
                }
              }}
            >
              <div className="swipe-card-inner">
                <div className="swipe-card-topbar">
                  <span className="swipe-card-tag">{card.tag}</span>
                  <div className="swipe-card-icon-box">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="swipe-card-media">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="swipe-card-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = card.fallback;
                    }}
                  />
                  <div className="swipe-card-img-overlay" />
                </div>

                <div className="swipe-card-content">
                  <h3 className="swipe-card-title">{card.title}</h3>
                  <p className="swipe-card-text">{card.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="swipe-deck-controls">
        <button className="swipe-nav-btn" onClick={handlePrev} aria-label="Previous card">
          ‹
        </button>

        <div className="swipe-deck-dots">
          {['1', '2', '3', '4'].map((id) => (
            <button
              key={id}
              type="button"
              className={`swipe-dot ${activeId === id ? 'is-active' : ''}`}
              onClick={() => jumpToCard(id)}
              aria-label={`Go to card ${id}`}
            />
          ))}
        </div>

        <button className="swipe-nav-btn" onClick={handleNext} aria-label="Next card">
          ›
        </button>
      </div>

      <p className="swipe-hint-text">
        <span>← Drag card to swipe →</span>
      </p>
    </div>
  );
}

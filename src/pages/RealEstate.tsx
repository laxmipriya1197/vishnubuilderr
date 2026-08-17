import { ArrowRight, House, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { realEstateServices, fadeUp, stagger } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionTitle } from '../components/SectionTitle';
import { BookFlipSection } from '../components/BookFlipSection';

export function RealEstatePage({
  openQuote,
  motionProps,
  viewport,
}: {
  openQuote: (service?: string) => void;
  motionProps: Record<string, unknown>;
  viewport: { once: boolean; amount: number };
}) {
  return (
    <>
      <PageHero
        eyebrow="Real estate services"
        title={<>The right place<br /><em>changes everything.</em></>}
        text="Whether you are buying, selling, or investing, we make property decisions simpler with local knowledge and straight advice."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="real-estate-intro section-pad">
        <div className="container">
          <div className="buy-sell-grid">
            <motion.div
              className="buy-sell-card buy-card-image"
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Buy Property"
                className="buy-sell-bg-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/construction-service-01.webp';
                }}
              />
              <div className="buy-sell-overlay buy-overlay" />

              <div className="buy-sell-card-content">
                <div className="estate-icon"><House size={28} /></div>
                <h2>Buy</h2>
                <p>Find a place that fits your plans, your budget, and the way you want to live.</p>
                <button className="button button-primary" onClick={() => openQuote('Buy Property')}>
                  Find a property <ArrowRight size={17} />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="buy-sell-card sell-card-image"
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Sell Property"
                className="buy-sell-bg-img"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/hero-1.png';
                }}
              />
              <div className="buy-sell-overlay sell-overlay" />

              <div className="buy-sell-card-content">
                <div className="estate-icon"><Landmark size={28} /></div>
                <h2>Sell</h2>
                <p>Present your property with confidence and reach serious, well-informed buyers.</p>
                <button className="button button-primary" onClick={() => openQuote('Sell Property')}>
                  Discuss your property <ArrowRight size={17} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="dark-section section-pad overflow-hidden">
        <div className="container">
          <SectionTitle
            eyebrow="Interactive Real Estate Journal"
            title={<>Explore our real estate<br /><em>services & expertise.</em></>}
            text="Turn through our interactive journal pages to discover how we assist with buying, selling, investing, and property management."
          />
          <BookFlipSection openQuote={openQuote} />
        </div>
      </section>
    </>
  );
}

import { ArrowRight, House, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { realEstateServices, fadeUp, stagger } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionTitle } from '../components/SectionTitle';

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
            <motion.div className="buy-sell-card buy" {...motionProps}>
              <div className="estate-icon"><House size={28} /></div>
              <h2>Buy</h2>
              <p>Find a place that fits your plans, your budget, and the way you want to live.</p>
              <button className="button button-dark" onClick={() => openQuote('Buy Property')}>Find a property <ArrowRight size={17} /></button>
            </motion.div>
            <motion.div className="buy-sell-card sell" {...motionProps} transition={{ delay: 0.15 }}>
              <div className="estate-icon"><Landmark size={28} /></div>
              <h2>Sell</h2>
              <p>Present your property with confidence and reach serious, well-informed buyers.</p>
              <button className="button button-primary" onClick={() => openQuote('Sell Property')}>Discuss your property <ArrowRight size={17} /></button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad projects-section">
        <div className="container">
          <SectionTitle
            eyebrow="Ongoing projects"
            title={<>Opportunities with<br /><em>room to grow.</em></>}
            text="Ask our team about current residential plots, homes, and investment opportunities in and around Coimbatore."
          />
          <div className="project-feature">
            <div className="project-visual">
              <div className="project-city"><span /><span /><span /><span /><span /></div>
              <div className="project-road" />
            </div>
            <div className="project-copy">
              <p className="eyebrow">Featured opportunity</p>
              <h3>Residential spaces made for tomorrow.</h3>
              <p>We help you look beyond the brochure — checking the location, understanding the potential, and choosing with confidence.</p>
              <button className="button button-dark" onClick={() => openQuote('Real estate')}>Enquire now <ArrowRight size={17} /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section section-pad">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow light">Efficiency in delivering</p>
            <h2>Property guidance<br /><em>that feels simple.</em></h2>
          </div>
          <motion.div className="estate-service-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            {realEstateServices.map(({ icon: Icon, title, text }) => (
              <motion.article variants={fadeUp} key={title}>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container estate-detail-grid">
          <motion.div {...motionProps}>
            <p className="eyebrow">What you get</p>
            <h2>Our real estate<br /><em>service promise.</em></h2>
            <p className="estate-lead">The right property partner helps you see the full picture. We bring together practical support, market awareness, and a relationship you can trust.</p>
          </motion.div>
          <motion.div className="estate-list large" {...motionProps} transition={{ delay: 0.15 }}>
            {realEstateServices.map(({ title }, index) => (
              <button key={title} onClick={() => openQuote('Real estate')}>
                <span><b>0{index + 1}</b>{title}</span>
                <ArrowRight size={18} />
              </button>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

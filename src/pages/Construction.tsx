import { ArrowRight, CircleCheck, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';
import { constructionServices, fadeUp, stagger } from '../data/content';
import { PageHero } from '../components/PageHero';
import { SectionTitle } from '../components/SectionTitle';

export function ConstructionPage({
  openQuote,
  motionProps,
  viewport,
}: {
  openQuote: () => void;
  motionProps: Record<string, unknown>;
  viewport: { once: boolean; amount: number };
}) {
  return (
    <>
      <PageHero
        eyebrow="Construction services"
        title={<>We build for<br /><em>the life inside.</em></>}
        text="From a first sketch to a finished home, our construction team brings discipline, clarity, and care to every stage."
      />
      <section className="section-pad">
        <div className="container">
          <SectionTitle
            eyebrow="Our construction services"
            title={<>Built around<br /><em>your vision.</em></>}
            text="Our experience covers residential and commercial construction — design, approvals, building, interiors, and handover."
          />
          <motion.div className="service-grid detail-services" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            {constructionServices.map(({ icon: Icon, title, text }, index) => (
              <motion.article className={index === 0 ? 'service-card featured' : 'service-card'} key={title} variants={fadeUp} whileHover={{ y: -6 }}>
                <div className="icon-box"><Icon size={25} strokeWidth={1.5} /></div>
                <span className="card-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <button onClick={openQuote}><ArrowRight size={18} /></button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="dark-section section-pad">
        <div className="container">
          <SectionTitle
            eyebrow="Core strengths of our construction expertise"
            title={<>The details that<br /><em>make the difference.</em></>}
            text="Good construction is not only about the finish. It is about how every decision works together."
          />
          <motion.div className="strength-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            {[
              ['01', 'Transparent pricing', 'A practical scope and clear costs help you make confident decisions.'],
              ['02', 'Quality materials', 'We choose materials for performance, durability, and long-term value.'],
              ['03', 'On-time delivery', 'A planned process, regular updates, and responsible coordination keep things moving.'],
              ['04', 'Experienced team', 'You work with people who understand both the craft and the responsibility.'],
            ].map(([number, title, text]) => (
              <motion.div className="strength-card" variants={fadeUp} key={number}>
                <span>{number}</span>
                <CircleCheck size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad process-light">
        <div className="container">
          <SectionTitle
            eyebrow="Our construction process"
            title={<>A clear path from<br /><em>plan to possession.</em></>}
            text="Every project is different, but our commitment to clear communication stays the same."
          />
          <div className="timeline-grid">
            {[
              ['01', 'Agreement signing', 'We understand your needs, finalize the scope, and set expectations together.'],
              ['02', 'Soil test & planning', 'We study your site and prepare the right foundation for the build.'],
              ['03', 'Groundbreaking ceremony', 'Your project officially begins with the right people and preparations in place.'],
              ['04', 'Custom building', 'Our teams coordinate every stage and keep you informed throughout.'],
            ].map(([number, title, text]) => (
              <motion.div className="timeline-card" key={number} {...motionProps}>
                <span>{number}</span>
                <div className="timeline-icon"><Hammer size={20} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
          <div className="center-button">
            <button className="button button-dark" onClick={openQuote}>
              Start your construction project <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

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
      />
      <section className="section-pad about-introduction">
        <div className="container about-intro-grid">
          <motion.div {...motionProps}>
            <p className="eyebrow">Professional construction & real estate services</p>
            <h2>We build more than<br /><em>four walls.</em></h2>
          </motion.div>
          <motion.div {...motionProps} transition={{ delay: 0.15 }}>
            <p>Vishnu Builderr is a construction, interior, and real estate company serving in and around Coimbatore, Tamil Nadu. With 8 years of experience in construction and interior works, and 15 years in real estate, we bring a practical understanding of how good spaces come together.</p>
            <p>Our promise is simple: listen properly, guide honestly, and deliver work we are proud to put our name on.</p>
          </motion.div>
        </div>
      </section>

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

      <section className="section-pad">
        <div className="container">
          <div className="center-heading">
            <p className="eyebrow">What makes us different</p>
            <h2>A better experience<br /><em>from day one.</em></h2>
          </div>
          <motion.div className="difference-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
            {[
              [Users, 'Client-first understanding', 'We begin with your real needs, not a one-size-fits-all package.'],
              [ShieldCheck, 'Transparent process', 'You always know the next step, the scope, and the people responsible.'],
              [BadgeCheck, 'Quality without compromise', 'We balance beautiful finishes with sound, lasting construction.'],
              [Clock3, 'On-time, on-budget delivery', 'A thoughtful plan keeps your project moving and your mind at ease.'],
            ].map(([Icon, title, text]) => (
              <motion.article variants={fadeUp} key={title as string}>
                <div className="difference-icon"><Icon size={24} /></div>
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

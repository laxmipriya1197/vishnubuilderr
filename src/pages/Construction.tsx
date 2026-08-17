import { useState } from 'react';
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
  const serviceItems = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
      fallback: '/images/construction-service-01.webp',
    },
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      fallback: '/images/construction-service-02.webp',
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
      fallback: '/images/construction-service-03.webp',
    },
    {
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
      fallback: '/images/construction-service-04.webp',
    },
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
      fallback: '/images/construction-service-05.webp',
    },
    {
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=900&q=80',
      fallback: '/images/construction-service-06.webp',
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
      fallback: '/images/construction-service-07.webp',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Construction services"
        title={<>We build for<br /><em>the life inside.</em></>}
        text="From a first sketch to a finished home, our construction team brings discipline, clarity, and care to every stage."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
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
              <motion.article
                className="construction-service-card"
                key={title}
                variants={fadeUp}
                whileHover={{ y: -7, transition: { duration: 0.3, ease: 'easeOut' } }}
              >
                <img
                  src={serviceItems[index].image}
                  alt={title}
                  className="service-card-bg"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = serviceItems[index].fallback;
                  }}
                />
                <div className="service-card-overlay" />
                <div className="service-card-body">
                  <div className="service-card-top">
                    <div className="icon-box"><Icon size={22} strokeWidth={1.5} /></div>
                    <span className="service-card-num">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="dark-section section-pad overflow-hidden">
        <div className="container">
          <SectionTitle
            eyebrow="Core strengths of our construction expertise"
            title={<>The details that<br /><em>make the difference.</em></>}
            text="Good construction is not only about the finish. It is about how every decision works together."
          />
        </div>

        <div className="strengths-marquee-wrap">
          <div className="strengths-marquee-track">
            {[
              ['01', 'Transparent pricing', 'A practical scope and clear costs help you make confident decisions.'],
              ['02', 'Quality materials', 'We choose materials for performance, durability, and long-term value.'],
              ['03', 'On-time delivery', 'A planned process, regular updates, and responsible coordination keep things moving.'],
              ['04', 'Experienced team', 'You work with people who understand both the craft and the responsibility.'],
              ['05', 'Structural safety', 'Built adhering strictly to civil engineering standards and structural safety codes.'],
              ['06', 'Dedicated supervision', 'Continuous on-site engineering inspection ensures quality control at every stage.'],

              ['01', 'Transparent pricing', 'A practical scope and clear costs help you make confident decisions.'],
              ['02', 'Quality materials', 'We choose materials for performance, durability, and long-term value.'],
              ['03', 'On-time delivery', 'A planned process, regular updates, and responsible coordination keep things moving.'],
              ['04', 'Experienced team', 'You work with people who understand both the craft and the responsibility.'],
              ['05', 'Structural safety', 'Built adhering strictly to civil engineering standards and structural safety codes.'],
              ['06', 'Dedicated supervision', 'Continuous on-site engineering inspection ensures quality control at every stage.'],
            ].map(([number, title, text], idx) => (
              <div className="strength-card-item" key={`${number}-${idx}`}>
                <div className="strength-card-header">
                  <span className="strength-card-num">{number}</span>
                  <CircleCheck size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="section-pad process-light-timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.1,
            },
          },
        }}
      >
        <div className="container">
          <div className="section-heading center-heading">
            <div>
              <motion.p
                className="eyebrow"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                Our Construction Process
              </motion.p>
              <h2>
                <motion.span
                  style={{ display: 'block' }}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  A clear path from
                </motion.span>
                <motion.span
                  style={{ display: 'block' }}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <em>plan to possession.</em>
                </motion.span>
              </h2>
            </div>
            <motion.p
              style={{ maxWidth: '540px', margin: '16px auto 0' }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              Every project is unique, but our commitment to precision, transparency, and clear communication stays the same at every stage.
            </motion.p>
          </div>

          <div className="process-timeline-wrap">
            {/* Continuous central vertical line */}
            <div className="timeline-central-stem" aria-hidden="true" />

            {[
              {
                number: '01',
                title: 'Client Consultation',
                tag: 'Phase 01 • Discovery',
                text: 'We understand your requirements, budget, lifestyle, design preferences, and project expectations before planning begins.',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/construction-service-01.webp',
              },
              {
                number: '02',
                title: 'Site Visit & Survey',
                tag: 'Phase 02 • Assessment',
                text: 'We assess the site, plot dimensions, levels, access, boundaries, and surrounding conditions for accurate planning.',
                image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/construction-service-02.webp',
              },
              {
                number: '03',
                title: 'Planning & Concept Design',
                tag: 'Phase 03 • Conceptualization',
                text: 'We create an efficient layout considering room sizes, parking, circulation, ventilation, lighting, and future needs.',
                image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/construction-service-03.webp',
              },
              {
                number: '04',
                title: 'Architectural Design',
                tag: 'Phase 04 • Architectural Drafting',
                text: 'We develop detailed floor plans, elevations, sections, and architectural drawings based on the approved concept.',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/construction-service-04.webp',
              },
              {
                number: '05',
                title: 'Structural Design',
                tag: 'Phase 05 • Structural Engineering',
                text: 'We design the foundation, columns, beams, slabs, staircase, and reinforcement for a safe and durable structure.',
                image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/construction-service-05.webp',
              },
              {
                number: '06',
                title: 'Electrical, Plumbing & Services Planning',
                tag: 'Phase 06 • MEP Engineering',
                text: 'We coordinate electrical, plumbing, drainage, water supply, AC provisions, and other essential building services.',
                image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/construction-service-06.webp',
              },
              {
                number: '07',
                title: 'Estimate, BOQ & Budget Finalization',
                tag: 'Phase 07 • Financial Estimation',
                text: 'We prepare detailed quantity estimates and BOQ to establish a clear and practical construction budget.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/construction-service-07.webp',
              },
              {
                number: '08',
                title: 'Approvals & Pre-Construction',
                tag: 'Phase 08 • Regulatory Approval',
                text: 'We organize required approvals, working drawings, schedules, contracts, and site arrangements before construction begins.',
                image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/hero-1.png',
              },
              {
                number: '09',
                title: 'Construction & Engineering Supervision',
                tag: 'Phase 09 • On-Site Execution',
                text: 'We execute construction according to approved drawings while ensuring proper engineering and site supervision.',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/hero-2.png',
              },
              {
                number: '10',
                title: 'Quality Control & Progress Monitoring',
                tag: 'Phase 10 • Quality Audit',
                text: 'We regularly inspect materials, workmanship, structural works, services, and overall project progress.',
                image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/hero-3.png',
              },
              {
                number: '11',
                title: 'Finishing, Final Inspection & Handover',
                tag: 'Phase 11 • Handover & Keys',
                text: 'We complete finishing works, conduct final inspections, rectify pending issues, and prepare the project for handover.',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
                fallback: '/images/image copy.png',
              },
            ].map((step, index) => {
              const isEvenRight = index % 2 !== 0; // index 0 (01) is Left, 1 (02) is Right, 2 (03) is Left, etc.

              return (
                <motion.div
                  key={step.number}
                  className={`timeline-row ${isEvenRight ? 'timeline-row-right' : 'timeline-row-left'}`}
                  initial={{ opacity: 0, x: isEvenRight ? 90 : -90 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Central Node Dot on Vertical Line */}
                  <div className="timeline-central-node" aria-hidden="true">
                    <span>{step.number}</span>
                  </div>

                  {/* Branch Line Connecting Central Line to Card */}
                  <div className="timeline-branch-connector" aria-hidden="true" />

                  {/* Card with heading-based background image & luxury typography */}
                  <motion.div
                    className="timeline-image-card"
                    whileHover={{ y: -7, transition: { duration: 0.3, ease: 'easeOut' } }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="card-bg-image"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = step.fallback;
                      }}
                    />
                    <div className="card-overlay" />
                    <div className="card-content">
                      <div className="card-header">
                        <span className="card-tag">{step.tag}</span>
                        <span className="card-big-num">{step.number}</span>
                      </div>
                      <h3 className="card-title">{step.title}</h3>
                      <p className="card-text">{step.text}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="center-button"
            style={{ marginTop: '60px' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            <button className="button button-dark" onClick={openQuote}>
              Start your construction project <ArrowRight size={17} />
            </button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

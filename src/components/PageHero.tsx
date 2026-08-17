import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  image?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="page-hero"
      style={image ? {
        backgroundImage: `linear-gradient(90deg, rgba(19, 25, 22, 0.78) 0%, rgba(19, 25, 22, 0.58) 45%, rgba(19, 25, 22, 0.45) 100%), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : undefined}
    >
      <div className="page-hero-pattern" />
      <motion.div
        className="container page-hero-content"
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.05,
            },
          },
        }}
      >
        <motion.p
          className="eyebrow light"
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          <span /> {eyebrow}
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

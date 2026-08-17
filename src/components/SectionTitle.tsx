import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SectionTitle({
  eyebrow,
  title,
  text,
  centered = false,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  centered?: boolean;
  light?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`section-heading${centered ? ' center-heading' : ''}`}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ amount: 0.25, once: false }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0,
          },
        },
      }}
    >
      <div>
        <motion.p
          className={`eyebrow${light ? ' light' : ''}`}
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {title}
        </motion.h2>
      </div>
      {text && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
}

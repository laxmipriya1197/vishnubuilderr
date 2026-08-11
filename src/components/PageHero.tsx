import type { ReactNode } from 'react';

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-pattern" />
      <div className="container page-hero-content">
        <p className="eyebrow light"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

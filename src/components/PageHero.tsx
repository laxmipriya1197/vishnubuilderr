import type { ReactNode } from 'react';

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
      <div className="container page-hero-content">
        <p className="eyebrow light"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

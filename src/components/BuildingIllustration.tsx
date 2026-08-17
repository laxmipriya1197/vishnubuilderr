export function BuildingIllustration({
  image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  fallback = '/images/hero-1.png',
  alt = 'Modern 3D Architectural Villa Design'
}: {
  image?: string;
  fallback?: string;
  alt?: string;
}) {
  return (
    <div className="about-visual-3d">
      <div className="about-3d-frame">
        <img
          src={image}
          alt={alt}
          className="about-3d-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallback;
          }}
        />
        <div className="about-3d-overlay" />
      </div>
      <div className="experience-badge">
        <strong>15+ Years</strong>
        <span>of Combined Experience</span>
      </div>
    </div>
  );
}

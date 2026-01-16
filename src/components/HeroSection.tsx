import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/science-bg.webp"
          alt="Science Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Centered Subtitle */}
      <div className="absolute inset-0 flex items-center justify-center z-10" style={{ paddingBottom: '15vh' }}>
        <p
          style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '16px',
            fontWeight: 500,
            color: '#f7f3ec',
            letterSpacing: 'normal',
            textAlign: 'center',
          }}
        >
          (Supplements that actually work)
        </p>
      </div>

      {/* Title - At bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end px-4"
        style={{ paddingBottom: '40px' }}
      >
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[145px]"
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontWeight: 500,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            color: '#f7f3ec',
            textAlign: 'center',
          }}
        >
          The ultimate
          <div style={{ height: '12px' }} />
          Collagen Protocol
        </h1>
      </div>
    </section>
  );
}

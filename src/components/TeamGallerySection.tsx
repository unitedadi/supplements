'use client';

import Image from 'next/image';

const galleryImages = [
  { src: '/images/team-003.webp', alt: 'Lab work' },
  { src: '/images/team-006.webp', alt: 'Research' },
  { src: '/images/team-009.webp', alt: 'Team collaboration' },
  { src: '/images/team-002.webp', alt: 'Innovation' },
  { src: '/images/team-007.webp', alt: 'Engineering' },
  { src: '/images/team-012.webp', alt: 'Science' },
  { src: '/images/team-010.webp', alt: 'Discovery' },
  { src: '/images/team-008.webp', alt: 'Progress' },
  { src: '/images/team-001.webp', alt: 'Future' },
  { src: '/images/team-011.webp', alt: 'Dedication' },
];

export default function TeamGallerySection() {
  const firstHalf = galleryImages.slice(0, 5);
  const secondHalf = galleryImages.slice(5);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #111111 100%)',
        padding: '128px 0',
      }}
    >
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .scroll-left {
          animation: scrollLeft 60s linear infinite;
          will-change: transform;
        }
        .scroll-right {
          animation: scrollRight 60s linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Ambient glow effects */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(199, 47, 11, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(247, 243, 236, 0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 pb-8">
        <p
          style={{
            fontFamily: 'var(--font-neue-haas-text)',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(247, 243, 236, 0.4)',
            marginBottom: '16px',
          }}
        >
          Pre-order now
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontSize: '56px',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#f7f3ec',
            maxWidth: '800px',
            margin: '0 auto',
            paddingBottom: '32px',
          }}
        >
          The science is ready. Now is the time.
        </h2>
      </div>

      {/* Gallery Row 1 */}
      <div className="relative overflow-hidden mb-10">
        <div
          className="flex gap-5 scroll-left"
          style={{ width: 'fit-content' }}
        >
          {[...firstHalf, ...firstHalf].map((img, idx) => (
            <div
              key={idx}
              className="relative shrink-0 group"
              style={{
                width: '420px',
                height: '280px',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  transform: 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  style={{
                    filter: 'saturate(0.9) contrast(1.05)',
                    transition: 'filter 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                />
                {/* Cinematic overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
                  }}
                />
                {/* Film grain texture */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              {/* Subtle border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: '1px solid rgba(247, 243, 236, 0.08)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Row 2 */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-5 scroll-right"
          style={{ width: 'fit-content' }}
        >
          {[...secondHalf, ...secondHalf].map((img, idx) => (
            <div
              key={idx}
              className="relative shrink-0 group"
              style={{
                width: '380px',
                height: '320px',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  transform: 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  style={{
                    filter: 'saturate(0.9) contrast(1.05)',
                    transition: 'filter 0.6s ease, transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                />
                {/* Cinematic overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
                  }}
                />
                {/* Film grain texture */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              {/* Subtle border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: '1px solid rgba(247, 243, 236, 0.08)',
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

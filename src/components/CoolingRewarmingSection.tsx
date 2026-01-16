'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function CoolingRewarmingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [sectionTop, setSectionTop] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if section is in view for fixed positioning
      const inView = rect.top <= 0 && rect.bottom >= windowHeight;
      setIsInView(inView);
      setSectionTop(rect.top);

      // Calculate progress: 0 at start, 1 at end
      const scrollableDistance = sectionHeight - windowHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // The entire horizontal strip moves left
  // At 0% progress: show Cooling (left) + partial image (right)
  // At 100% progress: show partial image (left) + Rewarming (right)
  // Total strip width: 200vw (Cooling 50vw + Image 100vw + Rewarming 50vw)
  // We need to translate from 0 to -100vw (or -50% of 200vw)
  const translateX = scrollProgress * 50; // 0% to 50% of strip width

  // Determine position style
  const getPositionStyle = () => {
    if (sectionTop > 0) {
      return { position: 'absolute' as const, top: 0 };
    } else if (isInView) {
      return { position: 'fixed' as const, top: 0 };
    } else {
      return { position: 'absolute' as const, bottom: 0 };
    }
  };

  // Mobile layout - simple stacked sections
  if (isMobile) {
    return (
      <section style={{ padding: '80px 24px' }}>
        {/* Jalupro Section */}
        <div style={{ marginBottom: '80px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-neue-haas-display)',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#121212',
              marginBottom: '12px',
            }}
          >
            Jalupro
          </h2>
          <h3
            style={{
              fontFamily: 'var(--font-neue-haas-display)',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              color: '#121212',
              marginBottom: '32px',
            }}
          >
            We don&apos;t add collagen. We activate it.
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#121212',
              marginBottom: '20px',
            }}
          >
            The body produces collagen only when fibroblasts receive the right biochemical signals. Over time, these signals weaken. Cells slow down. Production drops.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#121212',
              marginBottom: '20px',
            }}
          >
            Jalupro works by re-educating fibroblasts, delivering targeted amino acids and biorevitalizing compounds directly into the skin. This triggers cellular activity, encouraging the body to restart its own collagen synthesis, improve hydration, and restore tissue quality from within.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#121212',
              marginBottom: '32px',
            }}
          >
            This is not replacement. It&apos;s regeneration.
          </p>
          <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <Image
              src="/images/frame_9.png"
              alt="Jalupro"
              width={800}
              height={500}
              style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
            />
          </div>
        </div>

        {/* Decoded (GS1) Section */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-neue-haas-display)',
              fontSize: '32px',
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: '#121212',
              marginBottom: '12px',
            }}
          >
            Decoded (GS1)
          </h2>
          <h3
            style={{
              fontFamily: 'var(--font-neue-haas-display)',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
              color: '#121212',
              marginBottom: '32px',
            }}
          >
            We don&apos;t stimulate. We supply.
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#121212',
              marginBottom: '20px',
            }}
          >
            Collagen loss happens faster than the body can replace it. Aging, stress, gut dysfunction, and inflammation reduce both collagen levels and absorption. Waiting for the body to produce more—without raw materials—creates a bottleneck.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#121212',
              marginBottom: '20px',
            }}
          >
            GS1 bypasses this limitation by delivering collagen directly, supplying three bioavailable collagen sources and a high concentration of essential amino acids the body cannot synthesize on its own. These micro-building blocks enter circulation ready for use, supporting skin structure, joint integrity, and connective tissue repair.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#121212',
            }}
          >
            This is not a signal. It&apos;s the material.
          </p>
        </div>
      </section>
    );
  }

  // Desktop layout - horizontal scroll effect
  return (
    <section ref={sectionRef} className="relative" style={{ height: '300vh' }}>
      {/* Fixed viewport container */}
      <div
        className="left-0 right-0 h-screen overflow-hidden"
        style={getPositionStyle()}
      >
        {/* Horizontal strip that moves left - 200vw wide */}
        <div
          className="relative h-full"
          style={{
            width: '200vw',
            transform: `translateX(-${translateX}%)`,
          }}
        >
          {/* Single continuous image spanning the full width */}
          <div
            className="absolute flex items-center"
            style={{
              left: '50vw',
              width: '100vw',
              top: 0,
              bottom: 0,
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '70%',
                maxHeight: '600px',
              }}
            >
              <Image
                src="/images/frame_9.png"
                alt="Cooling chamber"
                fill
                className="object-cover object-left"
                style={{
                  borderRadius: '24px',
                }}
                priority
              />
            </div>
          </div>

          {/* Jalupro Text - positioned at left */}
          <div
            className="absolute left-0 top-0 h-full flex items-center"
            style={{
              width: '50vw',
              paddingLeft: '120px',
              paddingRight: '40px',
            }}
          >
            <div style={{ maxWidth: '480px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-neue-haas-display)',
                  fontSize: '48px',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  marginBottom: '16px',
                  color: '#121212',
                }}
              >
                Jalupro
              </h2>
              <h3
                style={{
                  fontFamily: 'var(--font-neue-haas-display)',
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                  marginBottom: '32px',
                  color: '#121212',
                }}
              >
                We don&apos;t add collagen. We activate it.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#121212',
                  marginBottom: '20px',
                }}
              >
                The body produces collagen only when fibroblasts receive the right biochemical signals. Over time, these signals weaken. Cells slow down. Production drops.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#121212',
                  marginBottom: '20px',
                }}
              >
                Jalupro works by re-educating fibroblasts, delivering targeted amino acids and biorevitalizing compounds directly into the skin. This triggers cellular activity, encouraging the body to restart its own collagen synthesis, improve hydration, and restore tissue quality from within.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#121212',
                }}
              >
                This is not replacement. It&apos;s regeneration.
              </p>
            </div>
          </div>

          {/* Decoded (GS1) Text - positioned at right */}
          <div
            className="absolute top-0 h-full flex items-center justify-end"
            style={{
              left: '150vw',
              width: '50vw',
              paddingRight: '120px',
              paddingLeft: '40px',
            }}
          >
            <div style={{ maxWidth: '480px' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-neue-haas-display)',
                  fontSize: '48px',
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  marginBottom: '16px',
                  color: '#121212',
                }}
              >
                Decoded (GS1)
              </h2>
              <h3
                style={{
                  fontFamily: 'var(--font-neue-haas-display)',
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                  marginBottom: '32px',
                  color: '#121212',
                }}
              >
                We don&apos;t stimulate. We supply.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#121212',
                  marginBottom: '20px',
                }}
              >
                Collagen loss happens faster than the body can replace it. Aging, stress, gut dysfunction, and inflammation reduce both collagen levels and absorption. Waiting for the body to produce more—without raw materials—creates a bottleneck.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#121212',
                  marginBottom: '20px',
                }}
              >
                GS1 bypasses this limitation by delivering collagen directly, supplying three bioavailable collagen sources and a high concentration of essential amino acids the body cannot synthesize on its own. These micro-building blocks enter circulation ready for use, supporting skin structure, joint integrity, and connective tissue repair.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#121212',
                }}
              >
                This is not a signal. It&apos;s the material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

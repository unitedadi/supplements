'use client';

import Image from 'next/image';
import { useCart } from '@/context/CartContext';

interface ContentSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  showPreorder?: boolean;
  productId?: string;
  productSubtitle?: string;
  price?: number;
  originalPrice?: number;
}

export default function ContentSection({
  id,
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  reverse = false,
  showPreorder = false,
  productId,
  productSubtitle,
  price,
  originalPrice,
}: ContentSectionProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (productId && price) {
      addToCart({
        id: productId,
        name: title,
        subtitle: productSubtitle || subtitle,
        price,
        image: imageSrc,
      });
    }
  };
  return (
    <section
      id={id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-center px-6 py-24 sm:px-8 sm:py-32 lg:py-40"
      style={{
        paddingLeft: 'clamp(24px, 5vw, 176px)',
        paddingRight: 'clamp(24px, 5vw, 72px)',
        paddingTop: 'clamp(96px, 12vw, 160px)',
        paddingBottom: 'clamp(96px, 12vw, 160px)',
      }}
    >
      {/* Image Container */}
      <div
        className={`${reverse ? 'lg:order-2' : ''} flex items-center justify-center`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={450}
          height={340}
          className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px]"
          style={{
            height: 'auto',
            borderRadius: '16px',
          }}
        />
      </div>

      {/* Text Content */}
      <div className={`${reverse ? 'lg:order-1' : ''} max-w-[560px]`}>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl mb-3"
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#121212',
          }}
        >
          {title}
        </h2>
        <h3
          className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-10"
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            color: '#121212',
          }}
        >
          {subtitle}
        </h3>
        {paragraphs.map((text, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base"
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#121212',
              marginBottom: idx === paragraphs.length - 1 ? (showPreorder ? '32px' : '0') : '16px',
            }}
          >
            {text}
          </p>
        ))}
        {showPreorder && (
          <div style={{ marginBottom: '24px' }}>
            {/* Prelaunch pricing */}
            {price && (
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-neue-haas-text)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(18, 18, 18, 0.45)',
                    }}
                  >
                    Prelaunch
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-neue-haas-display)',
                      fontSize: '28px',
                      fontWeight: 500,
                      color: '#121212',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    AED {price}
                  </span>
                </div>
                {originalPrice && (
                  <span
                    style={{
                      fontFamily: 'var(--font-neue-haas-display)',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: 'rgba(18, 18, 18, 0.35)',
                      letterSpacing: '-0.01em',
                      textDecoration: 'line-through',
                      textDecorationColor: 'rgba(18, 18, 18, 0.25)',
                    }}
                  >
                    AED {originalPrice}
                  </span>
                )}
              </div>
            )}
            <button
              onClick={handleAddToCart}
              style={{
                fontFamily: 'var(--font-neue-haas-display)',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f7f3ec',
                backgroundColor: '#121212',
                border: 'none',
                padding: '16px 36px',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2a2a2a';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(18, 18, 18, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#121212';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

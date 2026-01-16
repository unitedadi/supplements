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
      className="grid grid-cols-2 gap-32 items-center"
      style={{
        padding: '80px 72px 80px 176px',
      }}
    >
      {/* Image Container */}
      <div
        className={reverse ? 'order-2' : ''}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={450}
          height={340}
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '16px',
          }}
        />
      </div>

      {/* Text Content */}
      <div className={reverse ? 'order-1' : ''} style={{ maxWidth: '560px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontSize: '48px',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: '12px',
            color: '#121212',
          }}
        >
          {title}
        </h2>
        <h3
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
            marginBottom: '24px',
            color: '#121212',
          }}
        >
          {subtitle}
        </h3>
        {paragraphs.map((text, idx) => (
          <p
            key={idx}
            style={{
              fontFamily: 'var(--font-neue-haas-text)',
              fontSize: '16px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {price && (
              <span
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#121212',
                  letterSpacing: '-0.02em',
                }}
              >
                AED {price}
              </span>
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

'use client';

import { useCart } from '@/context/CartContext';

interface CartIconProps {
  isOnDark: boolean;
}

export default function CartIcon({ isOnDark }: CartIconProps) {
  const { toggleCart, totalItems } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="relative flex items-center justify-center"
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: isOnDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(18, 18, 18, 0.06)',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = isOnDark
          ? 'rgba(255, 255, 255, 0.2)'
          : 'rgba(18, 18, 18, 0.1)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isOnDark
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(18, 18, 18, 0.06)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          transition: 'stroke 0.3s ease',
        }}
      >
        <path
          d="M6 6h15l-1.5 9h-13L6 6zm0 0L5.25 3H3"
          stroke={isOnDark ? '#f7f3ec' : '#121212'}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="20"
          r="1"
          fill={isOnDark ? '#f7f3ec' : '#121212'}
        />
        <circle
          cx="18"
          cy="20"
          r="1"
          fill={isOnDark ? '#f7f3ec' : '#121212'}
        />
      </svg>

      {/* Badge */}
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            minWidth: '18px',
            height: '18px',
            backgroundColor: '#c52f0b',
            color: '#f7f3ec',
            fontFamily: '"Geist Mono", monospace',
            fontSize: '10px',
            fontWeight: 600,
            borderRadius: '9px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 5px',
            animation: totalItems > 0 ? 'badgePop 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {totalItems}
        </span>
      )}

      <style jsx>{`
        @keyframes badgePop {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </button>
  );
}

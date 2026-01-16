'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful checkout
    clearCart();
  }, [clearCart]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f7f3ec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Success Icon */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#2a7d4f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 32px',
            animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-neue-haas-display)',
            fontSize: '32px',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: '#121212',
            marginBottom: '16px',
          }}
        >
          Order Confirmed!
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: 'var(--font-neue-haas-text)',
            fontSize: '16px',
            fontWeight: 400,
            color: 'rgba(18, 18, 18, 0.6)',
            lineHeight: 1.6,
            marginBottom: '32px',
          }}
        >
          Thank you for your purchase. We&apos;ve received your order and will begin processing it shortly.
          You&apos;ll receive an email confirmation with your order details.
        </p>

        {/* Continue Shopping Button */}
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '56px',
            padding: '0 48px',
            backgroundColor: '#121212',
            color: '#f7f3ec',
            border: 'none',
            borderRadius: '12px',
            fontFamily: 'var(--font-neue-haas-display)',
            fontSize: '15px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2a2a2a';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(18, 18, 18, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#121212';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Continue Shopping
        </Link>

        {/* Additional Info */}
        <p
          style={{
            fontFamily: '"Geist Mono", monospace',
            fontSize: '11px',
            fontWeight: 500,
            color: 'rgba(18, 18, 18, 0.4)',
            marginTop: '32px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Free UAE Delivery
        </p>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

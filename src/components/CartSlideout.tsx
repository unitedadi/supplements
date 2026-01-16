'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartSlideout() {
  const { items, isOpen, closeCart, totalItems, totalPrice, updateQuantity, removeFromCart, checkout, isCheckingOut } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(18, 18, 18, 0.4)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 100,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      {/* Cart Panel */}
      <div
        ref={panelRef}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '480px',
          backgroundColor: '#f7f3ec',
          zIndex: 101,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-20px 0 60px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '28px 32px',
            borderBottom: '1px solid rgba(18, 18, 18, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-neue-haas-display)',
                fontSize: '24px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                color: '#121212',
              }}
            >
              Your Cart
            </h2>
            <span
              style={{
                fontFamily: '"Geist Mono", monospace',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(18, 18, 18, 0.5)',
                letterSpacing: '0.02em',
              }}
            >
              ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
          </div>
          <button
            onClick={closeCart}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid rgba(18, 18, 18, 0.12)',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(18, 18, 18, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(18, 18, 18, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(18, 18, 18, 0.12)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M12 4L4 12M4 4L12 12"
                stroke="#121212"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px 32px',
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(18, 18, 18, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6h15l-1.5 9h-13L6 6zm0 0L5.25 3H3"
                    stroke="rgba(18, 18, 18, 0.3)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="19" r="1.5" fill="rgba(18, 18, 18, 0.3)" />
                  <circle cx="18" cy="19" r="1.5" fill="rgba(18, 18, 18, 0.3)" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: 'rgba(18, 18, 18, 0.5)',
                }}
              >
                Your cart is empty
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {items.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    paddingBottom: index < items.length - 1 ? '20px' : '0',
                    borderBottom: index < items.length - 1 ? '1px solid rgba(18, 18, 18, 0.06)' : 'none',
                    animation: 'fadeSlideIn 0.4s ease forwards',
                    animationDelay: `${index * 0.08}s`,
                    opacity: 0,
                  }}
                >
                  {/* Product Image */}
                  <div
                    style={{
                      width: '110px',
                      height: '110px',
                      flexShrink: 0,
                      position: 'relative',
                      borderRadius: '12px',
                      backgroundColor: '#ffffff',
                      overflow: 'hidden',
                      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'contain', padding: '8px' }}
                    />
                  </div>

                  {/* Product Details */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-neue-haas-display)',
                          fontSize: '17px',
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                          color: '#121212',
                          marginBottom: '4px',
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-neue-haas-text)',
                          fontSize: '13px',
                          fontWeight: 400,
                          color: 'rgba(18, 18, 18, 0.5)',
                          lineHeight: 1.4,
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {/* Quantity Controls */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0',
                          backgroundColor: 'rgba(18, 18, 18, 0.04)',
                          borderRadius: '8px',
                          padding: '4px',
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(18, 18, 18, 0.08)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6H9.5" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </button>
                        <span
                          style={{
                            fontFamily: '"Geist Mono", monospace',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: '#121212',
                            minWidth: '24px',
                            textAlign: 'center',
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(18, 18, 18, 0.08)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 2.5V9.5M2.5 6H9.5" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <span
                          style={{
                            fontFamily: '"Geist Mono", monospace',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: '#121212',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          AED {(item.price * item.quantity).toFixed(0)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                            opacity: 0.4,
                            transition: 'opacity 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0.4';
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                              d="M3 4h10M6 4V3a1 1 0 011-1h2a1 1 0 011 1v1m2 0v9a1 1 0 01-1 1H5a1 1 0 01-1-1V4h8z"
                              stroke="#121212"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: '24px 32px 32px',
              borderTop: '1px solid rgba(18, 18, 18, 0.08)',
              backgroundColor: '#f7f3ec',
            }}
          >
            {/* Subtotal */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(18, 18, 18, 0.6)',
                }}
              >
                Subtotal
              </span>
              <span
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(18, 18, 18, 0.6)',
                }}
              >
                AED {totalPrice.toFixed(0)}
              </span>
            </div>

            {/* Shipping */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(18, 18, 18, 0.06)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(18, 18, 18, 0.6)',
                }}
              >
                Shipping
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-neue-haas-text)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#2a7d4f',
                }}
              >
                Free
              </span>
            </div>

            {/* Total */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-neue-haas-display)',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#121212',
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#121212',
                  letterSpacing: '-0.02em',
                }}
              >
                AED {totalPrice.toFixed(0)}
              </span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={checkout}
              disabled={isCheckingOut}
              style={{
                width: '100%',
                height: '56px',
                backgroundColor: isCheckingOut ? '#6b6b6b' : '#121212',
                color: '#f7f3ec',
                border: 'none',
                borderRadius: '12px',
                fontFamily: 'var(--font-neue-haas-display)',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: isCheckingOut ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => {
                if (!isCheckingOut) {
                  e.currentTarget.style.backgroundColor = '#2a2a2a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(18, 18, 18, 0.25)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isCheckingOut) {
                  e.currentTarget.style.backgroundColor = '#121212';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {isCheckingOut ? (
                <>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ animation: 'spin 1s linear infinite' }}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="31.4 31.4"
                    />
                  </svg>
                  Processing...
                </>
              ) : (
                'Proceed to Checkout'
              )}
            </button>

            {/* Secure checkout note */}
            <p
              style={{
                fontFamily: '"Geist Mono", monospace',
                fontSize: '11px',
                fontWeight: 500,
                color: 'rgba(18, 18, 18, 0.4)',
                textAlign: 'center',
                marginTop: '16px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ marginRight: '6px' }}>🔒</span>
              Secure checkout • Free UAE delivery
            </p>
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const router = useRouter();
  const { openCart } = useCart();

  useEffect(() => {
    // Redirect to home and open cart slideout
    openCart();
    router.push('/');
  }, [openCart, router]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f7f3ec',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-neue-haas-text)',
          fontSize: '16px',
          color: 'rgba(18, 18, 18, 0.6)',
        }}
      >
        Redirecting to cart...
      </p>
    </div>
  );
}

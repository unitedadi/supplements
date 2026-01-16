'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CartIcon from './CartIcon';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOnDark, setIsOnDark] = useState(true);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(-1);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero-section');
      const scrollY = window.scrollY;

      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setIsOnDark(heroBottom > 100);
        setScrolled(heroBottom <= 100);
      }

      // First call - just set lastScrollY and show nav if at top
      if (lastScrollY.current === -1) {
        lastScrollY.current = scrollY;
        setShowNav(scrollY < 10);
        return;
      }

      // Scrolling down = collapse, scrolling up = expand
      if (scrollY === 0) {
        setShowNav(true);
      } else {
        const diff = scrollY - lastScrollY.current;
        if (diff > 5) {
          setShowNav(false);
        } else if (diff < -5) {
          setShowNav(true);
        }
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header
        className="flex items-center"
        style={{
          padding: '12px 20px',
          gap: '16px',
          borderRadius: '50px',
          backgroundColor: scrolled ? 'rgba(215, 210, 200, 0.85)' : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(25.5px) brightness(1.04) contrast(1.075)',
          WebkitBackdropFilter: 'blur(25.5px) brightness(1.04) contrast(1.075)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'rgba(0, 0, 0, 0.043) 0px 7.5px 30px 0px, rgba(255, 255, 255, 0.3) 0px 1px 1px 0px inset',
          transition: 'background-color 0.3s ease',
        }}
      >
      {/* Logo */}
      <Link href="/" className="flex items-center cursor-pointer">
        <Image
          src={isOnDark ? '/images/logo_white.png' : '/images/logo_black.png'}
          alt="DarDoc Health"
          width={120}
          height={32}
          className="h-6 w-auto md:h-7"
        />
      </Link>

      {/* Navigation - Hidden on mobile and tablet, only show on large screens */}
      <nav
        className="hidden xl:flex items-center gap-6"
        style={{
          opacity: showNav ? 1 : 0,
          maxWidth: showNav ? '500px' : '0px',
          overflow: 'hidden',
          transition: 'opacity 0.4s ease, max-width 0.4s ease',
        }}
      >
        {[
          { href: '#decoded', label: 'Decoded' },
          { href: '#jalupro', label: 'Jalupro' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:opacity-70 text-sm"
            style={{
              fontFamily: 'var(--font-neue-haas-text), Arial, Helvetica, sans-serif',
              fontWeight: 500,
              color: isOnDark ? '#f7f3ec' : '#121212',
              letterSpacing: '-0.14px',
              transition: 'color 0.3s ease, opacity 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Cart Icon */}
      <CartIcon isOnDark={isOnDark} />

      {/* Preorder Button - Hidden on mobile and small tablets */}
      <Link
        href="#decoded"
        className="hidden md:inline-flex items-center justify-center hover:opacity-90 whitespace-nowrap shrink-0"
        style={{
          backgroundColor: '#f7f3ec',
          color: '#121212',
          fontFamily: 'var(--font-neue-haas-text), Arial, Helvetica, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          padding: '0 24px',
          height: '36px',
          borderRadius: '18px',
          transition: 'opacity 0.2s ease',
        }}
      >
        Preorder
      </Link>
      </header>
    </div>
  );
}

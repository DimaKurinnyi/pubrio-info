'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);
  const threshold = 10; // px

  // Close mobile menu when resizing to md and above
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    lastScrollY.current = typeof window !== 'undefined' ? window.scrollY : 0;

    function onScroll() {
      // store latest value and schedule rAF if not already scheduled
      const currentY = window.scrollY;
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(() => {
          const delta = currentY - lastScrollY.current;

          if (Math.abs(delta) > threshold) {
            if (delta > 0 && currentY > 50) {
              // scrolled down
              setVisible(false);
            } else if (delta < 0) {
              // scrolled up
              setVisible(true);
            }
            lastScrollY.current = currentY;
          }

          ticking.current = false;
        });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen((v) => !v);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(59,130,246,0.12)] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        aria-hidden={false}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-lg font-semibold text-blue-400">
              Pubrito
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link href="/how-it-works" className="text-blue-400 transition-colors font-bold hover:text-blue-500">
              How it works
            </Link>
            <Link href="/features" className="text-blue-400 transition-colors font-bold hover:text-blue-500">
              Features
            </Link>
            <Link href="/use-cases" className="text-blue-400 transition-colors font-bold  hover:text-blue-500">
              Use case
            </Link>
            <Link href="/pricing-guide" className="text-blue-400 transition-colors font-bold hover:text-blue-500">
              Price
            </Link>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden">
            <button type="button" aria-expanded={isOpen} aria-label="Toggle menu" onClick={toggleMenu} className="relative w-8 h-8 flex items-center justify-center">
              <span className={`block w-6 h-0.5 bg-blue-600 transform transition-all duration-300 ease-in-out origin-center absolute ${isOpen ? 'rotate-45 ' : '-translate-y-2'}`} />
              <span className={`block w-6 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out absolute ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-blue-600 transform transition-all duration-300 ease-in-out origin-center absolute ${isOpen ? '-rotate-45 ' : 'translate-y-2'}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu (smooth slide-down) */}
        <div
          className={`w-full overflow-hidden bg-[#0B1120]/80 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden px-6 py-0 shadow-[0_0_40px_rgba(59,130,246,0.10)] flex flex-col space-y-4 ${
            isOpen ? 'max-h-125 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}>
          <Link href="/how-it-works" onClick={handleLinkClick} className="text-blue-600 transition-colors hover:text-blue-500">
            How it works
          </Link>
          <Link href="/features" onClick={handleLinkClick} className="text-blue-600 transition-colors hover:text-blue-500">
            Features
          </Link>
          <Link href="/use-cases" onClick={handleLinkClick} className="text-blue-600 transition-colors hover:text-blue-500">
            Use case
          </Link>
          <Link href="/pricing-guide" onClick={handleLinkClick} className="text-blue-600 transition-colors hover:text-blue-500">
            Price
          </Link>
        </div>
      </nav>
    </>
  );
}

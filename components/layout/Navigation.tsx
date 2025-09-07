"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ResponsiveLogo, Logo } from "@/components/ui/Logo";
import { navigationItems } from "@/lib/data/content";

// Clean Animated Hamburger Component
const AnimatedHamburger = ({
  isOpen,
  onClick,
  buttonRef,
}: {
  isOpen: boolean;
  onClick: () => void;
  buttonRef?: React.Ref<HTMLButtonElement>;
}) => {
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className="relative w-10 h-10 flex flex-col justify-center items-center rounded-lg transition-all duration-300 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-facelab-purple/20 active:scale-95"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-4 flex flex-col justify-between">
        {/* Top line */}
        <span
          className={`block h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ease-out ${
            isOpen
              ? 'rotate-45 translate-y-[7.5px] bg-facelab-purple'
              : 'rotate-0 translate-y-0'
          }`}
        />
        {/* Middle line */}
        <span
          className={`block h-0.5 w-full bg-gray-800 rounded-full transition-all duration-200 ease-out ${
            isOpen
              ? 'opacity-0 scale-0'
              : 'opacity-100 scale-100'
          }`}
        />
        {/* Bottom line */}
        <span
          className={`block h-0.5 w-full bg-gray-800 rounded-full transition-all duration-300 ease-out ${
            isOpen
              ? '-rotate-45 -translate-y-[7.5px] bg-facelab-purple'
              : 'rotate-0 translate-y-0'
          }`}
        />
      </div>
    </button>
  );
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement>(null);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
    setIsLoading(false);
  }, [pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        hamburgerButtonRef.current?.focus();
      }
      
      if (event.key === 'Tab' && isOpen && mobileMenuRef.current) {
        const focusableElements = mobileMenuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
        style={{ 
          paddingTop: 'env(safe-area-inset-top)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center justify-between py-4"
            role="navigation"
            aria-label="Main navigation"
          >
            <ResponsiveLogo 
              variant="primary" 
              priority={true}
              className="flex-shrink-0"
            />
            
            <div className="flex items-center gap-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-200 relative group ${
                      isActive 
                        ? 'text-facelab-purple' 
                        : 'text-gray-700 hover:text-facelab-purple'
                    }`}
                    onClick={() => setIsLoading(true)}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-facelab-purple transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : ''
                    }`} />
                  </Link>
                );
              })}
            </div>
            
            <Link href="/contact">
              <Button
                className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-lg px-6 py-2 transition-all duration-200 hover:shadow-lg"
                onClick={() => setIsLoading(true)}
              >
                Book Now
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation Header */}
          <nav 
            className="lg:hidden flex items-center justify-between py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ResponsiveLogo 
              variant="primary" 
              priority={true}
              className="flex-shrink-0"
            />
            
            <AnimatedHamburger
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              buttonRef={hamburgerButtonRef}
            />
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div 
          ref={mobileMenuRef}
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            paddingTop: 'calc(env(safe-area-inset-top) + 80px)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          {/* Menu Content */}
          <div className="flex flex-col h-full">
            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <nav className="space-y-2">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      ref={index === 0 ? firstMenuItemRef : undefined}
                      href={item.href}
                      className={`group block px-4 py-4 rounded-xl transition-all duration-200 ${
                        isActive 
                          ? 'bg-facelab-purple/10 border border-facelab-purple/20 text-facelab-purple' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-facelab-purple border border-transparent'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setIsLoading(true);
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                          isActive 
                            ? 'bg-facelab-purple/20 text-facelab-purple' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-facelab-purple/10 group-hover:text-facelab-purple'
                        }`}>
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold text-base transition-colors duration-200 ${
                            isActive ? 'text-facelab-purple' : 'text-gray-900 group-hover:text-facelab-purple'
                          }`}>
                            {item.name}
                          </div>
                          {item.description && (
                            <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                              {item.description}
                            </div>
                          )}
                        </div>
                        
                        {/* Arrow */}
                        <div className={`flex-shrink-0 transition-all duration-200 ${
                          isActive 
                            ? 'text-facelab-purple' 
                            : 'text-gray-400 group-hover:text-facelab-purple group-hover:translate-x-1'
                        }`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
            
            {/* Bottom CTA Section */}
            <div className="border-t border-gray-100 px-6 py-6">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ready to get started?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Book your consultation today and transform your smile.
                  </p>
                </div>
                
                <Link href="/contact" className="block">
                  <Button
                    className={`w-full bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-xl py-4 font-semibold transition-all duration-200 hover:shadow-lg ${
                      isLoading ? 'opacity-75 cursor-wait' : ''
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      setIsLoading(true);
                    }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Loading...
                      </div>
                    ) : (
                      'Book Your Consultation'
                    )}
                  </Button>
                </Link>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Available Mon-Fri: 9AM-6PM, Sat: 9AM-2PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
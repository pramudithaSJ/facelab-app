"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ResponsiveLogo, Logo } from "@/components/ui/Logo";
import { navigationItems } from "@/lib/data/content";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/lib/hooks/useScrollDirection";
import { useMobileMenu } from "@/lib/hooks/useMobileMenu";
import { useActiveRoute } from "@/lib/hooks/useActiveRoute";
import { cn } from "@/lib/utils";

export function Navigation() {
  const router = useRouter();
  const { scrollDirection, isAtTop, scrollY } = useScrollDirection({ threshold: 10 });
  const { isOpen, toggle, close, menuRef, triggerRef } = useMobileMenu();
  const { isActive } = useActiveRoute();
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle navigation loading state
  const handleNavigation = async (href: string) => {
    setIsLoading(true);
    close(); // Close mobile menu if open
    
    // Add a small delay for visual feedback
    setTimeout(() => {
      router.push(href);
      setIsLoading(false);
    }, 150);
  };
  
  // Calculate dynamic styles based on scroll
  const getHeaderStyles = () => {
    const baseClasses = "fixed z-50 w-full max-w-6xl px-4 transition-all duration-500 ease-out";
    
    if (isAtTop) {
      return `${baseClasses} top-4 left-1/2 transform -translate-x-1/2`;
    } else if (scrollDirection === "down") {
      return `${baseClasses} top-0 left-1/2 transform -translate-x-1/2 -translate-y-full`;
    } else {
      return `${baseClasses} top-0 left-1/2 transform -translate-x-1/2`;
    }
  };
  
  // Calculate glassmorphism intensity based on scroll
  const getGlassmorphismStyles = () => {
    const opacity = Math.min(0.95, 0.8 + (scrollY / 500) * 0.15);
    const blur = Math.min(16, 8 + (scrollY / 100) * 2);
    
    return {
      backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`
    };
  };

  return (
    <header className={getHeaderStyles()}>
      {/* Desktop Navigation */}
      <nav 
        className="hidden lg:flex items-center justify-between px-6 py-3 rounded-full  shadow-lg transition-all duration-300"
        style={getGlassmorphismStyles()}
        role="navigation"
        aria-label="Main navigation"
      >
        <ResponsiveLogo 
          variant="primary" 
          priority={true}
          className="flex-shrink-0 transition-transform duration-200 hover:scale-105"
        />
        
        <div className="flex items-center gap-8" role="menubar">
          {navigationItems.map((item) => {
            const isCurrentPage = isActive(item.href);
            return (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "relative text-sm font-medium transition-all duration-300 touch-target flex items-center justify-center px-3 py-2 group",
                  isCurrentPage 
                    ? "facelab-purple bg-facelab-purple/10" 
                    : "hover:facelab-purple hover:bg-facelab-purple/5",
                  isLoading && "opacity-50 "
                )}
                role="menuitem"
                aria-current={isCurrentPage ? "page" : undefined}
                disabled={isLoading}
              >
                <span className="relative z-10">{item.name}</span>
                {isCurrentPage && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-facelab-purple  transition-all duration-300" />
                )}
                <div className="absolute inset-0 bg-facelab-purple/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
              </button>
            );
          })}
        </div>
        
        <Button
          onClick={() => handleNavigation("/contact")}
          className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-6 touch-target transition-all duration-200 hover:shadow-lg hover:shadow-facelab-purple/20 hover:scale-105 active:scale-95"
          disabled={isLoading}
        >
         Book Now
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <nav 
        className="lg:hidden flex items-center justify-between px-4 py-3 rounded-full border border-white/20 shadow-lg transition-all duration-300"
        style={getGlassmorphismStyles()}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <ResponsiveLogo 
          variant="primary" 
          priority={true}
          className="flex-shrink-0 transition-transform duration-200 hover:scale-105"
        />
        
        <Button
          ref={triggerRef}
          variant="ghost"
          size="icon"
          className="touch-target rounded-full transition-all duration-200 hover:bg-facelab-purple/10 active:scale-95"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-6 h-6">
            <Menu 
              className={cn(
                "absolute top-0 left-0 h-6 w-6 transition-all duration-300",
                isOpen ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
              )} 
            />
            <X 
              className={cn(
                "absolute top-0 left-0 h-6 w-6 transition-all duration-300",
                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
              )} 
            />
          </div>
        </Button>
        
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            ref={menuRef}
            className="fixed inset-0 bg-facelab-white/95 backdrop-blur-xl z-[100] flex flex-col transition-all duration-500 ease-out"
            role="menu"
            aria-hidden={false}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)"
            }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {/* Logo in mobile menu */}
              <div className="mb-8 transform transition-all duration-300 hover:scale-105" onClick={close}>
                <Logo
                  variant="primary"
                  size="xl"
                  orientation="horizontal"
                  href="/"
                  className="cursor-pointer"
                />
              </div>
              
              {/* Navigation items */}
              {navigationItems.map((item) => {
                const isCurrentPage = isActive(item.href);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={cn(
                      "relative text-2xl font-medium transition-all duration-300 touch-target py-4 px-6 rounded-full group",
                      isCurrentPage 
                        ? "facelab-purple bg-facelab-purple/10 shadow-sm" 
                        : "hover:facelab-purple hover:bg-facelab-purple/5",
                      isLoading && "opacity-50 cursor-not-allowed"
                    )}
                    role="menuitem"
                    aria-current={isCurrentPage ? "page" : undefined}
                    disabled={isLoading}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isCurrentPage && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-facelab-purple rounded-full" />
                    )}
                    <div className="absolute inset-0 bg-facelab-purple/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                  </button>
                );
              })}
              
              {/* CTA Button */}
              <Button
                onClick={() => handleNavigation("/contact")}
                className={cn(
                  "bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-xl touch-target mt-8 transition-all duration-300 hover:shadow-lg hover:shadow-facelab-purple/20 hover:scale-105 active:scale-95",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Loading...
                  </div>
                ) : (
                  "Book Now"
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
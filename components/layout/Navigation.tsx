"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ResponsiveLogo, Logo } from "@/components/ui/Logo";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader } from "@/components/ui/drawer";
import { navigationItems } from "@/lib/data/content";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/lib/hooks/useScrollDirection";
import { useActiveRoute } from "@/lib/hooks/useActiveRoute";
import { cn } from "@/lib/utils";

export function Navigation() {
  const router = useRouter();
  const { scrollDirection, isAtTop, scrollY } = useScrollDirection({ threshold: 10 });
  const { isActive } = useActiveRoute();
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle navigation loading state
  const handleNavigation = async (href: string) => {
    setIsLoading(true);
    setIsMobileMenuOpen(false); // Close mobile drawer
    
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
        
        <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="touch-target rounded-full transition-all duration-200 hover:bg-facelab-purple/10 active:scale-95"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={cn(
                    "absolute top-0 left-0 h-6 w-6 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
                  )} 
                />
                <X 
                  className={cn(
                    "absolute top-0 left-0 h-6 w-6 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
                  )} 
                />
              </div>
            </Button>
          </DrawerTrigger>
          
          <DrawerContent className="bg-facelab-black/95 backdrop-blur-xl border-facelab-purple/20 max-h-[85vh]">
            <DrawerHeader className="">
              {/* Logo in mobile drawer */}
              <div className="flex justify-center mb-4 overflow-y-auto scroll-auto">
                <div
                  className="cursor-pointer transition-transform duration-200 hover:scale-105"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    router.push("/");
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setIsMobileMenuOpen(false);
                      router.push("/");
                    }
                  }}
                >
                  <Logo
                    variant="white"
                    size="lg"
                    orientation="horizontal"
                    href="/"
                  />
                </div>
              </div>
            </DrawerHeader>
            
            <div className="flex flex-col items-center space-y-4 px-6 pb-8 overflow-y-auto flex-1 max-h-[60vh]">
              {/* Navigation items */}
              {navigationItems.map((item, index) => {
                const isCurrentPage = isActive(item.href);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={cn(
                      "relative text-lg font-medium transition-all duration-300 touch-target py-3 px-6 rounded-full group w-full max-w-xs text-center drawer-item-animate",
                      isCurrentPage 
                        ? "text-facelab-purple bg-facelab-purple/15 " 
                        : "text-white hover:text-facelab-purple hover:bg-facelab-purple/10 border border-transparent hover:border-facelab-purple/20",
                      isLoading && "opacity-50 "
                    )}
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`
                    }}
                    disabled={isLoading}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isCurrentPage && (
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-facelab-purple " />
                    )}
                  </button>
                );
              })}
              
              {/* CTA Button */}
              <Button
                onClick={() => handleNavigation("/contact")}
                className={cn(
                  "bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-4 text-lg touch-target mt-6 transition-all duration-300 hover:shadow-lg hover:shadow-facelab-purple/30 hover:scale-105 active:scale-95 w-full max-w-xs drawer-item-animate",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
                style={{
                  animationDelay: `${(navigationItems.length + 1) * 100}ms`
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Loading...
                  </div>
                ) : (
                  "Book Now"
                )}
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
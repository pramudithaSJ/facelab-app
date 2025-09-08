"use client";

import { useState, useEffect } from "react";

interface ScrollDirectionOptions {
  threshold?: number;
  initialDirection?: "up" | "down";
}

interface ScrollDirectionReturn {
  scrollDirection: "up" | "down";
  isAtTop: boolean;
  scrollY: number;
  isScrolling: boolean;
}

export function useScrollDirection({ 
  threshold = 10, 
  initialDirection = "up" 
}: ScrollDirectionOptions = {}): ScrollDirectionReturn {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">(initialDirection);
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const diff = Math.abs(currentScrollY - lastScrollY);
      
      // Only update if we've scrolled more than the threshold
      if (diff < threshold) {
        return;
      }

      setIsScrolling(true);
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY < 20);

      if (currentScrollY > lastScrollY && currentScrollY > 20) {
        // Scrolling down
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      // Clear existing timeout
      clearTimeout(timeoutId);
      
      // Set isScrolling to false after 150ms of no scrolling
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY, threshold]);

  return { scrollDirection, isAtTop, scrollY, isScrolling };
}
"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface UseActiveRouteReturn {
  isActive: (href: string) => boolean;
  activeRoute: string;
}

export function useActiveRoute(): UseActiveRouteReturn {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    return (href: string): boolean => {
      // Handle home route
      if (href === "/" && pathname === "/") {
        return true;
      }
      
      // Handle other routes - check if pathname starts with the href (for nested routes)
      if (href !== "/" && pathname.startsWith(href)) {
        return true;
      }
      
      return false;
    };
  }, [pathname]);

  const activeRoute = useMemo(() => {
    return pathname;
  }, [pathname]);

  return { isActive, activeRoute };
}
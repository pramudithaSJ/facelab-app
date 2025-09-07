import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "primary" | "white" | "black";
  size?: "sm" | "md" | "lg" | "xl";
  orientation?: "horizontal" | "vertical" | "icon-only";
  className?: string;
  href?: string;
  priority?: boolean;
}

const sizeClasses = {
  sm: "h-8 w-auto", // 32px - mobile icon
  md: "h-10 w-auto", // 40px - small desktop
  lg: "h-12 w-auto", // 48px - standard desktop
  xl: "h-16 w-auto", // 64px - footer/hero
};

const iconSizes = {
  sm: "h-8 w-8", // 32px
  md: "h-10 w-10", // 40px  
  lg: "h-12 w-12", // 48px
  xl: "h-16 w-16", // 64px
};

export function Logo({ 
  variant = "primary", 
  size = "lg", 
  orientation = "horizontal", 
  className, 
  href = "/",
  priority = false 
}: LogoProps) {
  // Determine logo file path based on variant and orientation
  const getLogoPath = () => {
    if (orientation === "icon-only") {
      return `/logos/logo-only-${variant}.svg`;
    }
    
    const orientationSuffix = orientation === "horizontal" ? "x" : "y";
    
    // Handle the specific file naming patterns in your logo directory
    if (variant === "primary") {
      return `/logos/logo-default-primary-${orientationSuffix}${orientationSuffix === "y" ? " (1)" : ""}.svg`;
    } else {
      return `/logos/logo-dafault-${variant}-${orientationSuffix}${orientationSuffix === "x" ? " (1)" : ""}.svg`;
    }
  };

  const logoPath = getLogoPath();
  const isIconOnly = orientation === "icon-only";
  const sizeClass = isIconOnly ? iconSizes[size] : sizeClasses[size];

  const LogoImage = () => (
    <Image
      src={logoPath}
      alt="FaceLab - Look, Feel, Live Better"
      width={isIconOnly ? 64 : 200}
      height={64}
      className={cn(
        sizeClass,
        "transition-all duration-300 hover:scale-105",
        className
      )}
      priority={priority}
    />
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={cn(
          "inline-flex items-center justify-center touch-target",
          "focus:outline-none focus:ring-2 focus:ring-facelab-purple focus:ring-offset-2 rounded-lg",
          className
        )}
        aria-label="FaceLab Home"
      >
        <LogoImage />
      </Link>
    );
  }

  return <LogoImage />;
}

// Responsive Logo component that automatically adjusts based on screen size
export function ResponsiveLogo({ 
  variant = "primary", 
  className,
  href = "/",
  priority = false 
}: Omit<LogoProps, "size" | "orientation"> & { href?: string }) {
  return (
    <>
      {/* Desktop/Tablet - Horizontal Logo */}
      <div className="hidden sm:block">
        <Logo
          variant={variant}
          size="lg"
          orientation="horizontal"
          className={className}
          href={href}
          priority={priority}
        />
      </div>
      
      {/* Mobile - Icon Only */}
      <div className="block sm:hidden">
        <Logo
          variant={variant}
          size="sm"
          orientation="icon-only"
          className={className}
          href={href}
          priority={priority}
        />
      </div>
    </>
  );
}
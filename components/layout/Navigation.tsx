"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/data/content";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-between px-6 py-3 glassmorphism rounded-full">
        <Link href="/" className="text-xl font-bold facelab-purple">
          FaceLab
        </Link>
        
        <div className="flex items-center gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:facelab-purple transition-colors duration-200 touch-target flex items-center justify-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <Button
          className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-6 touch-target"
        >
          Book Now
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex items-center justify-between px-4 py-3 glassmorphism rounded-full">
        <Link href="/" className="text-xl font-bold facelab-purple">
          FaceLab
        </Link>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="touch-target rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DialogTrigger>
          
          <DialogContent className="w-full h-full max-w-full max-h-full p-0 bg-facelab-white/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              <Link
                href="/"
                className="text-3xl font-bold facelab-purple mb-8"
                onClick={() => setIsOpen(false)}
              >
                FaceLab
              </Link>
              
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-medium hover:facelab-purple transition-colors duration-200 touch-target py-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <Button
                className="bg-facelab-purple hover:bg-facelab-purple/90 text-white rounded-full px-8 py-6 text-xl touch-target mt-8"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
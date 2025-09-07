import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig, navigationItems } from "@/lib/data/content";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-facelab-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <Logo 
              variant="white" 
              size="lg" 
              orientation="vertical" 
              href="/"
              className="hover:opacity-90 transition-opacity"
            />
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-facelab-green font-semibold">{siteConfig.tagline}</p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{siteConfig.description}</p>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <Link href="#" className="text-gray-400 hover:text-facelab-green transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-facelab-green transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-facelab-green transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-facelab-green transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links & Contact */}
          <div className="space-y-6">
            
            
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-3">
                <Link href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-facelab-green transition-colors py-1">
                  <Phone className="h-5 w-5 text-facelab-green" />
                  <span>{siteConfig.contact.phone}</span>
                </Link>
                <Link href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm sm:text-base text-gray-300 hover:text-facelab-green transition-colors py-1">
                  <Mail className="h-5 w-5 text-facelab-green" />
                  <span>{siteConfig.contact.email}</span>
                </Link>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-facelab-green mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">{siteConfig.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-facelab-green" />
                  <span className="text-sm sm:text-base text-gray-300">{siteConfig.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter & Services */}
          <div className="space-y-6">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Stay Updated</h4>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Get dental tips and appointment reminders.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-facelab-green hover:bg-facelab-green/90 text-facelab-black">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>

           
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300 text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-300 text-center md:text-left">
            <Link href="/privacy" className="hover:text-facelab-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-facelab-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
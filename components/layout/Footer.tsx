import Link from "next/link";
import { siteConfig, navigationItems } from "@/lib/data/content";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-facelab-black text-facelab-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold facelab-green">FaceLab</h3>
            <p className="text-lg facelab-purple font-semibold">{siteConfig.tagline}</p>
            <p className="text-sm text-gray-300">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:facelab-green transition-colors duration-200 touch-target"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="flex flex-col space-y-2">
              {siteConfig.services.map((service) => (
                <span key={service.id} className="text-sm text-gray-300">
                  {service.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 facelab-green" />
                <span className="text-sm">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 facelab-green" />
                <span className="text-sm">{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 facelab-green mt-0.5" />
                <span className="text-sm">{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 facelab-green" />
                <span className="text-sm">{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © 2024 FaceLab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-300">
            <Link href="/privacy" className="hover:facelab-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:facelab-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
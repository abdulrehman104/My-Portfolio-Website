import Link from "next/link";
import { socialLinks } from "@/lib/constants";

export const FooterSection = () => {
  return (
    <footer className="py-12 space-y-8">
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright ©2024 Abdul Rehman. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((items) => (
              <Link
                href={items.href}
                key={items.label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <items.icon className="h-5 w-5" />
              </Link>
            ))}{" "}
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/my-work"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Work
            </Link>
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

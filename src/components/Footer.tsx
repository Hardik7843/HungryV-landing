import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-400 border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Hungry V Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-text-primary text-xl font-bold tracking-tight">
                Hungry V
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Smart Restaurant Ordering & Management Platform
            </p>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#security"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-text-primary font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#contact"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  General Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/#book-demo"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  Schedule a demo
                </Link>
              </li>
              <li>
                <a
                  href="mailto:reach@raiboinfotech.com"
                  className="text-text-secondary hover:text-text-from transition-colors text-sm"
                >
                  reach@raiboinfotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center">
          <div className="text-text-secondary text-sm font-medium">
            &copy; {new Date().getFullYear()} Hungry V. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

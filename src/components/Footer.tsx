import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-8 bg-bg-dark border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-primary text-sm font-medium">
            &copy; {new Date().getFullYear()} Hungry V. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-text-primary hover:text-gradient-from transition-colors text-sm font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-text-primary hover:text-gradient-from transition-colors text-sm font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

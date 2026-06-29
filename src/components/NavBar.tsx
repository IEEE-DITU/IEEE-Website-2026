"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-surface border-b-2 border-primary shadow-sm w-full sticky top-0 z-50">
      <div className="flex justify-between items-center h-[59px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center overflow-hidden rounded-full border border-outline-variant bg-surface-container-lowest">
            <Image src="/images/ieee1764934.png" alt="IEEE Logo" width={40} height={40} className="object-cover" />
          </div>
          <Link href="/" className="font-headline-md text-headline-md font-bold text-primary hidden sm:block">
            IEEE Student Branch
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`h-full flex items-center mt-0.5 ${isActive
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary transition-colors'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Trailing Action & Search */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">
              search
            </span>
            <input
              className="bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-48"
              placeholder="Search..."
              type="text"
            />
          </div>
          <button className="bg-primary-container text-on-primary rounded-md px-6 py-2 font-label-md text-label-md font-semibold hover:bg-primary transition-colors whitespace-nowrap shadow-sm">
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
}

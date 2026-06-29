import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand / Copyright Column */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <span className="font-headline-md text-headline-md font-semibold text-on-surface">
            IEEE Student Branch
          </span>
          <p className="font-label-md text-label-md text-on-surface-variant">
            © 2024 IEEE Student Branch. All rights reserved.
          </p>
        </div>
        
        {/* Links Columns Placeholder to match grid */}
        <div className="flex flex-col gap-4">
          <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
            Follow Us
          </span>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">groups</span>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">share</span>
            </Link>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col gap-3 md:col-span-2 md:items-end justify-start">
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">policy</span>
              Privacy Policy
            </Link>
            <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">gavel</span>
              Terms of Service
            </Link>
            <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">language</span>
              IEEE.org
            </Link>
            <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              Contact Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

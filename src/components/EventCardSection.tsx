import Image from 'next/image';
import Link from 'next/link';

export default function EventCardSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-outline-variant pb-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Upcoming Highlight</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Join us for our next major technical session.</p>
          </div>
          <Link href="#" className="hidden md:inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:underline">
            View All Calendar
          </Link>
        </div>
        
        {/* The Card */}
        <div className="max-w-[400px] bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all flex flex-col">
          {/* Image Tier */}
          <div className="w-full h-[240px] bg-surface-variant relative">
            <Image 
              src="/images/event.png" 
              alt="Networking event" 
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Tier */}
          <div className="p-6 pb-4 flex-grow border-b border-outline-variant/50">
            <div className="flex justify-between items-start mb-2 gap-4">
              <h3 className="font-headline-md text-body-lg font-semibold text-on-surface leading-tight">Design systems meetup</h3>
              <span className="inline-flex items-center px-2.5 py-1 bg-surface-container rounded-full font-label-md text-[12px] font-medium text-on-surface">
                Featured
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-2">
              A practical talk on component APIs, accessibility, and shipping faster.
            </p>
          </div>
          
          {/* Action Tier */}
          <div className="p-4 bg-surface-container-lowest">
            <button className="w-full bg-on-surface text-on-primary py-3 rounded-lg font-label-md text-label-md font-semibold hover:bg-on-surface/90 transition-colors">
              View Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

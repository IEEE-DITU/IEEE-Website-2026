import Link from 'next/link';

export default function CorePillars() {
  return (
    <section className="py-20 bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            <span className="material-symbols-outlined align-middle mr-2">lightbulb</span>
            Core Pillars
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our student branch is built on three foundational pillars designed to accelerate your engineering career and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Card 1 */}
          <div className="bg-surface border border-outline-variant rounded-xl p-8 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-[28px]">school</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Learn</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
              Access exclusive technical workshops, tutorials, and certification resources to expand your knowledge base beyond the classroom curriculum.
            </p>
            <Link href="#" className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:text-primary-container transition-colors">
              View Resources <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
          
          {/* Card 2 */}
          <div className="bg-surface border border-outline-variant rounded-xl p-8 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col group relative overflow-hidden">
            {/* Decorative bg element */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full pointer-events-none"></div>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
              <span className="material-symbols-outlined text-primary text-[28px]">hub</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3 relative z-10">Connect</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6 relative z-10">
              Network with industry professionals, alumni, and like-minded peers. Build relationships that will launch your professional career.
            </p>
            <Link href="#" className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:text-primary-container transition-colors relative z-10">
              Join Network <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
          
          {/* Card 3 */}
          <div className="bg-surface border border-outline-variant rounded-xl p-8 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-[28px]">lightbulb</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Innovate</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-6">
              Participate in hackathons, design competitions, and collaborative research projects to solve real-world engineering challenges.
            </p>
            <Link href="#" className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold group-hover:text-primary-container transition-colors">
              See Projects <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

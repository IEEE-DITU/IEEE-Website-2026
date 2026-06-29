import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 pointer-events-none"></div>
        <Image
          src="/images/hero.png"
          alt="High-tech lab environment"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Tonal Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/20 z-10"></div>
      </div>

      <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 md:py-32 flex flex-col justify-center min-h-[75vh] md:min-h-[800px]">
        <div className="max-w-2xl space-y-6 -mt-16 md:-mt-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary-container/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="font-label-md text-label-md text-primary-container font-semibold tracking-wide">
              INNOVATE WITH US
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface font-bold leading-tight">
            Empowering the <span className="text-primary-container">Next Generation</span> of Engineers
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Join a vibrant community of innovators. We bridge the gap between academic theory and real-world technological advancement through hands-on projects, industry connections, and collaborative research.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-primary-container text-on-primary px-8 py-3 rounded-md font-label-md text-label-md font-semibold hover:bg-primary transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Explore Projects
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            <button className="bg-transparent border-2 border-primary-container text-primary-container px-8 py-3 rounded-md font-label-md text-label-md font-semibold hover:bg-primary-container/5 transition-all flex items-center gap-2">
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

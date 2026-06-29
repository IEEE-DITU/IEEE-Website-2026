import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow py-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-4">
            Events
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Discover workshops, seminars, and technical meetups designed to advance your engineering skills and connect you with industry professionals.
          </p>
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-outline-variant pb-4">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">event_upcoming</span>
              Upcoming Events
            </h2>
            <span className="bg-primary-container/10 text-primary-container font-label-md text-label-md px-3 py-1 rounded-full">
              3 Scheduled
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                <Image
                  src="/images/event.png"
                  alt="Embedded Systems Workshop"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-body-lg md:text-headline-md text-on-surface line-clamp-2">
                      Embedded Systems Workshop
                    </h3>
                    <span className="bg-primary-container/10 text-primary-container font-label-md text-[12px] px-2 py-1 rounded-full ml-2 shrink-0">
                      Featured
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                    A practical dive into microcontroller programming, IoT integration, and hardware-software co-design. Bring your laptops.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-2 mt-auto">
                  <span className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 15
                  </span>
                  <span className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> 2:00 PM
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-outline-variant bg-surface-container-lowest">
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary font-body-md text-body-md font-semibold py-3 rounded-lg transition-colors">
                  View Event
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                <Image
                  src="/images/about_workshop.png"
                  alt="AI in Automation Seminar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-body-lg md:text-headline-md text-on-surface line-clamp-2">
                      AI in Automation Seminar
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                    Guest speaker discusses the future of machine learning applied to industrial control systems and robotics.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-2 mt-auto">
                  <span className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 22
                  </span>
                  <span className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Main Auditorium
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-outline-variant bg-surface-container-lowest">
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary font-body-md text-body-md font-semibold py-3 rounded-lg transition-colors">
                  View Event
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 w-full bg-surface-variant relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                <Image
                  src="/images/innovation.png"
                  alt="Competitive Programming Meetup"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-md text-body-lg md:text-headline-md text-on-surface line-clamp-2">
                      Competitive Programming Meetup
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mb-4">
                    Join us for a 3-hour hackathon style meetup focusing on algorithm optimization and data structures.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-2 mt-auto">
                  <span className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> Nov 05
                  </span>
                  <span className="flex items-center gap-1 font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> 6:00 PM
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-outline-variant bg-surface-container-lowest">
                <button className="w-full bg-primary-container hover:bg-primary text-on-primary font-body-md text-body-md font-semibold py-3 rounded-lg transition-colors">
                  View Event
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Completed Events Section */}
        <section>
          <div className="flex items-center justify-between mb-8 border-b border-outline-variant pb-4">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined">history</span>
              Completed Events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-80">
            {/* Completed Card 1 */}
            <div className="bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden flex flex-col h-full grayscale-[50%]">
              <div className="h-32 w-full bg-surface-variant relative">
                <Image
                  src="/images/event.png"
                  alt="Robotics Intro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-surface/40 flex items-center justify-center">
                  <span className="bg-surface/80 text-on-surface font-label-md px-3 py-1 rounded backdrop-blur-sm">
                    Completed
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="font-body-lg text-body-lg font-semibold text-on-surface mb-1">Robotics Intro</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant line-clamp-2 mb-2">Basics of kinematics and motor control.</p>
                <span className="text-xs font-label-md text-outline block">Sept 10, 2025</span>
              </div>
              <div className="p-3 border-t border-outline-variant bg-surface-container-low">
                <button className="w-full border-2 border-primary text-primary font-body-md text-[14px] font-semibold py-2 rounded-lg hover:bg-primary/5 transition-colors">
                  View Recap
                </button>
              </div>
            </div>

            {/* Completed Card 2 */}
            <div className="bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden flex flex-col h-full grayscale-[50%]">
              <div className="h-32 w-full bg-surface-variant relative">
                <Image
                  src="/images/about_workshop.png"
                  alt="Tech Talk: 5G"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-surface/40 flex items-center justify-center">
                  <span className="bg-surface/80 text-on-surface font-label-md px-3 py-1 rounded backdrop-blur-sm">
                    Completed
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="font-body-lg text-body-lg font-semibold text-on-surface mb-1">Tech Talk: 5G</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant line-clamp-2 mb-2">The infrastructure of next-gen networks.</p>
                <span className="text-xs font-label-md text-outline block">Aug 24, 2025</span>
              </div>
              <div className="p-3 border-t border-outline-variant bg-surface-container-low">
                <button className="w-full border-2 border-primary text-primary font-body-md text-[14px] font-semibold py-2 rounded-lg hover:bg-primary/5 transition-colors">
                  View Recap
                </button>
              </div>
            </div>

            {/* Completed Card 3 */}
            <div className="bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden flex flex-col h-full grayscale-[50%]">
              <div className="h-32 w-full bg-surface-variant relative">
                <Image
                  src="/images/innovation.png"
                  alt="VLSI Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-surface/40 flex items-center justify-center">
                  <span className="bg-surface/80 text-on-surface font-label-md px-3 py-1 rounded backdrop-blur-sm">
                    Completed
                  </span>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="font-body-lg text-body-lg font-semibold text-on-surface mb-1">VLSI Design</h3>
                <p className="font-body-md text-[14px] text-on-surface-variant line-clamp-2 mb-2">Introduction to Very Large Scale Integration.</p>
                <span className="text-xs font-label-md text-outline block">Jul 12, 2025</span>
              </div>
              <div className="p-3 border-t border-outline-variant bg-surface-container-low">
                <button className="w-full border-2 border-primary text-primary font-body-md text-[14px] font-semibold py-2 rounded-lg hover:bg-primary/5 transition-colors">
                  View Recap
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

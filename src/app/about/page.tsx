import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-container-lowest">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(var(--color-outline-variant) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          ></div>
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-secondary-container text-primary-container rounded-full font-label-md text-label-md mb-6 uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-6">
                Empowering the Next Generation of Innovators.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                The IEEE Student Branch is a hub for technical excellence, professional development, and collaborative innovation. We bridge the gap between academic theory and real-world engineering challenges.
              </p>
            </div>
            <div className="relative max-w-md mx-auto md:max-w-full lg:max-w-md">
              <div className="absolute -inset-4 bg-primary-container/5 rounded-2xl transform rotate-3"></div>
              <Image
                src="/images/about_students.png"
                alt="Students collaborating on a robotics project"
                width={800}
                height={600}
                className="relative z-10 w-full h-auto object-cover rounded-xl shadow-lg border border-outline-variant/30"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Bento Grid */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission Card */}
              <div className="col-span-1 md:col-span-2 bg-surface rounded-xl p-8 shadow-sm border border-outline-variant/50 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <span className="material-symbols-outlined text-9xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">target</span>
                  Our Mission
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant relative z-10 max-w-2xl">
                  To foster technological innovation and excellence for the benefit of humanity by providing students with hands-on experience, professional networking opportunities, and a platform to explore emerging technologies in electrical and electronics engineering.
                </p>
              </div>

              {/* Vision Card */}
              <div className="col-span-1 bg-primary text-on-primary rounded-xl p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 opacity-20">
                  <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-2xl">lightbulb</span>
                  Our Vision
                </h2>
                <p className="font-body-md text-body-md text-on-primary/90 relative z-10">
                  To be the premier student-led technical organization, recognized globally for producing well-rounded engineers equipped to lead and solve the complex technical challenges of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are / Initiatives Section */}
        <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface mb-4">
                <span className="material-symbols-outlined text-primary text-3xl align-middle mr-3">groups</span>
                Who We Are
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                We are a community of passionate builders, thinkers, and problem solvers dedicated to continuous technical growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Initiative 1 */}
              <div className="bg-surface rounded-xl border border-outline-variant/40 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="h-48 overflow-hidden rounded-t-xl relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                  <Image
                    src="/images/about_workshop.png"
                    alt="Students in a technical workshop"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl align-middle mr-2">precision_manufacturing</span>
                    Technical Workshops
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Regular hands-on sessions covering PCB design, microcontroller programming, AI/ML fundamentals, and CAD modeling to build practical skills.
                  </p>
                </div>
              </div>

              {/* Initiative 2 */}
              <div className="bg-surface rounded-xl border border-outline-variant/40 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="h-48 overflow-hidden rounded-t-xl relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                  <Image
                    src="/images/about_workshop.png"
                    alt="Students presenting a project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl align-middle mr-2">architecture</span>
                    Project Development
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Collaborative, student-led projects ranging from autonomous rovers to smart grid simulations, taking ideas from concept to functional prototypes.
                  </p>
                </div>
              </div>

              {/* Initiative 3 */}
              <div className="bg-surface rounded-xl border border-outline-variant/40 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="h-48 overflow-hidden rounded-t-xl relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                  <Image
                    src="/images/about_workshop.png"
                    alt="Large tech conference audience"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                    <span className="material-symbols-outlined text-primary text-2xl align-middle mr-2">handshake</span>
                    Industry Networking
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Connecting students with industry professionals through guest lectures, tech talks, and annual symposiums to jumpstart careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

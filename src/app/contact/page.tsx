import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20 flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="font-headline-xl text-headline-xl text-primary flex items-center">
            <span className="material-symbols-outlined text-[40px] mr-4">contact_mail</span>
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Have questions about our events, membership, or looking to collaborate? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Contact Form (Left Column, 8 cols) */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-surface-variant shadow-sm overflow-hidden flex flex-col">
            <div 
              className="h-32 bg-surface-container-high w-full bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/contact_bg.png')" }}
            ></div>
            
            <div className="p-8 md:p-12">
              <form action="#" className="flex flex-col gap-6" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="fullName">Full Name</label>
                    <input 
                      className="bg-surface-container-low border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 focus:ring-0 focus:border-primary transition-colors w-full" 
                      id="fullName" 
                      name="fullName" 
                      placeholder="Jane Doe" 
                      required 
                      type="text" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md text-on-surface" htmlFor="ieeeId">
                      IEEE Membership ID <span className="text-on-surface-variant font-normal">(Optional)</span>
                    </label>
                    <input 
                      className="bg-surface-container-low border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 focus:ring-0 focus:border-primary transition-colors w-full" 
                      id="ieeeId" 
                      name="ieeeId" 
                      placeholder="e.g. 98765432" 
                      type="text" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
                  <input 
                    className="bg-surface-container-low border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 focus:ring-0 focus:border-primary transition-colors w-full" 
                    id="email" 
                    name="email" 
                    placeholder="jane.doe@university.edu" 
                    required 
                    type="email" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="subject">Subject</label>
                  <input 
                    className="bg-surface-container-low border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 focus:ring-0 focus:border-primary transition-colors w-full" 
                    id="subject" 
                    name="subject" 
                    placeholder="How can we help you?" 
                    required 
                    type="text" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="message">Message</label>
                  <textarea 
                    className="bg-surface-container-low border-0 border-b border-outline-variant text-on-surface font-body-md text-body-md py-3 px-4 focus:ring-0 focus:border-primary transition-colors w-full resize-y" 
                    id="message" 
                    name="message" 
                    placeholder="Write your message here..." 
                    required 
                    rows={5}
                  ></textarea>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    className="bg-primary-container text-on-primary font-body-md text-body-md font-semibold py-3 px-8 rounded hover:bg-primary transition-colors flex items-center gap-2 w-full md:w-auto justify-center" 
                    type="submit"
                  >
                    Send Message
                    <span className="material-symbols-outlined text-[20px]">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details (Right Column, 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Info Card */}
            <div className="bg-surface-container-highest rounded-xl p-8 flex flex-col gap-8">
              <div>
                <h2 className="font-headline-md text-headline-md text-primary mb-6">Contact Information</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface-variant">Email</span>
                      <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors" href="mailto:contact@ieee-sb.edu">
                        contact@ieee-sb.edu
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface-variant">Office Location</span>
                      <span className="font-body-md text-body-md text-on-surface">
                        Engineering Building, Room 402<br/>
                        University Campus<br/>
                        Cityville, ST 12345
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-outline-variant"></div>

              <div>
                <h3 className="font-label-md text-label-md text-on-surface-variant mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container hover:text-primary transition-all text-on-surface-variant group" href="#">
                    <span className="font-body-md text-body-md font-semibold group-hover:text-primary">in</span>
                  </a>
                  <a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary-container hover:border-secondary-container hover:text-primary transition-all text-on-surface-variant group" href="#">
                    <span className="font-body-md text-body-md font-semibold group-hover:text-primary">ig</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

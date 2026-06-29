import Image from 'next/image';

export default function Innovation() {
  return (
    <section className="py-20 bg-surface border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[28px]">tips_and_updates</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Innovation</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              At the IEEE Student Branch, DIT University, innovation is at the heart of everything we do. We aim to push boundaries by fostering a culture of creativity, experimentation, and curiosity among students. Whether through hands-on workshops, technical projects, or ideation challenges, we encourage students to think beyond the obvious and develop real-world solutions.
            </p>
            <div className="space-y-4">
              <h4 className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">Key Principles:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_outward</span>
                  <span className="font-body-md text-on-surface">Encourage curiosity and out-of-the-box thinking in all activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_outward</span>
                  <span className="font-body-md text-on-surface">Embrace emerging technologies and trends through seminars and bootcamps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_outward</span>
                  <span className="font-body-md text-on-surface">Promote a maker culture through hackathons, design challenges, and open-source projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">arrow_outward</span>
                  <span className="font-body-md text-on-surface">Support innovative student-led initiatives that impact society</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg relative h-[500px] w-full">
            <Image
              src="/images/innovation.png"
              alt="Students collaborating on an innovative project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

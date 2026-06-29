import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import CorePillars from '@/components/CorePillars';
import Innovation from '@/components/Innovation';
import EventCardSection from '@/components/EventCardSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <CorePillars />
        <Innovation />
        <EventCardSection />
      </main>
      <Footer />
    </>
  );
}

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeatureCards from '@/components/FeatureCards';
import SponsorsSection from '@/components/SponsorsSection';
import ScheduleBlocks from '@/components/ScheduleBlocks';
import TournamentSection from '@/components/TournamentSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import LeadershipSection from '@/components/LeadershipSection';

export default function OPVHome() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeatureCards />
      <SponsorsSection />
      <ScheduleBlocks />
      <TournamentSection />
      <FinalCTA />
      <LeadershipSection />
      <Footer />
    </div>
  );
}

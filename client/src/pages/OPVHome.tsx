import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeatureCards from '@/components/FeatureCards';
import SponsorsSection from '@/components/SponsorsSection';
import TournamentSection from '@/components/TournamentSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function OPVHome() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeatureCards />
      <SponsorsSection />
      <TournamentSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

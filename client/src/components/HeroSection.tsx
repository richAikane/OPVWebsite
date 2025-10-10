import { links, season } from '@/lib/site';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <img 
            src="/season4-poster.avif"
            alt="Oʻahu Pride Volleyball Season 4 Poster"
            className="mx-auto h-64 md:h-96 w-auto mb-6 hover-lift rounded-xl shadow-lg"
            decoding="async"
            fetchpriority="high"
            loading="eager"
            data-testid="img-season-poster"
          />
          <h1 className="text-3xl md:text-6xl font-display font-bold mb-4">
            <span className="pride-text-animated">Oʻahu Pride Volleyball</span>
          </h1>
          <p className="text-base md:text-2xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed" data-testid="text-tagline">
            Welcome to Oʻahu Pride Volleyball (formerly the Hawaii LGBTQ Volleyball League)… bringing the Oʻahu LGBTQIA+ community together through friendship and a shared love of volleyball.
          </p>
          <p className="text-base md:text-xl text-gray-700 mt-4 font-semibold" data-testid="text-lokahi">
            LŌKAHI: Unity | Balance | Communication
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href={links.donate}
            target="_blank" 
            rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}
            className="text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300"
            data-testid="button-hero-donate"
          >
            Donate
          </a>
          <a 
            href={links.teamSideline}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-secondary text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300"
            data-testid="button-hero-schedule"
          >
            View Schedule
          </a>
        </div>
      </div>
    </section>
  );
}

import { links } from '@/lib/site';

export default function TournamentSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-6" data-testid="heading-tournament">
          Kaiāulu Classic
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8" data-testid="text-tournament-description">
          Join us for our annual tournament celebrating community and competition!
        </p>
        <a 
          href={links.tournament}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover-lift transition-all duration-300 inline-block"
          data-testid="button-tournament-info"
        >
          Learn More About Tournament
        </a>
      </div>
    </section>
  );
}

export default function TournamentSection() {
  return (
    <section id="tournament" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-tournament">
          Kaiāulu Classic
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
        <p className="text-base md:text-lg text-gray-700 mb-8" data-testid="text-tournament-description">
          Join us for our annual tournament celebrating community and competition! We&apos;ll share updated dates and registration info soon.
        </p>
        <div 
          className="inline-block bg-gray-100 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg shadow-inner border border-dashed border-gray-300"
          data-testid="button-tournament-info"
        >
          Tournament details coming soon
        </div>
      </div>
    </section>
  );
}

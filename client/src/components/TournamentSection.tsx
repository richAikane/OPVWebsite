export default function TournamentSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-gray-800 mb-6" data-testid="heading-tournament">
          🏆 Kaiāulu Classic Tournament
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed" data-testid="text-tournament-description">
          Join us for the ultimate grass volleyball showdown! Teams from across the islands come together for a day of competition, fun, and community spirit.
        </p>
        <a 
          href="https://bit.ly/kaiauluclassic"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-10 py-5 rounded-full text-xl shadow-xl hover:scale-105 transition-transform duration-300 inline-block"
          data-testid="button-tournament-info"
        >
          Learn More & Register
        </a>
      </div>
    </section>
  );
}

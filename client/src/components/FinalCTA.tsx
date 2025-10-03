export default function FinalCTA() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6" data-testid="heading-final-cta">
          Season 4 is Underway — Mahalo for Your Support! 🌺
        </h2>
        <p className="text-xl opacity-90 mb-8" data-testid="text-final-cta">
          Season 4 runs Sept 13–Nov 22, 2025 | Games on Saturdays, 8:00 AM–4:00 PM
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.zeffy.com/fundraising/support-season-4-oahu-pride-volleyball-league"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-pink-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            data-testid="button-final-donate"
          >
            Donate
          </a>
          <a 
            href="https://ericzmartin.com/"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            data-testid="button-final-photos"
          >
            View Photos
          </a>
        </div>
      </div>
    </section>
  );
}

export default function SponsorsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4" data-testid="heading-sponsors">
            Our Sponsors 🙏
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-sponsors-thanks">
            A huge mahalo to our sponsors for making our league possible!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className="bg-white rounded-xl p-4 shadow-md h-32 w-32 flex items-center justify-center"
              data-testid={`sponsor-placeholder-${i}`}
            >
              <span className="text-gray-400 text-sm text-center">Sponsor Logo</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://www.aikaneohana.com/kaiauluclassic"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 inline-block"
            data-testid="button-become-sponsor"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}

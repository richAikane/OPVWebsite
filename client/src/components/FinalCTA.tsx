export default function FinalCTA() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6" data-testid="heading-final-cta">
          Come Play With Us This Fall! 🌺
        </h2>
        <p className="text-xl mb-8 opacity-90" data-testid="text-final-cta">
          Season 4 runs Sept 13–Nov 22, 2025 | Games on Saturdays, 8:00 AM–4:00 PM
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://www.teamsideline.com/sites/aikaneohana/home"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-pink-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover-lift"
            data-testid="button-cta-register"
          >
            Register Your Team
          </a>
          <a 
            href="https://www.teamsideline.com/Layouts/minimalist/Home.aspx?d=%2Box4z56A3NEjkowRwkEosA%3D%3D"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-purple-500 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-purple-600 transition-all duration-300 hover-lift"
            data-testid="button-cta-free-agent"
          >
            Join as Free Agent
          </a>
        </div>
      </div>
    </section>
  );
}

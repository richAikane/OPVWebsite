export default function FinalCTA() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6" data-testid="heading-final-cta">
          Ready to Serve? 🏐
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-final-cta">
          Whether you're a seasoned player or just starting out, OPV welcomes you! Register your team or join as a free agent today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://www.teamsideline.com/sites/aikaneohana/home"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-purple-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform duration-300"
            data-testid="button-cta-register"
          >
            Register Team
          </a>
          <a 
            href="https://www.teamsideline.com/Layouts/minimalist/Home.aspx?d=%2Box4z56A3NEjkowRwkEosA%3D%3D"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform duration-300"
            data-testid="button-cta-free-agent"
          >
            Free Agent Signup
          </a>
        </div>
      </div>
    </section>
  );
}

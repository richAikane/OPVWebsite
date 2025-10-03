export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-4" data-testid="heading-about">
            About OPV 🌺
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="text-about-1">
              As a proud partner of{' '}
              <a 
                href="https://www.aikaneohana.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-pink-600 hover:text-pink-800 font-semibold underline"
                data-testid="link-aikane-ohana"
              >
                Aikāne ʻOhana
              </a>{' '}
              (501(c)(3)), we bring together players of all skill levels to enjoy exciting, competitive grass volleyball in a supportive and fun environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="text-about-2">
              Our community celebrates diversity, fosters friendship, and creates lasting memories on and off the court. From beginners to all-stars, everyone has a place in our ʻohana!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold" data-testid="text-season-info">
              Season 4 runs September 13 – November 22, 2025<br />
              Games on Saturdays, 8:00 AM – 4:00 PM
            </p>
            <div className="flex flex-wrap gap-4 text-sm justify-center sm:justify-start">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full" data-testid="badge-inclusive">🏳️‍🌈 Inclusive</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full" data-testid="badge-skill">🏐 All Skill Levels</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full" data-testid="badge-grass">🌱 Grass Volleyball</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full" data-testid="badge-community">🤝 Community-Led</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://www.aikaneohana.com/_files/ugd/952afa_season4photo.jpg"
              alt="OPV Players in Action"
              className="rounded-xl shadow-lg hover-lift w-full"
              data-testid="img-players-action"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

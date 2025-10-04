export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-about">
            About OPV <span className="inline-block">🌺</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed" data-testid="text-about-1">
              As a proud partner of{' '}
              <a 
                href="https://www.aikaneohana.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:opacity-80 font-semibold underline"
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
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full inline-flex items-center gap-1.5" data-testid="badge-inclusive"><span>🏳️‍🌈</span> Inclusive</span>
              <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full inline-flex items-center gap-1.5" data-testid="badge-skill"><span>🏐</span> All Skill Levels</span>
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full inline-flex items-center gap-1.5" data-testid="badge-grass"><span>🌱</span> Grass Volleyball</span>
              <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full inline-flex items-center gap-1.5" data-testid="badge-community"><span>🤝</span> Community-Led</span>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/players-action.jpg"
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

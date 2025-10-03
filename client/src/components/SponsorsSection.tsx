const sponsors = [
  {
    name: "Eric Z Martin Photography",
    logo: "/eric-z-martin.png",
    website: "https://ericzmartin.com/",
  },
  {
    name: "Hula's Waikiki",
    logo: "/hulas-waikiki.png",
    website: "https://hulas.com/",
  },
  {
    name: "Wang Chung's",
    logo: "/wang-chungs.webp",
    website: "https://www.wangchungs.com/",
  },
  {
    name: "Team Mimosa",
    logo: "/team-mimosa.png",
    website: null,
  },
  {
    name: "Halau Hula O Ikemanu",
    logo: "/halau-hula.jpg",
    website: null,
  },
  {
    name: "Tapas Waikiki",
    logo: "/tapas-waikiki.png",
    website: "https://www.hawaiigaybar.com/",
  },
];

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md h-32 w-full flex items-center justify-center hover-lift"
              data-testid={`sponsor-${index}`}
            >
              {sponsor.website ? (
                <a 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className={sponsor.name === "Eric Z Martin Photography" || sponsor.name === "Hula's Waikiki" 
                      ? "max-h-[100px] max-w-full object-contain" 
                      : "max-h-20 max-w-full object-contain"}
                  />
                </a>
              ) : (
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className={sponsor.name === "Eric Z Martin Photography" || sponsor.name === "Hula's Waikiki" 
                    ? "max-h-[100px] max-w-full object-contain" 
                    : "max-h-20 max-w-full object-contain"}
                />
              )}
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

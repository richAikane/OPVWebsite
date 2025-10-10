const sponsors = [
  {
    name: "Eric Martin Photography",
    logo: "https://static.wixstatic.com/media/6ea41b_1969f52a6a6b44a18a7beb1cd51e9771~mv2.png",
    website: "https://ericzmartin.com",
  },
  {
    name: "Hula's Waikiki",
    logo: "https://static.wixstatic.com/media/6ea41b_fd973045fd0b4c738f1af46a5bcb669d~mv2.png",
    website: "https://hulas.com",
  },
  {
    name: "Wang Chungs",
    logo: "https://static.wixstatic.com/media/952afa_f520492e6cbd42319e4cf71c9a94c118~mv2.webp",
    website: "https://www.wangchungs.com",
  },
  {
    name: "Team Mimosa",
    logo: "https://static.wixstatic.com/media/6ea41b_d6f960a8b60844d3a3aa5219b7ffaa88~mv2.png",
    website: null,
  },
  {
    name: "Halau Hula O Ikemanu",
    logo: "https://static.wixstatic.com/media/952afa_b535dc003cc540968950a7b9d97df5f2~mv2.jpg",
    website: "https://www.instagram.com/halau_hula_o_ikemanu_?igsh=ZnM3c2hmY2hnZ255",
  },
  {
    name: "Tapas Waikiki",
    logo: "https://static.wixstatic.com/media/952afa_a535a421d5b54c2aa0872a061d415613~mv2.png",
    website: "https://www.hawaiigaybar.com/",
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gray-800 mb-4" data-testid="heading-sponsors">
            Our Amazing Sponsors
          </h2>
          <p className="text-base md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed" data-testid="text-sponsors-subtitle">
            Mahalo to these incredible businesses and individuals who support our LGBTQIA+ volleyball community with aloha spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {sponsors.map((sponsor, index) => (
            sponsor.website ? (
              <a
                key={index}
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-gray-300 transition-all duration-300 min-h-[220px] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`sponsor-card-${index}`}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-[140px] object-contain mb-4"
                  loading="lazy"
                />
                <div className="text-base text-gray-700 font-medium mt-auto">
                  {sponsor.name}
                </div>
              </a>
            ) : (
              <div
                key={index}
                className="bg-white border border-gray-100 p-6 flex flex-col items-center text-center min-h-[220px] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`sponsor-card-${index}`}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-[140px] object-contain mb-4"
                  loading="lazy"
                />
                <div className="text-base text-gray-700 font-medium mt-auto">
                  {sponsor.name}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            Mahalo to these incredible businesses who support our LGBTQIA+ volleyball community with aloha spirit.
          </p>
          <a
            href="https://www.zeffy.com/en-US/fundraising/191a11d3-841f-420d-912a-990a33cace29"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors duration-300"
            data-testid="button-become-sponsor"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}

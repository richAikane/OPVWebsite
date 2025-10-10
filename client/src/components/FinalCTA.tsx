import { links, season } from '@/lib/site';

export default function FinalCTA() {
  return (
    <section className="w-full py-16 text-white" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-6" data-testid="heading-final-cta">
          Season 4 is Underway
        </h2>
        <p className="text-base md:text-xl opacity-90 mb-8" data-testid="text-final-cta">
          <span className="nowrap">Season&nbsp;4</span> runs <span className="nowrap">{season.rangeShort.replace(/ /g, '\u00A0')}</span> | Games on {season.day}, <span className="nowrap">{season.timeWindow.replace(/ /g, '\u00A0')}</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href={links.donate}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-pink-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            data-testid="button-final-donate"
          >
            Donate
          </a>
          <a 
            href={links.photos}
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

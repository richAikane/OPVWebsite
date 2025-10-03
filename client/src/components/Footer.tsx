export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4" data-testid="heading-footer-about">About OPV</h3>
            <p className="text-gray-300 text-sm leading-relaxed" data-testid="text-footer-about">
              Oahu Pride Volleyball is an inclusive, all-gender grass volleyball league bringing the Oʻahu LGBTQIA+ community together.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4" data-testid="heading-footer-links">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.aikaneohana.com/volleyball" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm" data-testid="link-footer-home">OPV Home</a>
              </li>
              <li>
                <a href="https://www.teamsideline.com/sites/aikaneohana/home" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm" data-testid="link-footer-registration">Registration</a>
              </li>
              <li>
                <a href="https://www.aikaneohana.com/_files/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm" data-testid="link-footer-rules">League Rules (PDF)</a>
              </li>
              <li>
                <a href="https://ericzmartin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm" data-testid="link-footer-photos">Photos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4" data-testid="heading-footer-connect">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://linktr.ee/oahupridevolleyball" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm" data-testid="link-footer-social">Social Media</a>
              </li>
              <li>
                <a href="https://www.bonfire.com/opvseason4/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm" data-testid="link-footer-store">OPV Store</a>
              </li>
              <li>
                <a href="https://www.aikaneohana.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm" data-testid="link-footer-aikane">Aikāne ʻOhana</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2" data-testid="text-footer-lokahi">
            LŌKAHI: Unity | Balance | Communication 🏳️‍🌈🏐🌺
          </p>
          <p className="text-gray-500 text-xs" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Oahu Pride Volleyball. A proud partner of Aikāne ʻOhana (501(c)(3)).
          </p>
        </div>
      </div>
    </footer>
  );
}

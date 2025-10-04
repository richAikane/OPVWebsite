export default function Footer() {
  return (
    <footer className="w-full text-white py-6" style={{ background: 'linear-gradient(135deg, #FF3E81, #FFD166 50%, #00A7C7)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold" data-testid="text-footer-title">Oʻahu Pride Volleyball</p>
            <p className="text-sm opacity-90" data-testid="text-footer-tagline">Inclusive • Community-Led</p>
          </div>
          <div className="text-center text-sm opacity-90">
            <p data-testid="text-footer-copyright">© Oʻahu Pride Volleyball / Aikāne ʻOhana (501(c)(3))</p>
            <p className="mt-1 space-x-4">
              <a 
                href="https://www.aikaneohana.com/_files/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
                data-testid="link-footer-rules"
              >
                Rules
              </a>
              <span>•</span>
              <a 
                href="https://www.zeffy.com/fundraising/support-season-4-oahu-pride-volleyball-league"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
                data-testid="link-footer-donate"
              >
                Donate
              </a>
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://linktr.ee/oahupridevolleyball" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition"
              data-testid="link-footer-social"
            >
              <img 
                src="/linktree-logo.png" 
                alt="Linktree" 
                className="h-7 w-7 rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

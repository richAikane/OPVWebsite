export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold" data-testid="text-footer-title">Oahu Pride Volleyball</p>
            <p className="text-sm opacity-90" data-testid="text-footer-tagline">Inclusive • Community-Led</p>
          </div>
          <div className="text-center text-sm opacity-90">
            <p data-testid="text-footer-copyright">© Oahu Pride Volleyball / Aikāne ʻOhana (501(c)(3))</p>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.158.247 2.914.553a4.97 4.97 0 0 1 1.77 1.153 4.97 4.97 0 0 1 1.153 1.77c.306.756.495 1.644.553 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.247 2.158-.553 2.914a4.97 4.97 0 0 1-1.153 1.77 4.97 4.97 0 0 1-1.77 1.153c-.756.306-1.644.495-2.914.553-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.158-.247-2.914-.553a4.97 4.97 0 0 1-1.77-1.153 4.97 4.97 0 0 1-1.153-1.77c-.306-.756-.495-1.644-.553-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.247-2.158.553-2.914a4.97 4.97 0 0 1 1.153-1.77A4.97 4.97 0 0 1 4.237 2.81c.756-.306 1.644-.495 2.914-.553C8.416 2.175 8.796 2.163 12 2.163m0-1.625c-3.259 0-3.67.014-4.947.072-1.296.059-2.21.25-3.01.556a6.59 6.59 0 0 0-2.32 1.514 6.59 6.59 0 0 0-1.514 2.32c-.306.8-.497 1.714-.556 3.01C.014 8.33 0 8.741 0 12s.014 3.67.072 4.947c.059 1.296.25 2.21.556 3.01a6.59 6.59 0 0 0 1.514 2.32 6.59 6.59 0 0 0 2.32 1.514c.8.306 1.714.497 3.01.556 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.296-.059 2.21-.25 3.01-.556a6.59 6.59 0 0 0 2.32-1.514 6.59 6.59 0 0 0 1.514-2.32c.306-.8.497-1.714.556-3.01.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.296-.25-2.21-.556-3.01a6.59 6.59 0 0 0-1.514-2.32 6.59 6.59 0 0 0-2.32-1.514c-.8-.306-1.714-.497-3.01-.556C15.67.014 15.259 0 12 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

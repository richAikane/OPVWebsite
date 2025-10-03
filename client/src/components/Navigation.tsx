import { usePrideMode } from '@/contexts/PrideModeContext';

export default function Navigation() {
  const { isPrideMode, togglePrideMode } = usePrideMode();

  return (
    <nav 
      id="main-nav" 
      className="bg-background shadow-sm sticky top-0 z-40 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 lg:gap-y-0 py-4">
          
          {/* Left Side: Logo & Mobile Quick Links */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-between items-center">
            <a 
              href="https://www.aikaneohana.com/volleyball" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="OPV Homepage" 
              className="block rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
              data-testid="link-home-logo"
            >
              <img 
                className="h-16 md:h-20 w-auto" 
                src="/opv-logo.png" 
                alt="Oahu Pride Volleyball Logo" 
                loading="lazy"
              />
            </a>
            <div className="flex items-center lg:hidden space-x-2">
              <a 
                href="https://www.aikaneohana.com/volleyball" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link text-foreground hover:text-primary text-sm font-medium"
                data-testid="link-mobile-home"
              >
                Home
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.teamsideline.com/sites/aikaneohana/home" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link text-foreground hover:text-primary text-sm font-medium"
                data-testid="link-mobile-registration"
              >
                Registration
              </a>
            </div>
          </div>

          {/* Right Side: Links & Buttons */}
          <div className="w-full lg:w-auto">
            <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-y-4 lg:gap-y-0 w-full">
              <div className="flex items-center ml-10 space-x-4">
                <div className="pride-toggle-switch-container flex items-center gap-x-3">
                  <span id="pride-toggle-label" className="font-semibold pride-text-animated">
                    Pride Mode
                  </span>
                  <label className="pride-toggle-switch">
                    <input 
                      type="checkbox" 
                      id="prideToggle" 
                      checked={isPrideMode}
                      onChange={togglePrideMode}
                      data-testid="toggle-pride-mode"
                    />
                    <span className="pride-switch-track">
                      <span className="pride-switch-thumb"></span>
                    </span>
                  </label>
                </div>
                <a href="https://www.aikaneohana.com/volleyball" target="_blank" rel="noopener noreferrer" className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" data-testid="link-home">Home</a>
                <a href="https://www.teamsideline.com/sites/aikaneohana/home" target="_blank" rel="noopener noreferrer" className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" data-testid="link-registration">Registration</a>
                <a href="https://www.aikaneohana.com/_files/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf" target="_blank" rel="noopener noreferrer" className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" data-testid="link-rules">Rules</a>
                <a href="https://ericzmartin.com/" target="_blank" rel="noopener noreferrer" className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" data-testid="link-photos">Photos</a>
                <a href="https://bit.ly/kaiauluclassic" target="_blank" rel="noopener noreferrer" className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" data-testid="link-tournament">Tournament</a>
                <a href="https://www.bonfire.com/opvseason4/" target="_blank" rel="noopener noreferrer" className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" data-testid="link-store">Store</a>
                <a href="https://www.aikaneohana.com/" target="_blank" rel="noopener noreferrer" className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" data-testid="link-aikane">Aikāne ʻOhana</a>
              </div>
              
              <a 
                href="https://www.teamsideline.com/Layouts/minimalist/Home.aspx?d=%2Box4z56A3NEjkowRwkEosA%3D%3D"
                target="_blank" 
                rel="noopener noreferrer"
                className="free-agents-btn relative inline-flex items-center px-4 py-2 ml-4 text-sm font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-all duration-300"
                data-testid="button-free-agent-desktop"
              >
                <span className="relative z-10">🏐 Free Agent Signup</span>
              </a>
              
              <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
                <div className="flex items-center gap-4 ml-4">
                  <a 
                    href="https://linktr.ee/oahupridevolleyball" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Follow us on Social Media" 
                    className="social-icon bg-pink-100 p-1.5 rounded-full hover:opacity-80 transition duration-200"
                    data-testid="link-social-desktop"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-pink-600" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.158.247 2.914.553a4.97 4.97 0 0 1 1.77 1.153 4.97 4.97 0 0 1 1.153 1.77c.306.756.495 1.644.553 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.247 2.158-.553 2.914a4.97 4.97 0 0 1-1.153 1.77 4.97 4.97 0 0 1-1.77 1.153c-.756.306-1.644.495-2.914.553-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.158-.247-2.914-.553a4.97 4.97 0 0 1-1.77-1.153 4.97 4.97 0 0 1-1.153-1.77c-.306-.756-.495-1.644-.553-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.247-2.158.553-2.914a4.97 4.97 0 0 1 1.153-1.77A4.97 4.97 0 0 1 4.237 2.81c.756-.306 1.644-.495 2.914-.553C8.416 2.175 8.796 2.163 12 2.163m0-1.625c-3.259 0-3.67.014-4.947.072-1.296.059-2.21.25-3.01.556a6.59 6.59 0 0 0-2.32 1.514 6.59 6.59 0 0 0-1.514 2.32c-.306.8-.497 1.714-.556 3.01C.014 8.33 0 8.741 0 12s.014 3.67.072 4.947c.059 1.296.25 2.21.556 3.01a6.59 6.59 0 0 0 1.514 2.32 6.59 6.59 0 0 0 2.32 1.514c.8.306 1.714.497 3.01.556 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.296-.059 2.21-.25 3.01-.556a6.59 6.59 0 0 0 2.32-1.514 6.59 6.59 0 0 0 1.514-2.32c.306-.8.497-1.714.556-3.01.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.296-.25-2.21-.556-3.01a6.59 6.59 0 0 0-1.514-2.32 6.59 6.59 0 0 0-2.32-1.514c-.8-.306-1.714-.497-3.01-.556C15.67.014 15.259 0 12 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="lg:hidden flex flex-col w-full gap-y-4 mt-4">
              <a 
                href="https://www.teamsideline.com/Layouts/minimalist/Home.aspx?d=%2Box4z56A3NEjkowRwkEosA%3D%3D"
                target="_blank" 
                rel="noopener noreferrer"
                className="free-agents-btn w-full text-center px-6 py-3 text-base font-semibold rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring transition-all duration-300"
                data-testid="button-free-agent-mobile"
              >
                🏐 Free Agent Signup
              </a>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://linktr.ee/oahupridevolleyball" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Social Links" 
                  className="social-icon bg-pink-100 p-1.5 rounded-full hover:opacity-80 transition"
                  data-testid="link-social-mobile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-pink-600" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.158.247 2.914.553a4.97 4.97 0 0 1 1.77 1.153 4.97 4.97 0 0 1 1.153 1.77c.306.756.495 1.644.553 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.247 2.158-.553 2.914a4.97 4.97 0 0 1-1.153 1.77 4.97 4.97 0 0 1-1.77 1.153c-.756.306-1.644.495-2.914.553-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.158-.247-2.914-.553a4.97 4.97 0 0 1-1.77-1.153 4.97 4.97 0 0 1-1.153-1.77c-.306-.756-.495-1.644-.553-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.247-2.158.553-2.914a4.97 4.97 0 0 1 1.153-1.77A4.97 4.97 0 0 1 4.237 2.81c.756-.306 1.644-.495 2.914-.553C8.416 2.175 8.796 2.163 12 2.163z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { usePrideMode } from '@/contexts/PrideModeContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const { isPrideMode, togglePrideMode } = usePrideMode();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "https://www.aikaneohana.com/volleyball", label: "Home", testId: "link-home" },
    { href: "https://www.zeffy.com/fundraising/support-season-4-oahu-pride-volleyball-league", label: "Donate", testId: "link-donate" },
    { href: "https://www.aikaneohana.com/_files/ugd/952afa_30cbb111dd5a4dfbb12461685f0f4c42.pdf", label: "Rules", testId: "link-rules" },
    { href: "https://ericzmartin.com/", label: "Photos", testId: "link-photos" },
    { href: "https://bit.ly/kaiauluclassic", label: "Tournament", testId: "link-tournament" },
    { href: "https://www.bonfire.com/opvseason4/", label: "Store", testId: "link-store" },
    { href: "https://www.aikaneohana.com/", label: "Aikāne ʻOhana", testId: "link-aikane" },
    { href: "#sponsors", label: "Sponsors", testId: "link-sponsors", isAnchor: true },
  ];

  return (
    <nav 
      id="main-nav" 
      className="bg-background shadow-sm sticky top-0 z-40 transition-all duration-300 ease-in-out"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex-shrink-0">
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
                alt="Oʻahu Pride Volleyball Logo" 
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
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

            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                target={link.isAnchor ? undefined : "_blank"}
                rel={link.isAnchor ? undefined : "noopener noreferrer"}
                className="nav-link text-foreground hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium" 
                data-testid={link.testId}
              >
                {link.label}
              </a>
            ))}

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

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  aria-label="Open menu"
                  data-testid="button-hamburger-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72" aria-describedby={undefined}>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  
                  {/* Pride Mode Toggle */}
                  <div className="pride-toggle-switch-container flex items-center justify-between gap-x-3 pb-4 border-b">
                    <span className="font-semibold pride-text-animated">
                      Pride Mode
                    </span>
                    <label className="pride-toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={isPrideMode}
                        onChange={togglePrideMode}
                        data-testid="toggle-pride-mode-mobile"
                      />
                      <span className="pride-switch-track">
                        <span className="pride-switch-thumb"></span>
                      </span>
                    </label>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a 
                        key={link.label}
                        href={link.href} 
                        target={link.isAnchor ? undefined : "_blank"}
                        rel={link.isAnchor ? undefined : "noopener noreferrer"}
                        className="nav-link text-foreground hover:text-muted-foreground px-4 py-3 rounded-md text-base font-medium hover-elevate"
                        data-testid={`${link.testId}-mobile`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  {/* Social Link */}
                  <div className="pt-4 border-t">
                    <a 
                      href="https://linktr.ee/oahupridevolleyball" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover-elevate"
                      data-testid="link-social-mobile"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="social-icon bg-pink-100 p-1.5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-pink-600" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.27.058 2.158.247 2.914.553a4.97 4.97 0 0 1 1.77 1.153 4.97 4.97 0 0 1 1.153 1.77c.306.756.495 1.644.553 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.27-.247 2.158-.553 2.914a4.97 4.97 0 0 1-1.153 1.77 4.97 4.97 0 0 1-1.77 1.153c-.756.306-1.644.495-2.914.553-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.27-.058-2.158-.247-2.914-.553a4.97 4.97 0 0 1-1.77-1.153 4.97 4.97 0 0 1-1.153-1.77c-.306-.756-.495-1.644-.553-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.27.247-2.158.553-2.914a4.97 4.97 0 0 1 1.153-1.77A4.97 4.97 0 0 1 4.237 2.81c.756-.306 1.644-.495 2.914-.553C8.416 2.175 8.796 2.163 12 2.163m0-1.625c-3.259 0-3.67.014-4.947.072-1.296.059-2.21.25-3.01.556a6.59 6.59 0 0 0-2.32 1.514 6.59 6.59 0 0 0-1.514 2.32c-.306.8-.497 1.714-.556 3.01C.014 8.33 0 8.741 0 12s.014 3.67.072 4.947c.059 1.296.25 2.21.556 3.01a6.59 6.59 0 0 0 1.514 2.32 6.59 6.59 0 0 0 2.32 1.514c.8.306 1.714.497 3.01.556 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.296-.059 2.21-.25 3.01-.556a6.59 6.59 0 0 0 2.32-1.514 6.59 6.59 0 0 0 1.514-2.32c.306-.8.497-1.714.556-3.01.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.059-1.296-.25-2.21-.556-3.01a6.59 6.59 0 0 0-1.514-2.32 6.59 6.59 0 0 0-2.32-1.514c-.8-.306-1.714-.497-3.01-.556C15.67.014 15.259 0 12 0z"/>
                        </svg>
                      </div>
                      <span className="font-medium">Social Media</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

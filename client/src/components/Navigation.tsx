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
                className="h-32 md:h-20 w-auto" 
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
              className="hover:opacity-80 transition duration-200"
              data-testid="link-social-desktop"
            >
              <img 
                src="/linktree-logo.png" 
                alt="Linktree" 
                className="h-9 w-9 rounded-lg"
              />
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="h-12 w-12 lg:h-9 lg:w-9"
                  aria-label="Open menu"
                  data-testid="button-hamburger-menu"
                >
                  <Menu className="h-8 w-8 lg:h-6 lg:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72" aria-describedby={undefined}>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-16">
                  
                  {/* Pride Mode Toggle */}
                  <div className="pride-toggle-switch-container flex items-center justify-between gap-x-3 pb-4 border-b">
                    <span className="text-base font-medium text-foreground px-4">
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
                      <img 
                        src="/linktree-logo.png" 
                        alt="Linktree" 
                        className="h-8 w-8 rounded-lg"
                      />
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

import { links } from '@/lib/site';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <img
          src="/opv-logo.png"
          alt="Oʻahu Pride Volleyball Logo"
          className="w-full max-w-2xl md:max-w-3xl h-auto object-contain drop-shadow-2xl"
          loading="eager"
          decoding="async"
          data-testid="img-hero-logo"
        />
      </div>
    </section>
  );
}

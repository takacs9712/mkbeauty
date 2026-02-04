import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream pt-28 md:pt-28 pb-16 md:pb-20 overflow-hidden">
    
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/20 to-cream"></div>

      <div className="relative text-center px-4 max-w-5xl mx-auto z-10 w-full">
        <h1 className="hero-title mb-3 md:mb-6 animate-fadeInUp text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Molnár Krisztina Kozmetika
        </h1>
        <p className="hero-subtitle mb-3 md:mb-4 opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards] text-base sm:text-lg md:text-xl">
          Sminktetoválás · Kozmetika
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-rose-600 font-medium mb-6 md:mb-8 opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]">
          Tiszaújváros
        </p>

        <div className="max-w-3xl mx-auto mb-10 md:mb-12 px-6 opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">
        
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-charcoal mb-6 md:mb-8 leading-tight">
            Nincs két egyforma arc,<br className="hidden sm:block" /> nincs sablonmegoldás.
          </h2>
          
       
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 md:mb-12 leading-relaxed">
            Természetes hatású sminktetoválás és prémium kozmetikai kezelések Tiszaújvárosban.
          </p>

          <div className="max-w-xl mx-auto">
            <ul className="space-y-4 md:space-y-5 text-left text-base sm:text-lg text-charcoal">
              <li className="flex items-start leading-relaxed">
                <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
                <span>Több mint <strong className="font-semibold">15 év</strong> szakmai tapasztalat</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
                <span>Természetes, <strong className="font-semibold">személyre szabott</strong> kezelések</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
                <span>Biztonságos, <strong className="font-semibold">modern technikák</strong></span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
                <span><strong className="font-semibold">Őszinte konzultáció</strong> – nem mindenkinél mindent</span>
              </li>
              <li className="flex items-start leading-relaxed">
                <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
                <span><strong className="font-semibold">Prémium minőség</strong>, kompromisszumok nélkül</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-[fadeInUp_0.8s_0.8s_forwards]">
          <button
            onClick={() => navigate("/idopontfoglalas")}
            className="btn-primary"
          >
            Foglaljon időpontot
          </button>
          <button
            onClick={() => navigate("/arak")}
            className="btn-secondary"
          >
            Árak és szolgáltatások
          </button>
        </div>
      </div>
    </section>
  );
}

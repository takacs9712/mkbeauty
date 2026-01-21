import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen flex items-center justify-center bg-cream pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/20 to-cream"></div>

      <div className="relative text-center px-4 max-w-5xl mx-auto z-10">
        <h1 className="hero-title mb-6 animate-fadeInUp">
          Molnár Krisztina Kozmetika
        </h1>
        <p className="hero-subtitle mb-4 opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]">
          Sminktetoválás · Kozmetika
        </p>

        <p className="text-xl md:text-2xl text-rose-600 font-medium mb-8 opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]">
          Tiszaújváros
        </p>

        <p className="body-large max-w-3xl mx-auto mb-12 opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">
          Emelje ki természetes szépségét professzionális sminktetoválással és
          prémium kozmetikai kezelésekkel Tiszaújváros szívében. Több mint 12
          év tapasztalat, folyamatos szakmai fejlődés és elégedett vendégek
          százai.
        </p>

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

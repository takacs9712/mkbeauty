import { Sparkles, Award, Heart, Clock, Phone } from "lucide-react";
import Contact from "../components/Contact";
import { servicesSummary } from "../data/servicesSummary";

import img1 from "../assets/facebook/1.jpg";
import img2 from "../assets/facebook/2.jpg";
import img3 from "../assets/facebook/3.jpg";
import img4 from "../assets/facebook/4.jpg";

type HomeProps = {
  onNavigate: (page: string) => void;
};

function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 pt-16">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative text-center px-4 max-w-6xl mx-auto">
          <h1 className="hero-title mb-6">Molnár Krisztina Kozmetika</h1>
          <p className="hero-subtitle mb-2">Sminktetoválás · Kozmetika</p>
          <p className="body-large text-rose-600 mb-4">Tiszaújváros</p>
          <p className="body-large max-w-2xl mx-auto mb-12">
            Emelje ki természetes szépségét professzionális sminktetoválással és
            prémium kozmetikai kezelésekkel Tiszaújváros szívében. Több mint 12
            év tapasztalat, folyamatos szakmai fejlődés és elégedett vendégek
            százai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("idopontfoglalas")}
              className="px-8 py-4 bg-rose-600 text-white text-base font-semibold rounded-lg hover:bg-rose-700 transition-all shadow-lg hover:shadow-xl"
            >
              Foglaljon időpontot
            </button>
            <button
              onClick={() => onNavigate("arak")}
              className="px-8 py-4 bg-white text-rose-600 text-base font-semibold border-2 border-rose-600 rounded-lg hover:bg-rose-50 transition-all"
            >
              Árak és szolgáltatások
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Miért válasszon engem?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <div className="text-center p-6 max-w-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Award className="text-rose-600" size={32} />
              </div>
              <h3 className="card-title">Szemöldök sminktetoválás</h3>
              <p className="body-small">
                Soft Powder, szálas és hibrid technikák, az arcformájához
                igazítva a természetes, mégis tartós szemöldökért.
              </p>
            </div>

            <div className="text-center p-6 max-w-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Sparkles className="text-rose-600" size={32} />
              </div>
              <h3 className="card-title">Ajak- és szemhéj tetoválás</h3>
              <p className="body-small">
                Kontúros vagy teljes ajaksatír, szempillasűrítés és tusvonal a
                friss, ápolt megjelenésért reggeltől estig.
              </p>
            </div>

            <div className="text-center p-6 max-w-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Heart className="text-rose-600" size={32} />
              </div>
              <h3 className="card-title">Kozmetikai kezelések</h3>
              <p className="body-small">
                Arcmasszázs, Carbon Peeling, termikus és savas hámlasztó
                kezelések a ragyogó, egészséges bőrért.
              </p>
            </div>

            <div className="text-center p-6 max-w-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Clock className="text-rose-600" size={32} />
              </div>
              <h3 className="card-title">Időtakarékos szépség</h3>
              <p className="body-small">
                Tartós sminktetoválással és személyre szabott kezelésekkel időt
                spórol a reggeli rutinból – mégis mindig ápolt marad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title text-center md:text-left">
                Szolgáltatásaim
              </h2>

              <div className="space-y-6">
                {servicesSummary.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="card-title">{service.title}</h3>
                    <p className="body-small">{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => onNavigate("arak")}
                  className="mt-8 px-8 py-3 bg-rose-600 text-white text-base font-semibold rounded-lg hover:bg-rose-700 transition-all shadow-lg"
                >
                  Árak megtekintése
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 order-1 md:order-2 max-w-lg mx-auto md:max-w-none">
              <img
                src={img1}
                alt="Szemöldök tetoválás"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src={img2}
                alt="Ajak tetoválás"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src={img3}
                alt="Szemhéj tetoválás"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src={img4}
                alt="Esztétikus eredmény"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Készen áll a változásra?</h2>
          <p className="body-large max-w-2xl mx-auto mb-6">
            Foglaljon időpontot most, és bízza magát profi kezekre!
          </p>

          <a
            href="tel:+36304431505"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-rose-600 font-semibold text-lg hover:text-rose-700 transition-colors"
          >
            <Phone size={24} /> +36 30 443 1505
          </a>
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default Home;

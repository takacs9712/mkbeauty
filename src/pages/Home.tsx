import { Sparkles, Award, Heart, Clock, Phone } from "lucide-react";
import Contact from "../components/Contact";
import { servicesSummary } from "../assets/data/servicesSummary";

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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50 pt-16">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-rose-900 mb-6">
            Molnár Kriszta Kozmetika
          </h1>
          <p className="text-2xl sm:text-3xl text-rose-700 mb-2">
            Sminktetoválás · Kozmetika
          </p>
          <p className="text-lg sm:text-xl text-rose-600 mb-4">Tiszaújváros</p>
          <p className="text-lg sm:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Emelje ki természetes szépségét professzionális sminktetoválással és
            prémium kozmetikai kezelésekkel Tiszaújváros szívében. Több mint 8
            év tapasztalat, folyamatos szakmai fejlődés és elégedett vendégek
            százai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("booking")}
              className="px-8 py-4 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all shadow-lg hover:shadow-xl font-semibold"
            >
              Foglaljon időpontot
            </button>
            <button
              onClick={() => onNavigate("prices")}
              className="px-8 py-4 bg-white text-rose-600 border-2 border-rose-600 rounded-lg hover:bg-rose-50 transition-all font-semibold"
            >
              Árak és szolgáltatások
            </button>
          </div>
        </div>
      </section>{" "}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center text-rose-900 mb-16">
            Miért válasszon engem?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Award className="text-rose-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Szemöldök sminktetoválás
              </h3>
              <p className="text-gray-600">
                Soft Powder, szálas és hibrid technikák, az arcformájához
                igazítva a természetes, mégis tartós szemöldökért.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Sparkles className="text-rose-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ajak- és szemhéj tetoválás
              </h3>
              <p className="text-gray-600">
                Kontúros vagy teljes ajaksatír, szempillasűrítés és tusvonal a
                friss, ápolt megjelenésért reggeltől estig.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Heart className="text-rose-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kozmetikai kezelések
              </h3>
              <p className="text-gray-600">
                Arcmasszázs, Carbon Peeling, termikus és savas hámlasztó
                kezelések a ragyogó, egészséges bőrért.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <Clock className="text-rose-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Időtakarékos szépség
              </h3>
              <p className="text-gray-600">
                Tartós sminktetoválással és személyre szabott kezelésekkel időt
                spórol a reggeli rutinból – mégis mindig ápolt marad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="page-title">Szolgáltatásaim</h2>

              <div className="space-y-6">
                {servicesSummary.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate("prices")}
                className="mt-8 px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all shadow-lg font-semibold"
              >
                Árak megtekintése
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
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
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-rose-900 mb-6">
            Készen áll a változásra?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Foglaljon időpontot most, és tapasztalja meg, milyen, amikor a
            professzionális sminktetoválás és kozmetika az Ön magabiztosságáért
            dolgozik.
          </p>

          <a
            href="tel:+36304431505"
            className="inline-flex items-center justify-center px-8 py-4  text-rose-600 font-semibold text-lg"
          >
            <Phone /> +36 30 443 1505
          </a>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default Home;

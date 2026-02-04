import me from "../assets/about/me.jpg";
import painting1 from "../assets/gallery/845571e7-e82a-426c-a12d-eaa8b22352aa.jpeg";
import painting2 from "../assets/gallery/f220b35c-94b4-4771-9b7f-e1007a9387d1.jpeg";
import painting3 from "../assets/gallery/f735be7a-7a15-47a5-b102-2bed264d4a1d.jpeg";
import { motion } from "framer-motion";

function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 sm:py-28 lg:py-36">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div variants={item} className="text-center mb-12">
          <h1 className="page-title mb-4">Bemutatkozás</h1>
          <p className="text-xl md:text-2xl text-gray-700 italic">
            Szeretettel köszöntelek az oldalamon!
          </p>
        </motion.div>

        {/* Image and Introduction Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
          {/* Image Section */}
          <motion.div
            variants={item}
            className="rounded-2xl overflow-hidden shadow-lg bg-white order-2 md:order-1"
          >
            <img
              src={me}
              alt="Molnár Krisztina"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Main Content */}
          <motion.div variants={item} className="space-y-6 order-1 md:order-2">
            <p className="body-text leading-relaxed">
              <strong>Molnár Krisztina</strong> vagyok, sminktetováló és kozmetikus. Munkámat mindig szívvel-lélekkel, nagy odafigyeléssel és felelősséggel végzem. Számomra a szépségápolás nem csupán a külső megjelenésről szól, hanem egy összetett folyamat, amelyben az empatikus hozzáállás és a vendégeim lelki jólléte is kiemelt szerepet kap.
            </p>
            
            <p className="body-text leading-relaxed">
              Fontos számomra, hogy vendégeim ne csak esztétikailag elégedetten, hanem feltöltődve, jó érzésekkel távozzanak a szalonomból. Az évek során kialakult bizalmi kapcsolataimért rendkívül hálás vagyok, és bízom benne, hogy a jövőben is egyre több értékes emberrel találkozhatok munkám során.
            </p>

            <p className="body-text leading-relaxed">
              Célom, hogy minden vendégem mosollyal az arcán és maximális elégedettséggel hagyja el a szalonomat. Szakmai tudásomat hosszú évek kitartó munkájával, folyamatos továbbképzésekkel és a legmodernebb, Magyarországon elérhető technikák elsajátításával építettem fel. Kezeléseimhez korszerű, speciális eszközöket alkalmazok, mindig az adott bőr- és probléma típusához igazodva.
            </p>
          </motion.div>
        </div>

        {/* Gallery Section - Paintings */}
        <motion.div variants={item} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div
              variants={item}
              className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={painting1}
                alt="Festmény 1"
                className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={painting2}
                alt="Festmény 2"
                className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={painting3}
                alt="Festmény 3"
                className="w-full h-64 md:h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
          <p className="text-center text-lg md:text-xl text-gray-600 italic">Festményeim</p>
        </motion.div>

        {/* Why Choose Me Section */}
        <motion.div variants={item} className="bg-white rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="subsection-title mb-6">Miért választanak engem a vendégeim?</h2>
          <ul className="space-y-4">
            <li className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>minden esetben egyénre szabott kezelési tervet készítek</span>
            </li>
            <li className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>folyamatosan képzem magam, naprakész szakmai tudással dolgozom</span>
            </li>
            <li className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>empatikus, nyugodt és biztonságos környezetet biztosítok</span>
            </li>
            <li className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>a természetes, harmonikus eredményeket részesítem előnyben</span>
            </li>
          </ul>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={item} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-sm p-8 mb-12">
          <h2 className="subsection-title mb-6">Szolgáltatásaim közül néhány:</h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>Termikus ionizáció</span>
            </div>
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>Szemhéjemelés sebészeti beavatkozás nélkül</span>
            </div>
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>Carbon Peeling</span>
            </div>
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>Plazma szépészeti kezelések</span>
            </div>
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>RF kezelések</span>
            </div>
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>Sminktetoválás</span>
            </div>
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>Lézeres tetoválás eltávolítás</span>
            </div>
            <div className="body-text flex items-start leading-relaxed">
              <span className="text-rose-600 font-bold mr-3 text-xl">•</span>
              <span>Szempillaépítés</span>
            </div>
          </div>
          <p className="body-small mt-6 italic text-gray-600">
            A felsorolás nem teljes, hiszen a hozzám forduló vendégek számára minden esetben személyre szabott megoldást alkalmazok, figyelembe véve az egyéni igényeket és bőrproblémákat.
          </p>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div variants={item} className="bg-white rounded-2xl shadow-sm p-8 mb-12 border-l-4 border-rose-400">
          <p className="body-text leading-relaxed mb-4">
            Számomra a szépségápolás művészet. Kozmetikusként és festőművészként is hiszek abban, hogy az alkotás nem csupán technika, hanem érzés, harmónia és életérzés is egyben. Engedd meg, hogy egy pár saját festményemmel köszöntselek az oldalon.
          </p>
        </motion.div>


        {/* Closing Section */}
        <motion.div variants={item} className="text-center space-y-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-10 shadow-lg">
          <p className="text-lg md:text-xl leading-relaxed">
            Szeretettel várom minden régi és új vendégemet Tiszaújvárosban található szépségszalonomban.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Ha kérdésed van, vagy szeretnél időpontot foglalni, vedd fel velem bizalommal a kapcsolatot.
          </p>
          <p className="text-base md:text-lg italic opacity-90">
            Köszönöm, hogy időt szántál a bemutatkozásom elolvasására.
          </p>
          <div className="pt-4">
            <a
              href="tel:+36304431505"
              className="inline-block bg-white text-rose-500 font-semibold py-3 px-8 text-base rounded-xl hover:bg-gray-100 transition-colors shadow-md"
            >
              Hívj fel: +36 30 443 1505
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;

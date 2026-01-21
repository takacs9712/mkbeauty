import me from "../assets/about/me.jpg";
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
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center mb-12">
          <h1 className="page-title">Rólam</h1>
          <p className="body-large max-w-2xl mx-auto">
            Molnár Kriszta Kozmetika Sminktetoválás · Tiszaújváros
          </p>
          <p className="caption mt-2">Szent István út 4/A 2/2, Tiszaújváros</p>
        </motion.div>

        {/* Main Introduction */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <motion.div
            variants={item}
            className="rounded-2xl overflow-hidden shadow-md bg-white"
          >
            <img
              src={me}
              alt="Molnár Kriszta kozmetikai munka közben"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div variants={item} className="space-y-4">
            <h2 className="subsection-title">
              Molnár Kriszta – kozmetikus, sminktetováló
            </h2>
            <p className="body-text">
              Tiszaújváros központjában várom vendégeimet, ahol a szépségápolás
              és az önbizalom erősítése áll a középpontban. Tapasztalt
              kozmetikusként és sminktetoválóként a természetes, mégis látványos
              eredményeket részesítem előnyben.
            </p>
            <p className="body-text">
              2012 óta folyamatosan képzem magam a sminktetoválás területén,
              hazai és nemzetközi szakemberektől tanulva. A szalonban dél-koreai
              Thesera termékekkel dolgozom a professzionális bőrápolásért.
            </p>
            <p className="body-text">
              Fontos számomra a nyugodt, barátságos légkör és az őszinte
              kommunikáció, hogy a vendégek biztonságban érezzék magukat és
              pontosan tudják, mire számíthatnak a kezelések során.
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="body-small font-medium text-rose-900">Kapcsolat:</p>
              <p className="body-small">+36 30 443 1505</p>
            </div>
          </motion.div>
        </div>

        {/* Service Areas */}
        <motion.div variants={container} className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div variants={item} className="bg-white rounded-2xl shadow-sm p-6 card-hover">
            <h3 className="card-title">Sminktetoválás</h3>
            <p className="body-small">
              Ajak, szemöldök és szemhéj sminktetoválás, Soft Powder, szálas és
              hibrid technikákkal. Tetoválás eltávolítás lézerrel (GoInk).
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-white rounded-2xl shadow-sm p-6 card-hover">
            <h3 className="card-title">Kozmetikai kezelések</h3>
            <p className="body-small">
              Arcmasszázs, carbon peeling, termikus és savas hámlasztó kezelések
              Thesera pen-nel. Dél-koreai bőrápolás a világ élvonalából.
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-white rounded-2xl shadow-sm p-6 card-hover">
            <h3 className="card-title">Szempilla és szemöldök</h3>
            <p className="body-small">
              Szempilla építés, töltés, szemöldök festés és formázás, term.
              ionizáció soft/hard technikák.
            </p>
          </motion.div>
        </motion.div>

        {/* Professional Philosophy */}
        <motion.div
          variants={item}
          className="bg-white rounded-2xl shadow-sm p-8 space-y-4 mb-16 border-l-4 border-rose-400"
        >
          <h2 className="subsection-title">Szakmai filozófia</h2>
          <p className="body-text">
            A kezelések alapja a természetesség, a precizitás és a magas
            higiéniai elvárásoknak való megfelelés. Minden vendég számára
            személyre szabott kezelési terv készül, bőrtípushoz és igényekhez
            igazítva.
          </p>
          <p className="body-text">
            A sminktetoválás ára tartalmaz egy korrekciót is, ha 2 hónapon belül
            érkezel, mert fontos, hogy az eredmény hosszú távon is szép és
            egységes maradjon.
          </p>
          <p className="body-text">
            Célom, hogy mindenki úgy távozzon a szalonból, hogy szebbnek,
            magabiztosabbnak és önazonosabbnak érzi magát, mint amikor
            megérkezett.
          </p>
        </motion.div>

        {/* Reviews & Why Choose */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={item}
            className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-8 text-center shadow-lg transform transition-transform hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold mb-4">Facebook</h3>
            <p className="text-3xl font-black mb-2">5.0 ★</p>
            <p className="body-large opacity-90 text-white">
              Kiváló értékelések
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100063592032603"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-rose-500 font-semibold py-3 px-6 text-base rounded-xl hover:bg-gray-100 transition-colors shadow-md"
            >
              Látogass el a Facebook oldalra →
            </a>
          </motion.div>
          <motion.div
            variants={item}
            className="bg-white rounded-2xl shadow-sm p-8 card-hover"
          >
            <h3 className="card-title mb-4">Miért válassz engem?</h3>
            <ul className="space-y-3">
              <li className="body-small flex items-center gap-2">
                <span className="text-rose-500">•</span> Központi elhelyezkedés
                Tiszaújvárosban
              </li>
              <li className="body-small flex items-center gap-2">
                <span className="text-rose-500">•</span> 2012 óta folyamatos
                szakmai fejlődés
              </li>
              <li className="body-small flex items-center gap-2">
                <span className="text-rose-500">•</span> Dél-koreai Thesera
                prémium termékek
              </li>
              <li className="body-small flex items-center gap-2">
                <span className="text-rose-500">•</span> Tetoválás eltávolítás
                lézerrel
              </li>
              <li className="body-small flex items-center gap-2">
                <span className="text-rose-500">•</span> Kiváló 5.0 csillagos
                értékelések
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

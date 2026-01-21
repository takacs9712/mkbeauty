import { Sparkles, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

type PriceSection = {
  title: string;
  items: PriceItem[];
  note?: string;
};

const priceData = {
  kozmetika: [
    {
      title: "Arcmasszázs",
      items: [
        { name: "Kézi arcmasszázs (30 perc)", price: "4 500 Ft" },
        { name: "Gépi arcmasszázs /EMS/ (20 perc)", price: "8 000 Ft" },
      ],
    } as PriceSection,
    {
      title: "Carbon Peeling",
      items: [
        { name: "Carbon peeling", price: "15 000 Ft" },
        { name: "Carbon peeling + tisztítás", price: "20 000 Ft" },
      ],
    } as PriceSection,
    {
      title: "Termikus kezelések",
      items: [
        { name: "Termikus I.", price: "15 000 Ft-tól" },
        { name: "Mátrixp. RF + HA bevitel", price: "22 000 Ft" },
        { name: "Szemhéjemelés TI", price: "50 000 Ft" },
      ],
    } as PriceSection,
    {
      title: "Thermokoaguláció",
      items: [
        { name: "Hajszálér / Rosacea", price: "15 000 Ft-tól" },
        { name: "Seprűvéna", price: "15 000 Ft-tól" },
      ],
    } as PriceSection,
    {
      title: "Savas hámlasztás",
      items: [
        {
          name: "Savas hámlasztás Mesoestetic termékekkel",
          price: "20 000 Ft",
        },
      ],
    } as PriceSection,
  ],
  szempilla: [
    {
      title: "Szempilla építés",
      items: [
        { name: "Első alkalom", price: "11 000 Ft" },
        { name: "3 hetes töltés", price: "8 500 Ft" },
        { name: "4 hetes töltés", price: "9 500 Ft" },
        { name: "4. hét után új szett", price: "11 000 Ft" },
      ],
      note: "Az ár a szett elkészítésére vonatkozik, a pillák számától függetlenül.",
    } as PriceSection,
    {
      title: "Szemöldök kezelések",
      items: [
        { name: "Szemöldök festés", price: "1 900 Ft" },
        { name: "Szemöldök szedés", price: "600 Ft" },
      ],
    } as PriceSection,
  ],
  sminkteteovalas: [
    {
      title: "Sminktetoválás",
      items: [
        { name: "Ajak", price: "60 000 Ft" },
        { name: "Szempilla sűrítés", price: "30 000 Ft" },
        { name: "Szemhéj tusvonal", price: "35 000 Ft" },
        { name: "Füstös szemhéj", price: "40 000 Ft" },
        { name: "Alsó szemhéj", price: "20 000 Ft" },
        { name: "Szemöldök – Soft Powder", price: "45 000 Ft" },
        { name: "Szemöldök – Szálas", price: "45 000 Ft" },
        { name: "Szemöldök – Hibrid /kombinált/", price: "55 000 Ft" },
      ],
      note: "Az árak tartalmaznak egy korrekciót, ha 2 hónapon belül érkezel.",
    } as PriceSection,
    {
      title: "Tetoválás eltávolítás",
      items: [
        { name: "Lézer – első alkalom", price: "15 000 Ft" },
        { name: "Lézer – további alkalmak", price: "10 000 Ft" },
        { name: "Ajak – lézer első alkalom", price: "20 000 Ft" },
        { name: "Szemhéj GOINK", price: "15 000 Ft /alk." },
        { name: "Hegkezelés", price: "10 000 Ft /alk." },
      ],
    } as PriceSection,
  ],
};

function Prices() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="page-title">Szolgáltatások & Árak</h1>
          <p className="body-large max-w-2xl mx-auto">
            Az árak 2025. november 15-től visszavonásig érvényesek, bőrtípus- és
            kezelésfüggők. Minden vendég számára személyre szabott kezelési terv
            készül.
          </p>
        </motion.div>

        {/* Cosmetic Services */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
            <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-rose-600" />
            </div>
            <h2 className="section-title mb-0 !text-left">Kozmetikai kezelések</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {priceData.kozmetika.map((section) => (
              <motion.div
                key={section.title}
                variants={item}
                className="bg-white rounded-xl shadow-sm border border-rose-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-rose-50 px-4 py-3 border-b border-rose-100">
                  <h3 className="card-title mb-0 text-rose-900">
                    {section.title}
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-rose-50 transition-colors"
                      >
                        <span className="body-small text-gray-700 flex-1 pr-3">
                          {item.name}
                        </span>
                        <span className="text-sm font-bold text-rose-600 whitespace-nowrap">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {section.note && (
                    <p className="caption mt-3 pt-3 border-t border-gray-100 text-gray-500 italic">
                      {section.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Eyelash & Eyebrow */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
            <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
              <Eye className="w-5 h-5 text-pink-600" />
            </div>
            <h2 className="section-title mb-0 !text-left">Szempilla & Szemöldök</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {priceData.szempilla.map((section) => (
              <motion.div
                key={section.title}
                variants={item}
                className="bg-white rounded-xl shadow-sm border border-pink-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-pink-50 px-4 py-3 border-b border-pink-100">
                  <h3 className="card-title mb-0 text-pink-900">
                    {section.title}
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-pink-50 transition-colors"
                      >
                        <span className="body-small text-gray-700 flex-1 pr-3">
                          {item.name}
                        </span>
                        <span className="text-sm font-bold text-pink-600 whitespace-nowrap">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {section.note && (
                    <p className="caption mt-3 pt-3 border-t border-gray-100 text-gray-500 italic">
                      {section.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Permanent Makeup */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="section-title mb-0 !text-left">Sminktetoválás</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
            {priceData.sminkteteovalas.map((section) => (
              <motion.div
                key={section.title}
                variants={item}
                className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-purple-50 px-4 py-3 border-b border-purple-100">
                  <h3 className="card-title mb-0 text-purple-900">
                    {section.title}
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-purple-50 transition-colors"
                      >
                        <span className="body-small text-gray-700 flex-1 pr-3">
                          {item.name}
                        </span>
                        <span className="text-sm font-bold text-purple-600 whitespace-nowrap">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {section.note && (
                    <p className="caption mt-3 pt-3 border-t border-gray-100 text-gray-500 italic">
                      {section.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto"
        >
          <p className="body-text text-gray-700">
            📞 Kérdés esetén hívjon bizalommal a{" "}
            <a
              href="tel:+36304431505"
              className="text-rose-600 font-semibold hover:text-rose-700 transition-colors"
            >
              +36 30 443 1505
            </a>{" "}
            telefonszámon
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Prices;

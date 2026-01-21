import { Award, Sparkles, Heart, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseMe() {
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
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          Miért válasszon engem?
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
        >
          <motion.div
            variants={item}
            className="text-center p-8 max-w-sm rounded-2xl card-hover bg-cream"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-sm rounded-full mb-6">
              <Award className="text-rose-600" size={32} />
            </div>
            <h3 className="card-title">Szemöldök sminktetoválás</h3>
            <p className="body-small">
              Soft Powder, szálas és hibrid technikák, az arcformájához
              igazítva a természetes, mégis tartós szemöldökért.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="text-center p-8 max-w-sm rounded-2xl card-hover bg-cream"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-sm rounded-full mb-6">
              <Sparkles className="text-rose-600" size={32} />
            </div>
            <h3 className="card-title">Ajak- és szemhéj tetoválás</h3>
            <p className="body-small">
              Kontúros vagy teljes ajaksatír, szempillasűrítés és tusvonal a
              friss, ápolt megjelenésért reggeltől estig.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="text-center p-8 max-w-sm rounded-2xl card-hover bg-cream"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-sm rounded-full mb-6">
              <Heart className="text-rose-600" size={32} />
            </div>
            <h3 className="card-title">Kozmetikai kezelések</h3>
            <p className="body-small">
              Arcmasszázs, Carbon Peeling, termikus és savas hámlasztó
              kezelések a ragyogó, egészséges bőrért.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="text-center p-8 max-w-sm rounded-2xl card-hover bg-cream"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-sm rounded-full mb-6">
              <Clock className="text-rose-600" size={32} />
            </div>
            <h3 className="card-title">Időtakarékos szépség</h3>
            <p className="body-small">
              Tartós sminktetoválással és személyre szabott kezelésekkel időt
              spórol a reggeli rutinból – mégis mindig ápolt marad.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

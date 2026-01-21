import { Phone, Clock, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

function Booking() {
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
    <div className="min-h-screen bg-cream pt-32 pb-20 sm:py-28 flex items-center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        {/* Main booking card */}
        <motion.div variants={item} className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-100 mb-6 shadow-sm">
            <Phone className="w-10 h-10 text-rose-600" />
          </div>

          <h1 className="page-title mb-6">Foglaljon időpontot telefonon</h1>

          <p className="body-large max-w-xl mx-auto mb-8">
            Hívjon bizalommal, és együtt megtaláljuk az Önnek legmegfelelőbb
            időpontot és kezelést. Rövid konzultációval segítek kiválasztani a
            megfelelő szolgáltatást.
          </p>

          <a
            href="tel:+36304431505"
            className="btn-primary gap-3 text-lg group"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 3,
              }}
            >
              <Phone className="w-5 h-5" />
            </motion.div>
            +36 30 443 1505
          </a>

          <p className="body-small text-gray-500 mt-6 max-w-md mx-auto">
            Amennyiben nem tudom azonnal felvenni a telefont, minden hívást
            visszahívok, amint szabaddá válok.
          </p>
        </motion.div>

        {/* Information blocks */}
        <motion.div variants={container} className="grid gap-6 sm:grid-cols-3">
          <motion.div variants={item} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-white/50">
            <Clock className="w-8 h-8 text-rose-600 mx-auto mb-3" />
            <h3 className="card-title mb-2">Fogadott idősávok</h3>
            <p className="body-small">
              Hétfő–Péntek, 9:00–18:00 között előre egyeztetett időpontban.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-white/50">
            <Calendar className="w-8 h-8 text-rose-600 mx-auto mb-3" />
            <h3 className="card-title mb-2">Rugalmas időpontok</h3>
            <p className="body-small">
              Lehetőség szerint igazodom az Ön napirendjéhez és
              elfoglaltságaihoz.
            </p>
          </motion.div>

          <motion.div variants={item} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-white/50">
            <MessageSquare className="w-8 h-8 text-rose-600 mx-auto mb-3" />
            <h3 className="card-title mb-2">Konzultáció a hívás során</h3>
            <p className="body-small">
              Röviden átbeszéljük a bőrtípust, elképzeléseket, korábbi
              kezeléseket.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Booking;

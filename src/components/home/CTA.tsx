import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="section-title">Készen áll a változásra?</h2>
        <p className="body-large max-w-2xl mx-auto mb-6">
          Foglaljon időpontot most, és bízza magát profi kezekre!
        </p>

        <a
          href="tel:+36304431505"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 text-rose-600 font-semibold text-lg hover:text-rose-700 transition-colors group"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatDelay: 3,
            }}
          >
            <Phone size={24} />
          </motion.div>
          +36 30 443 1505
        </a>
      </motion.div>
    </section>
  );
}

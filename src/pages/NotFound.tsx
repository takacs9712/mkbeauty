import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-rose-400 mb-3 animate-[fadeIn_1s_ease-out]">
          Hiba
        </p>
        <h1 className="text-6xl md:text-8xl font-serif text-rose-900 mb-6 animate-[fadeInUp_0.8s_0.2s_forwards] opacity-0">
          404
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto animate-[fadeInUp_0.8s_0.4s_forwards] opacity-0">
          Sajnos az oldal, amit keres, nem található. Lehet, hogy a link
          elavult, vagy elgépelés történt.
        </p>
        <div className="animate-[fadeInUp_0.8s_0.6s_forwards] opacity-0">
          <Link to="/" className="btn-primary">
            Vissza a főoldalra
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

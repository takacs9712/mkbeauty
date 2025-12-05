import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="text-center px-4">
        <p className="text-sm font-medium tracking-[0.25em] uppercase text-rose-400 mb-3">
          Hiba
        </p>
        <h1 className="text-5xl md:text-6xl font-serif text-rose-900 mb-4">
          404
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Sajnos az oldal, amit keres, nem található.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Lehet, hogy a link elavult, vagy elgépelés történt.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg shadow-lg hover:bg-rose-700 hover:shadow-xl transition-all font-semibold text-sm"
        >
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
}

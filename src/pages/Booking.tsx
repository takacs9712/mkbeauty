import { Phone, Clock, Calendar, MessageSquare } from "lucide-react";

function Booking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h1 className="page-title">Időpontfoglalás</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Időpontot kizárólag telefonon lehet foglalni, hogy minden kezelés
            előtt személyre szabottan egyeztethessük az igényeit és a
            lehetőségeket.
          </p>
        </div>

        {/* Fő kártya – telefonos foglalás */}
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-100 mb-4">
            <Phone className="w-10 h-10 text-rose-600" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-rose-900 mb-2">
            Foglaljon időpontot telefonon
          </h2>

          <p className="text-gray-700">
            Hívjon bizalommal, és együtt megtaláljuk az Önnek legmegfelelőbb
            időpontot és kezelést. Rövid konzultációval segítek kiválasztani a
            megfelelő szolgáltatást.
          </p>

          <a
            href="tel:+36304431505"
            className="inline-flex items-center justify-center gap-3 mt-4 px-8 py-4 bg-rose-600 text-white rounded-xl shadow-lg hover:bg-rose-700 hover:shadow-xl transition-all font-semibold text-lg"
          >
            <Phone className="w-5 h-5" />
            +36 30 443 1505
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Amennyiben nem tudom azonnal felvenni a telefont, minden hívást
            visszahívok, amint szabaddá válok.
          </p>
        </div>

        {/* Információs blokk */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 text-center">
            <Clock className="w-6 h-6 text-rose-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">
              Fogadott idősávok
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Hétfő–Szombat, 9:00–18:00 között előre egyeztetett időpontban.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 text-center">
            <Calendar className="w-6 h-6 text-rose-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">
              Rugalmas időpontok
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Lehetőség szerint igazodom az Ön napirendjéhez és
              elfoglaltságaihoz.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 text-center">
            <MessageSquare className="w-6 h-6 text-rose-600 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-900">
              Konzultáció a hívás során
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Röviden átbeszéljük a bőrtípust, elképzeléseket, korábbi
              kezeléseket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;

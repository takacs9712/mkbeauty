import { Clock, MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif text-rose-900 mb-4">
            Elérhetőség
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
            Látogasson el hozzánk Tiszaújvárosban, és engedje meg, hogy
            kényeztessük.
          </p>
        </div>

        {/* Tartalom rács */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* Bal oldal – Térkép kártya */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 overflow-hidden">
              <div className="px-6 pt-6 pb-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-rose-900">
                    Hol talál minket
                  </h2>
                  <p className="text-sm text-gray-600">
                    Molnár Krisztina Kozmetika & Sminktetoválás
                  </p>
                </div>
              </div>

              <div className="border-t border-rose-100">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.3238551701093!2d21.03408953858767!3d47.93066904199179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740afea650072f5%3A0xc6a3d4c5e2ff68fa!2sMoln%C3%A1r%20Krisztina%20Kozmetika%20Sminktetov%C3%A1l%C3%A1s!5e0!3m2!1shu!2shu!4v1764755677109!5m2!1shu!2shu"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Molnár Krisztina Kozmetika - Térkép"
                  ></iframe>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-rose-100 text-sm text-gray-700">
                <p className="font-medium text-gray-900 mb-1">Cím</p>
                <p>3580 Tiszaújváros</p>
                <p>Szent István út 4.A 2/2</p>
              </div>
            </div>
          </div>

          {/* Jobb oldal – Nyitvatartás + Elérhetőség */}
          <div className="space-y-8">
            {/* Nyitvatartás */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-rose-600" />
                </div>
                <h2 className="text-lg font-semibold text-rose-900">
                  Nyitvatartás
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between py-2 border-b border-rose-100">
                  <span className="text-gray-700">Hétfő – Péntek</span>
                  <span className="font-semibold text-gray-900">
                    9:00 – 18:00
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-rose-100">
                  <span className="text-gray-700">Szombat</span>
                  <span className="font-semibold text-gray-900">
                    9:00 – 18:00
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-700">Vasárnap</span>
                  <span className="font-semibold text-rose-600">Zárva</span>
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Időpontfoglalás előzetes egyeztetés alapján ajánlott.
              </p>
            </div>

            {/* Elérhetőség */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-100 p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-rose-600" />
                </div>
                <h2 className="text-lg font-semibold text-rose-900">
                  Elérhetőség
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-rose-500 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Telefon
                    </p>
                    <a
                      href="tel:+36304431505"
                      className="text-rose-700 hover:text-rose-800 font-semibold"
                    >
                      +36 30 443 1505
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-rose-500 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@molnarkrisztina.hu"
                      className="text-rose-700 hover:text-rose-800 break-all"
                    >
                      info@molnarkrisztina.hu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-rose-500 mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Szalon
                    </p>
                    <p className="text-gray-800">
                      3580 Tiszaújváros, Szent István út 4.A 2/2
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

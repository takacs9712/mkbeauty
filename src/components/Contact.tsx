import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h1 className="section-title">Elérhetőség</h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
            Látogasson el hozzánk Tiszaújvárosban, és engedje meg, hogy
            kényeztessük.
          </p>
        </div>

        {/* Tartalom rács */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* Bal oldal – Térkép */}
          <div className="bg-white rounded-sm space-y-6">
            <div className="px-6 pt-6 pb-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-rose-900">
                  Hol talál minket?
                </h2>
                <p className="text-sm text-gray-600">
                  Molnár Krisztina Kozmetika & Sminktetoválás
                </p>
              </div>
            </div>

            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.3238551701093!2d21.03408953858767!3d47.93066904199179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740afea650072f5%3A0xc6a3d4c5e2ff68fa!2sMoln%C3%A1r%20Krisztina%20Kozmetika%20Sminktetov%C3%A1l%C3%A1s!5e0!3m2!1shu!2shu!4v1764755677109!5m2!1shu!2shu"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Molnár Krisztina Kozmetika - Térkép"
              />
            </div>
          </div>

          {/* Jobb oldal – Nyitvatartás + Elérhetőség */}
          <div className="space-y-1 bg-white rounded-sm p-6">
            {/* Nyitvatartás */}
            <div>
              <div className="flex items-center gap-3 mb-4">
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
                    Zárva
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
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-semibold text-rose-900">
                  Elérhetőség
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start gap-3">
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
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:m.kriszta1@gmail.com"
                      className="text-rose-700 hover:text-rose-800 font-semibold break-all"
                    >
                      m.kriszta1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
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

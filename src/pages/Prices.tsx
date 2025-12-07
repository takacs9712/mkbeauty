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
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc - optimalizált */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="page-title">Szolgáltatások & Árak</h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            **Az árak 2025. november 15-től visszavonásig érvényesek, bőrtípus-
            és kezelésfüggők. Minden vendég számára személyre szabott kezelési
            terv készül.**
          </p>
        </div>

        {/* Kozmetikai kezelések */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-gradient-to-b from-rose-500 to-pink-500 rounded-full"></div>
            <h2 className="text-xl sm:text-3xl font-bold  text-rose-900">
              Kozmetikai kezelések
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {priceData.kozmetika.map((section) => (
              <div
                key={section.title}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200"
              >
                <h3 className="text-lg font-semibold text-rose-900 mb-4 pb-3 border-b-2 border-rose-100 group-hover:border-rose-300 transition-colors">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between gap-3 items-start"
                    >
                      <span className="text-gray-700 text-sm leading-relaxed flex-1">
                        {item.name}
                      </span>
                      <span className="text-rose-600 font-bold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100 italic">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Szempilla és szemöldök */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
            <h2 className="text-xl sm:text-3xl font-bold  text-rose-900">
              Szempilla & Szemöldök
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
            {priceData.szempilla.map((section) => (
              <div
                key={section.title}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200"
              >
                <h3 className="text-lg font-semibold text-rose-900 mb-4 pb-3 border-b-2 border-pink-100 group-hover:border-pink-300 transition-colors">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between gap-3 items-start"
                    >
                      <span className="text-gray-700 text-sm leading-relaxed flex-1">
                        {item.name}
                      </span>
                      <span className="text-pink-600 font-bold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100 italic">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sminktetoválás */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-rose-500 rounded-full"></div>
            <h2 className="text-xl sm:text-3xl font-bold  text-rose-900">
              Sminktetoválás
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl">
            {priceData.sminkteteovalas.map((section) => (
              <div
                key={section.title}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200"
              >
                <h3 className="text-lg font-semibold text-rose-900 mb-4 pb-3 border-b-2 border-purple-100 group-hover:border-purple-300 transition-colors">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between gap-3 items-start"
                    >
                      <span className="text-gray-700 text-sm leading-relaxed flex-1">
                        {item.name}
                      </span>
                      <span className="text-purple-600 font-bold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100 italic">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Prices;

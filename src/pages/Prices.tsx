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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc */}
        <div className="text-center mb-16">
          <h1 className="page-title">Szolgáltatások és árak</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Az árak 2025. november 15-től visszavonásig érvényesek, bőrtípus- és
            kezelésfüggők. Minden vendég számára személyre szabott kezelési terv
            készül.
          </p>
        </div>

        {/* Kozmetikai kezelések kategória */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-rose-900 mb-2">
              Kozmetikai kezelések
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {priceData.kozmetika.map((section) => (
              <div
                key={section.title}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-rose-100"
              >
                <h3 className="text-xl font-semibold text-rose-900 mb-4 pb-2 border-b-2 border-rose-200">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-rose-700 font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-200">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Szempilla és szemöldök kategória */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-rose-900 mb-2">
              Szempilla és szemöldök
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {priceData.szempilla.map((section) => (
              <div
                key={section.title}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-rose-100"
              >
                <h3 className="text-xl font-semibold text-rose-900 mb-4 pb-2 border-b-2 border-rose-200">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-rose-700 font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-200">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sminktetoválás kategória */}
        <div className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-rose-900 mb-2">
              Sminktetoválás
            </h2>
            <div className="w-20 h-1 bg-rose-600 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {priceData.sminkteteovalas.map((section) => (
              <div
                key={section.title}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-rose-100"
              >
                <h3 className="text-xl font-semibold text-rose-900 mb-4 pb-2 border-b-2 border-rose-200">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between gap-4 text-sm"
                    >
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-rose-700 font-semibold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {section.note && (
                  <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-200">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lábjegyzet */}
        <div className="text-center">
          <p className="text-sm text-gray-600 bg-white/40 backdrop-blur-sm rounded-lg py-3 px-6 inline-block">
            Az árak tájékoztató jellegűek, pontos árat személyes konzultáció
            során adok.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Prices;

import me from "../assets/about/me.jpg";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc - Javított értékeléssel */}
        <div className="text-center mb-12">
          <h1 className="page-title">Rólam</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Molnár Kriszta Kozmetika Sminktetoválás · Tiszaújváros
            <br />
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Szent István út 4/A 2/2, Tiszaújváros
          </p>
        </div>

        {/* Fő bemutatkozás */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            <img
              src={me}
              alt="Molnár Kriszta kozmetikai munka közben"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-rose-900">
              Molnár Kriszta – kozmetikus, sminktetováló
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Tiszaújváros központjában várom vendégeimet, ahol a szépségápolás
              és az önbizalom erősítése áll a középpontban. Tapasztalt
              kozmetikusként és sminktetoválóként a természetes, mégis látványos
              eredményeket részesítem előnyben.
            </p>
            <p className="text-gray-700 leading-relaxed">
              2012 óta folyamatosan képzem magam a sminktetoválás területén,
              hazai és nemzetközi szakemberektől tanulva. A szalonban dél-koreai
              Thesera termékekkel dolgozom a professzionális bőrápolásért.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fontos számomra a nyugodt, barátságos légkör és az őszinte
              kommunikáció, hogy a vendégek biztonságban érezzék magukat és
              pontosan tudják, mire számíthatnak a kezelések során.
            </p>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-medium text-rose-900">Kapcsolat:</p>
              <p className="text-sm text-gray-600">+36 30 443 1505</p>
            </div>
          </div>
        </div>

        {/* Fő területek */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-rose-900 mb-2">
              Sminktetoválás
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Ajak, szemöldök és szemhéj sminktetoválás, Soft Powder, szálas és
              hibrid technikákkal. Tetoválás eltávolítás lézerrel (GoInk).
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-rose-900 mb-2">
              Kozmetikai kezelések
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Arcmasszázs, carbon peeling, termikus és savas hámlasztó kezelések
              Thesera pen-nel. Dél-koreai bőrápolás a világ élvonalából.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-rose-900 mb-2">
              Szempilla és szemöldök
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Szempilla építés, töltés, szemöldök festés és formázás, term.
              ionizáció soft/hard technikák.
            </p>
          </div>
        </div>

        {/* Szakmai filozófia */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4 mb-16">
          <h2 className="text-2xl font-semibold text-rose-900 mb-2">
            Szakmai filozófia
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A kezelések alapja a természetesség, a precizitás és a magas
            higiéniai elvárásoknak való megfelelés. Minden vendég számára
            személyre szabott kezelési terv készül, bőrtípushoz és igényekhez
            igazítva.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A sminktetoválás ára tartalmaz egy korrekciót is, ha 2 hónapon belül
            érkezel, mert fontos, hogy az eredmény hosszú távon is szép és
            egységes maradjon.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Célom, hogy mindenki úgy távozzon a szalonból, hogy szebbnek,
            magabiztosabbnak és önazonosabbnak érzi magát, mint amikor
            megérkezett.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Facebook</h3>
            <p className="text-3xl font-black mb-2">5.0 ★</p>
            <p className="text-lg opacity-90">Kiváló értékelések</p>
            <a
              href="https://www.facebook.com/profile.php?id=100063592032603"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-rose-500 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Látogass el a Facebook oldalra →
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-semibold text-rose-900 mb-4">
              Miért válassz engem?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Központi elhelyezkedés Tiszaújvárosban </li>
              <li>• 2012 óta folyamatos szakmai fejlődés </li>
              <li>• Dél-koreai Thesera prémium termékek </li>
              <li>• Tetoválás eltávolítás lézerrel </li>
              <li>• Kiváló 5.0 csillagos értékelések </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

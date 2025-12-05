function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fejléc */}
        <div className="text-center mb-12">
          <h1 className="page-title">Rólam</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Molnár Kriszta Kozmetika Sminktetoválás · Tiszaújváros
          </p>
        </div>

        {/* Fő bemutatkozás */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white">
            <img
              src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              hazai és nemzetközi szakemberektől tanulva. Célom, hogy minden
              kezeléssel harmonikus, az arc karakteréhez illő végeredményt
              hozzak létre.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fontos számomra a nyugodt, barátságos légkör és az őszinte
              kommunikáció, hogy a vendégek biztonságban érezzék magukat és
              pontosan tudják, mire számíthatnak a kezelések során. [web:26]
            </p>
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
              hibrid technikákkal. A cél a tartós, mégis természetes hatás, ami
              megkönnyíti a mindennapi sminkelést.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-rose-900 mb-2">
              Kozmetikai kezelések
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Arcmasszázs, carbon peeling, termikus és savas hámlasztó
              kezelések, amelyek a bőr megújítását, frissítését és fiatalítását
              szolgálják. [attached_file:1]
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-rose-900 mb-2">
              Szempilla és szemöldök
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Szempilla építés, töltés, szemöldök festés és formázás, hogy a
              tekintet kifejezőbbé és harmonikusabbá váljon. [attached_file:2]
            </p>
          </div>
        </div>

        {/* Szakmai filozófia – egyszerűsítve */}
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
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
      </div>
    </div>
  );
}
export default About;

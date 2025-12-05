import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-rose-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Molnár Krisztina</h3>
            <p className="text-rose-100">
              Professzionális sminktetoválás szakértő
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kapcsolat</h4>
            <div className="space-y-2 text-rose-100">
              <a
                href="tel:+36304431505"
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone size={18} className="mr-2" />
                +36 30 443 1505
              </a>
              <a
                href="mailto:info@molnarkrisztina.hu"
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail size={18} className="mr-2" />
                m.kriszta1@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kövess minket</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/molnar_krisztina70/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-100 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063592032603"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-100 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-800 mt-8 pt-8 text-center text-rose-100">
          <p>
            &copy; {new Date().getFullYear()} Molnár Krisztina. Minden jog
            fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}

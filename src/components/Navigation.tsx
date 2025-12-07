import { Menu, X, Home, User, Tag, Image, Calendar } from "lucide-react";
import { useState } from "react";
import icon from "../assets/icon/icon.png";

type NavigationProps = {
  onNavigate: (page: string) => void;
};

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export function Navigation({ onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { id: "home", label: "Főoldal", icon: <Home className="w-4 h-4" /> },
    { id: "rolam", label: "Rólam", icon: <User className="w-4 h-4" /> },
    { id: "arak", label: "Árak", icon: <Tag className="w-4 h-4" /> },
    {
      id: "munkaim",
      label: "Munkáim",
      icon: <Image className="w-4 h-4" />,
    },
    {
      id: "idopontfoglalas",
      label: "Időpontfoglalás",
      icon: <Calendar className="w-4 h-4" />,
    },
  ];

  const handleClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <nav
          className="bg-white/80 backdrop-blur-md border border-rose-100
                     shadow-lg rounded-full px-4 sm:px-6 py-2
                     flex items-center justify-between"
        >
          {/* Logo + név */}
          <button
            onClick={() => handleClick("home")}
            className="flex items-center gap-2 sm:gap-3"
          >
            <img
              src={icon}
              alt="Molnár Krisztina logó"
              className="w-8 h-8 rounded-full object-cover shadow-sm"
            />
            <span className=" sm:block text-base sm:text-lg font-serif text-rose-900 tracking-[0.08em] uppercase">
              Molnár Krisztina
            </span>
          </button>

          {/* Desktop menü */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="inline-flex items-center gap-2 text-sm font-medium
                           text-gray-700 hover:text-rose-700
                           transition-colors px-2 py-1 rounded-full
                           hover:bg-rose-50"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobil hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-1 rounded-full hover:bg-rose-50 transition"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobil lenyíló menü */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md border border-rose-100 rounded-2xl shadow-lg py-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="flex items-center gap-3 w-full text-left px-4 py-2.5
                             text-base font-medium text-gray-700
                             hover:bg-rose-50 transition-colors"
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-rose-50 text-rose-600">
                    {item.icon}
                  </span>

                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

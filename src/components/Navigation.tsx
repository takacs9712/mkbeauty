import { Menu, X, Home, User, Tag, Image, Calendar } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon/icon.png";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { id: "", label: "Főoldal", icon: <Home className="w-4 h-4" /> },
    { id: "rolam", label: "Rólam", icon: <User className="w-4 h-4" /> },
    { id: "arak", label: "Árak", icon: <Tag className="w-4 h-4" /> },
    { id: "munkaim", label: "Munkáim", icon: <Image className="w-4 h-4" /> },
    {
      id: "idopontfoglalas",
      label: "Időpontfoglalás",
      icon: <Calendar className="w-4 h-4" />,
    },
  ];

  const handleClick = (page: string) => {
    navigate(page ? `/${page}` : "/");
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleClick("")}
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-rose-200">
              <img
                src={icon}
                alt="Molnár Krisztina"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-lg font-bold text-gray-900 leading-none group-hover:text-rose-700 transition-colors">
                Molnár Krisztina
              </span>
              <span className="text-xs text-rose-500 font-medium tracking-wider uppercase">
                Sminktetoválás
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-rose-700 hover:bg-rose-50 rounded-full transition-all duration-300 group"
              >
                <div className="text-rose-400 group-hover:text-rose-600 transition-colors">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-rose-50 text-gray-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/[99%] backdrop-blur-md border-t border-rose-100 shadow-xl absolute w-full">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="flex items-center gap-4 w-full text-left px-6 py-4 text-base font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-700 rounded-2xl transition-all"
                >
                  <div className="p-2 bg-rose-50 rounded-full text-rose-500">
                    {item.icon}
                  </div>
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

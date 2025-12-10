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
    { id: "munkaim", label: "Munkáim", icon: <Image className="w-4 h-4" /> },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => handleClick("home")}
            className="flex items-center gap-3 p-2 -m-2  transition-colors"
          >
            <img
              src={icon}
              alt="Molnár Krisztina"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="hidden sm:inline font-serif text-lg font-medium text-gray-900">
              Molnár Krisztina
            </span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -m-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  {item.icon}
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

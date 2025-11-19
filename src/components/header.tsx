import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "about", path: "/about" },
    { name: "Cardápio", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <img src="/assets/logo-vermelha.png" width="90" className="z-50" />

        {/* Navegação */}
        <nav className="flex gap-8 text-lg font-bold transition-colors duration-500">
          {menuItems.map((item) => (
            <Link key={item.name} to={item.path} className="relative group">
              <span className="transition-all duration-300 text-black group-hover:text-red-600">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

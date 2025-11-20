import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", target: "#home" },
    { name: "About", target: "#about" },
    { name: "Cardápio", target: "#menu" },
    { name: "Gallery", target: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        <img src="/assets/logo-vermelha.png" width="90" className="z-50" />

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-8 text-lg font-bold">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.target}
              className="relative group cursor-pointer"
            >
              <span className="transition-all duration-300 text-black group-hover:text-red-600">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden flex flex-col gap-1 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-7 h-0.5 bg-black"></div>
          <div className="w-7 h-0.5 bg-black"></div>
          <div className="w-7 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 mt-24 px-6 text-xl font-bold">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.target}
              onClick={() => setMenuOpen(false)}
              className="text-black hover:text-red-600"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

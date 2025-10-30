import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home"); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href, name) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveItem(name); 
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home", "Home");
            }}
          >
            Md.Asadulla
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`px-3 py-2 rounded-md transition-all duration-300 ${
                  activeItem === item.name
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
                onClick={() => scrollToSection(item.href, item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeItem === item.name
                    ? "text-blue-600 bg-gray-100"
                    : "text-gray-800 hover:text-blue-600 hover:bg-gray-100"
                }`}
                onClick={() => scrollToSection(item.href, item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

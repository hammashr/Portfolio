import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#1a1b20] via-[#241e2e] to-[#0e0e11] backdrop-blur-lg border-b border-white/10 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent tracking-wide">
          Hammad <span className="text-white/80">Ashraf</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <Link
                to={item.path}
                className={`transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-orange-400"
                    : "hover:text-orange-400"
                }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-500 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "group-hover:w-full w-0"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
}

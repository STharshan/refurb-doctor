// src/components/Navbar.jsx
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/#home" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/#testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.webp" alt="Logo" className="h-35 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-semibold text-black text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-blue-500 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button (Desktop Only) */}
        <div className="hidden md:block">
          <a
            href="tel:+447581730734"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+447581730734"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

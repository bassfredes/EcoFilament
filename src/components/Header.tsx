// Paleta de colores sugerida para EcoFilament:
// Verde principal: #6FCF97
// Verde oscuro: #219150
// Verde claro: #C8F7DC
// Gris oscuro: #22292F
// Blanco: #FFFFFF

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/utils/scrollToSection";
import { Button } from "@/components/Button";
import ReactDOM from "react-dom";

const menuLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#galeria", label: "Galería" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [menuOpen]);

  useEffect(() => {
    const wrapper = document.getElementById("layout-shift-wrapper");
    if (!wrapper) return;
    if (menuOpen) {
      wrapper.classList.add("content-shifted");
    } else {
      wrapper.classList.remove("content-shifted");
    }
    return () => wrapper.classList.remove("content-shifted");
  }, [menuOpen]);

  // Portal para overlay y menú lateral
  const menuPortal =
    typeof window !== "undefined"
      ? document.getElementById("mobile-menu-root")
      : null;

  const menuContent = (
    <div
      className={`menu-overlay fixed inset-0 ${menuOpen ? "open" : "closed"}`}
      onClick={() => setMenuOpen(false)}
      aria-hidden={!menuOpen}
    >
      <nav
        className={`menu-drawer fixed top-0 right-0 h-full w-80 max-w-full bg-[#181D22] shadow-2xl border-l-2 border-[#6FCF97]/40 flex flex-col pt-8 px-8 ${
          menuOpen ? "open" : "closed"
        }`}
        onClick={(e) => e.stopPropagation()}
        aria-label="Menú principal"
      >
        <button
          className="menu-close-btn"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="6"
              y1="6"
              x2="22"
              y2="22"
              stroke="#6FCF97"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="22"
              y1="6"
              x2="6"
              y2="22"
              stroke="#6FCF97"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ul className="flex flex-col gap-6 mt-12">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(
                    () => scrollToSection(link.href.replace("#", "")),
                    350
                  );
                }}
                className="text-white text-xl font-semibold hover:text-[#6FCF97] transition bg-transparent border-none outline-none cursor-pointer w-full text-left"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2">
            <Button
              text="Empieza a personalizar"
              onClick={() => {
                setMenuOpen(false);
                scrollToSection("galeria");
              }}
              className="bg-[#6FCF97] text-[#22292F] px-4 py-2 rounded-full font-semibold shadow hover:bg-[#219150] hover:text-white transition border border-[#219150] w-full block text-center whitespace-nowrap"
            />
          </li>
        </ul>
        <div className="mt-auto flex flex-col gap-2 pb-8">
          <span className="text-[#6FCF97] text-xs">
            EcoFilament © {new Date().getFullYear()}
          </span>
        </div>
      </nav>
    </div>
  );

  return (
    <header className={`w-full bg-[#22292F]/90 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50 border-b border-[#6FCF97]${menuOpen ? ' header-shifted' : ''}`}>
      <div className="transition-transform duration-500">
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-[#6FCF97] tracking-wide"
          >
            <Image
              src="/ecofilament-logo.png"
              alt="EcoFilament logo"
              width={200}
              height={58}
              priority
              fetchPriority="high"
              loading="eager"
            />
          </Link>
          <nav>
            {/* Desktop */}
            <ul className="hidden md:flex gap-6 items-center">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.replace("#", ""))}
                    className="text-white hover:text-[#6FCF97] transition font-medium bg-transparent border-none outline-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Button
                  text="Empieza a personalizar"
                  onClick={() => scrollToSection("galeria")}
                  className="bg-[#6FCF97] text-[#22292F] px-4 py-2 rounded-full cursor-pointer font-semibold shadow hover:bg-[#219150] hover:text-white transition border border-[#219150] w-full block text-center whitespace-nowrap"
                />
              </li>
            </ul>
            {/* Mobile Modern Animated Menu */}
            <button
              className={`hamburger flex md:hidden text-3xl focus:outline-none focus:ring-2 focus:ring-[#6FCF97] transition${
                menuOpen ? " open" : ""
              }`}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              <span className="sr-only">
                {menuOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
              <span className="hamburger-bar bar1" />
              <span className="hamburger-bar bar2" />
              <span className="hamburger-bar bar3" />
            </button>
            {/* Renderiza el menú mobile en el portal solo en cliente */}
            {isClient && menuPortal && ReactDOM.createPortal(menuContent, menuPortal)}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

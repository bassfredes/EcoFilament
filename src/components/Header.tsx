// Paleta de colores sugerida para EcoFilament:
// Verde principal: #6FCF97
// Verde oscuro: #219150
// Verde claro: #C8F7DC
// Gris oscuro: #22292F
// Blanco: #FFFFFF

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#galeria", label: "Galería" },
];

const cta = (
  <a
    href="#galeria"
    className="bg-[#6FCF97] text-[#22292F] px-4 py-2 rounded font-semibold shadow hover:bg-[#219150] hover:text-white transition border border-[#219150] w-full block text-center whitespace-nowrap"
  >
    Empieza a personalizar
  </a>
);

const Header: React.FC = () => {
    return (
      <header className="w-full bg-[#22292F]/90 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50 border-b border-[#6FCF97]">
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
            />
          </Link>
          <nav>
            {/* Desktop */}
            <ul className="hidden md:flex gap-6 items-center">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={true}
                    className="text-white hover:text-[#6FCF97] transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>{cta}</li>
            </ul>
            {/* Mobile */}
            <details className="md:hidden relative">
              <summary className="list-none cursor-pointer text-[#6FCF97] text-xl px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-[#6FCF97]">
                ☰
              </summary>
              <ul className="absolute right-0 mt-2 w-56 bg-[#232B33] rounded shadow-lg border border-[#6FCF97]/30 py-2 z-50 min-w-max">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      scroll={true}
                      className="block px-4 py-2 text-white hover:text-[#6FCF97] transition font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2">{cta}</li>
              </ul>
            </details>
          </nav>
        </div>
      </header>
    );
};

export default Header;
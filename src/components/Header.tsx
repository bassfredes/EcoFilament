// Paleta de colores sugerida para EcoFilament:
// Verde principal: #6FCF97
// Verde oscuro: #219150
// Verde claro: #C8F7DC
// Gris oscuro: #22292F
// Blanco: #FFFFFF

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="w-full bg-[#22292F]/90 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50 border-b border-[#6FCF97]">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
                <Link href="/" className="text-2xl font-bold text-[#6FCF97] tracking-wide">
                    EcoFilament
                </Link>
                <nav>
                    <ul className="flex gap-6 items-center">
                        <li>
                            <Link href="#beneficios" scroll={true} className="text-white hover:text-[#6FCF97] transition font-medium">
                                Beneficios
                            </Link>
                        </li>
                        <li>
                            <Link href="#galeria" scroll={true} className="text-white hover:text-[#6FCF97] transition font-medium">
                                Galería
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#galeria"
                                className="bg-[#6FCF97] text-[#22292F] px-4 py-2 rounded font-semibold shadow hover:bg-[#219150] hover:text-white transition border border-[#219150]"
                            >
                                Empieza a personalizar
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
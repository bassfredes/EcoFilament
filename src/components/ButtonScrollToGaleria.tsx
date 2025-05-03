"use client";
import { Button } from "@/components/Button";
import scrollToSection from "@/utils/scrollToSection";

export default function ButtonScrollToGaleria() {
  return (
    <Button
      text="Empieza a personalizar"
      onClick={() => scrollToSection("galeria")}
      className="inline-block bg-[#6FCF97] text-[#181D22] px-8 py-3 rounded-full cursor-pointer font-bold shadow-lg hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide"
    />
  );
}

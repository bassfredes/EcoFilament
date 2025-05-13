"use client";
import React, { useState } from "react";
import Image from "next/image";
import Toast from "@/components/Toast";

export default function ProyectoUnico() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section
      className="w-full max-w-6xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-12"
      id="proyecto-unico"
    >
      <div className="flex-1 flex justify-center">
        <Image
          src="/proyecto-unico.jpg"
          alt="Proyecto único EcoFilament"
          width={420}
          height={420}
          className="rounded-xl shadow-xl border-2 border-[#6FCF97]/60 bg-white object-contain"
          priority
        />
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6FCF97] mb-4 uppercase tracking-widest">
          Got a bold idea?
        </h2>
        <p className="text-white text-lg mb-4">
          At EcoFilament, your creativity has no limits. If you can imagine it,
          we can make it: prototypes, unique objects, custom gifts, and
          more—all crafted with 3D printing and recycled filament.
        </p>
        <p className="text-[#6FCF97] font-semibold mb-6">
          Take your project to the next level and wow the world with something
          truly amazing and sustainable.
        </p>
        <button
          className="bg-[#6FCF97] text-[#22292F] px-8 py-3 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide cursor-pointer mt-2"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "cta_proyecto_unico", {
                location: "seccion_proyecto_unico",
              });
            }
            setShowToast(true);
            setTimeout(() => setShowToast(false), 6000);
          }}
        >
          I want my unique project!
        </button>
        <Toast
          show={showToast}
          message="Thank you for your interest!"
          onClose={() => setShowToast(false)}
        />
      </div>
    </section>
  );
}

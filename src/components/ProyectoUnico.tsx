"use client";
import Image from "next/image";

export default function ProyectoUnico() {
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
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#6FCF97] mb-4 uppercase tracking-widest">
          ¿Tienes una idea imposible?
        </h2>
        <p className="text-white text-lg mb-4">
          En EcoFilament, no hay límites para tu creatividad. Si puedes
          imaginarlo, podemos crearlo: prototipos, objetos únicos, regalos
          personalizados y más, todo hecho con impresión 3D y filamento
          reciclado.
        </p>
        <p className="text-[#6FCF97] font-semibold mb-6">
          Atrévete a llevar tu proyecto al siguiente nivel y sorprende al mundo
          con algo realmente increíble y sostenible.
        </p>
        <button
          className="bg-[#6FCF97] text-[#22292F] px-8 py-3 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide cursor-pointer mt-2"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "cta_proyecto_unico", {
                location: "seccion_proyecto_unico",
              });
            }
          }}
        >
          ¡Quiero mi proyecto único!
        </button>
      </div>
    </section>
  );
}

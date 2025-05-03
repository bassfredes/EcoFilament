import Image from "next/image";
import { FaLeaf, FaPalette, FaCheckCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="pt-20 bg-gradient-to-b from-[#181D22] via-[#232B33] to-[#181D22] min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center px-0 pb-2 bg-transparent">
        <div className="w-full flex justify-center mb-8">
          <Image
            src="/BannerPrincipal.jpeg"
            alt="EcoFilament Banner Principal"
            width={1280}
            height={720}
            className="rounded-lg shadow-2xl w-full max-w-[1280px] border-4 border-[#6FCF97]"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#6FCF97] mb-4 drop-shadow-lg tracking-tight">
          Filamentos sustentables, <span className="text-white">personalizados</span> para ti
        </h1>
        <p className="text-lg md:text-xl text-[#6FCF97] mb-8 font-medium">
          Descubre cómo puedes crear productos únicos y ecológicos con nuestros filamentos reciclados y personalizables.
        </p>
        <a
          href="#galeria"
          className="inline-block bg-[#6FCF97] text-[#181D22] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide"
        >
          Empieza a personalizar
        </a>
      </section>
      {/* Beneficios */}
      <section id="beneficios" className="w-full max-w-5xl mx-auto grid md:grid-cols-3 gap-8 py-16 px-4 bg-transparent">
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaLeaf className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">Sustentable</h3>
          <p className="text-white font-medium">Filamentos hechos a partir de materiales reciclados, reduciendo el impacto ambiental.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaPalette className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">Personalizable</h3>
          <p className="text-white font-medium">Elige color y agrega tu nombre o texto para un producto único.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaCheckCircle className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">Calidad garantizada</h3>
          <p className="text-white font-medium">Modelos probados y listos para impresión 3D, con excelente desempeño.</p>
        </div>
      </section>
      {/* Aquí irán las siguientes secciones: Galería, etc. */}
    </main>
  );
}

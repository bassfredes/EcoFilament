import Image from "next/image";
import { FaLeaf, FaPalette, FaCheckCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ButtonScrollToGaleria from "@/components/ButtonScrollToGaleria";

const LazyGaleria = dynamic(() => import("@/components/Galeria"));
const LazyProyectoUnico = dynamic(() => import("@/components/ProyectoUnico"));

export default function Home() {
  return (
    <main className="pt-20 bg-gradient-to-b from-[#181D22] via-[#232B33] to-[#181D22] min-h-screen px-0 sm:px-4">
      {/* Hero Section con <picture> para mobile/desktop */}
      <section className="w-full flex flex-col items-center justify-center text-center px-0 py-4 bg-transparent">
        <div className="w-full flex justify-center mb-8">
          <picture className="w-full max-w-[1120px]">
            <source
              srcSet="/BannerPrincipal_mobile.jpg"
              media="(max-width: 767px)"
            />
            <img
              src="/BannerPrincipal.jpg"
              alt="EcoFilament Banner Principal"
              className="rounded-lg shadow-2xl w-full max-w-[1080px] border-0 sm:border-4 sm:border-[#6FCF97]"
              width={1120}
              height={730}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="max-w-[1120px] w-full px-2 sm:px-0 mx-auto">
          <h1 className="text-balance text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight leading-tight break-words whitespace-pre-line">
            Sustainable Filaments,{" "}
            <span className="text-[#6FCF97]">custom-made</span> for you
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 font-medium">
            Discover how you can create unique and eco-friendly products with
            our recycled and customizable filaments.
          </p>
        </div>
        <ButtonScrollToGaleria />
      </section>
      {/* Beneficios */}
      <section
        id="beneficios"
        className="w-full max-w-5xl mx-auto grid md:grid-cols-3 gap-8 py-8 px-4 bg-transparent"
      >
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaLeaf className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">
            Eco-Friendly
          </h3>
          <p className="text-white font-medium">
            Filaments made from recycled materials, reducing environmental
            impact.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaPalette className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">
            Customizable
          </h3>
          <p className="text-white font-medium">
            Choose your color and add your name or text for a truly unique
            product.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaCheckCircle className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">
            Quality Guaranteed
          </h3>
          <p className="text-white font-medium">
            Tested models, ready for 3D printing, with excellent performance.
          </p>
        </div>
      </section>
      {/* Lazy load Galería de Productos */}
      <Suspense
        fallback={
          <div className="text-center text-[#6FCF97] py-12">
            Loading products gallery...
          </div>
        }
      >
        <LazyGaleria />
      </Suspense>
      {/* Lazy load Proyecto Único */}
      <Suspense
        fallback={
          <div className="text-center text-[#6FCF97] py-12">
            Loading unique project...
          </div>
        }
      >
        <LazyProyectoUnico />
      </Suspense>
      {/* Sección: ¿Quiénes somos? */}
      <section className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row-reverse items-center text-center md:text-left gap-12">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <Image
            src="/section-2.jpg"
            alt="EcoFilament Team"
            width={420}
            height={420}
            className="rounded-xl shadow-xl border-2 border-[#6FCF97]/60 bg-white object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-[#6FCF97] mb-2">
            Who are we?
          </h2>
          <p className="text-white text-lg max-w-2xl">
            We are a young team passionate about design, technology, and
            recycling. We believe that personalization and sustainability can go
            hand in hand to create products that inspire a new generation of
            makers and conscious consumers.
          </p>
          <p className="text-[#6FCF97] font-semibold mb-6">
            Join the recycled filament revolution!
          </p>
        </div>
      </section>
      {/* Sección: ¿Por qué personalizar con reciclado? */}
      <section className="w-full max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center text-center md:text-left gap-12">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <Image
            src="/section-1.jpg"
            alt="Recycling"
            width={420}
            height={420}
            className="rounded-xl shadow-xl border-2 border-[#6FCF97]/60 bg-white object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-[#6FCF97] mb-2">
            Why choose recycled customization?
          </h2>
          <p className="text-white text-lg max-w-2xl">
            By choosing custom products made with recycled filament, you
            reduce your carbon footprint by up to 70% compared to conventional
            products. You also support the circular economy, foster creativity,
            and carry a unique design that reflects your commitment to the
            planet.
          </p>
        </div>
      </section>
    </main>
  );
}

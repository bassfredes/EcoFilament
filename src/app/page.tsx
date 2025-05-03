import Image from "next/image";
import { FaLeaf, FaPalette, FaCheckCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load de secciones pesadas
const LazyGaleria = dynamic(() => import("@/components/Galeria"), {
  loading: () => (
    <div className="text-center text-[#6FCF97] py-12">Cargando galería...</div>
  ),
});
const LazyProyectoUnico = dynamic(() => import("@/components/ProyectoUnico"), {
  loading: () => (
    <div className="text-center text-[#6FCF97] py-12">
      Cargando proyecto único...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="pt-20 bg-gradient-to-b from-[#181D22] via-[#232B33] to-[#181D22] min-h-screen">
      {/* Hero Section con <picture> para mobile/desktop */}
      <section className="w-full flex flex-col items-center justify-center text-center px-0 pb-2 bg-transparent">
        <div className="w-full flex justify-center mb-8">
          <picture>
            <source srcSet="/BannerPrincipal.jpeg" media="(max-width: 767px)" />
            <img
              src="/BannerPrincipal.jpeg"
              alt="EcoFilament Banner Principal"
              className="rounded-lg shadow-2xl w-full max-w-[1250px] border-4 border-[#6FCF97]"
              width={1250}
              height={720}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="max-w-3xl w-full mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6FCF97] mb-4 drop-shadow-lg tracking-tight leading-tight">
            Filamentos sustentables,
            <span className="text-white"> personalizados</span> para ti
          </h1>
          <p className="text-lg md:text-xl text-[#6FCF97] mb-8 font-medium">
            Descubre cómo puedes crear productos únicos y ecológicos con
            nuestros filamentos reciclados y personalizables.
          </p>
        </div>
        <a
          href="#galeria"
          className="inline-block bg-[#6FCF97] text-[#181D22] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide"
        >
          Empieza a personalizar
        </a>
      </section>
      {/* Beneficios */}
      <section
        id="beneficios"
        className="w-full max-w-5xl mx-auto grid md:grid-cols-3 gap-8 py-8 px-4 bg-transparent"
      >
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaLeaf className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">Sustentable</h3>
          <p className="text-white font-medium">
            Filamentos hechos a partir de materiales reciclados, reduciendo el
            impacto ambiental.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaPalette className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">
            Personalizable
          </h3>
          <p className="text-white font-medium">
            Elige color y agrega tu nombre o texto para un producto único.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#232B33] shadow-lg border border-[#6FCF97]/30">
          <FaCheckCircle className="mb-4 text-[#6FCF97] w-14 h-14 drop-shadow" />
          <h3 className="text-xl font-bold text-[#6FCF97] mb-2">
            Calidad garantizada
          </h3>
          <p className="text-white font-medium">
            Modelos probados y listos para impresión 3D, con excelente
            desempeño.
          </p>
        </div>
      </section>
      {/* Lazy load Galería de Productos */}
      <Suspense
        fallback={
          <div className="text-center text-[#6FCF97] py-12">
            Cargando galería...
          </div>
        }
      >
        <LazyGaleria />
      </Suspense>
      {/* Lazy load Proyecto Único */}
      <Suspense
        fallback={
          <div className="text-center text-[#6FCF97] py-12">
            Cargando proyecto único...
          </div>
        }
      >
        <LazyProyectoUnico />
      </Suspense>
      {/* Sección: ¿Quiénes somos? */}
      <section className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row-reverse items-center text-center md:text-left gap-12">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <Image
            src="/section-2.png"
            alt="Equipo EcoFilament"
            width={420}
            height={420}
            className="rounded-xl shadow-xl border-2 border-[#6FCF97]/60 bg-white object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#6FCF97] mb-2">
            ¿Quiénes somos?
          </h2>
          <p className="text-white text-lg max-w-2xl">
            Somos un equipo joven y apasionado por el diseño, la tecnología y el
            reciclaje. Creemos que la personalización y la sustentabilidad
            pueden ir de la mano para crear productos que inspiren a una nueva
            generación de makers y consumidores conscientes.
          </p>
          <p className="text-[#6FCF97] font-semibold mb-6">
            ¡Únete a la revolución del filamento reciclado!
          </p>
        </div>
      </section>
      {/* Sección: ¿Por qué personalizar con reciclado? */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center text-center md:text-left gap-12">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <Image
            src="/section-1.png"
            alt="Reciclaje"
            width={420}
            height={420}
            className="rounded-xl shadow-xl border-2 border-[#6FCF97]/60 bg-white object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#6FCF97] mb-2">
            ¿Por qué personalizar con reciclado?
          </h2>
          <p className="text-white text-lg max-w-2xl">
            Eligiendo productos personalizados hechos con filamento reciclado
            reduces tu huella de carbono en un 70% comparado con productos
            convencionales. Además, apoyas la economía circular, fomentas la
            creatividad y llevas contigo un diseño único que refleja tu
            compromiso con el planeta.
          </p>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Galeria() {
  const personalizables = products.filter((p) => p.customizable);
  const estandar = products.filter((p) => !p.customizable);
  const mixed = [
    personalizables[0],
    estandar[0],
    personalizables[1],
    estandar[1],
  ].filter(Boolean);

  return (
    <section id="galeria" className="w-full max-w-6xl mx-auto py-8 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#6FCF97] mb-10 text-center drop-shadow-lg">
        Galería de Productos
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {mixed.map((product) => (
          <div
            key={product.id}
            className="bg-[#232B33] rounded-xl shadow-lg border border-[#6FCF97]/30 flex flex-col items-center p-6 h-full min-h-[540px] justify-between hover:scale-105 transition-transform"
          >
            <Link
              href={`/producto/${product.id}`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="rounded-lg mb-4 border-2 border-[#6FCF97] shadow"
                loading="lazy"
              />
            </Link>
            <h3 className="text-2xl font-bold text-[#6FCF97] mb-2 text-center">
              {product.name}
            </h3>
            <p className="text-white mb-4 text-center flex-1">
              {product.description}
            </p>
            <div className="flex flex-col items-center w-full mt-auto">
              <span className="text-[#6FCF97] font-bold text-lg mb-2">
                {product.price}
              </span>
              <Link
                href={`/producto/${product.id}`}
                className="bg-[#6FCF97] text-[#22292F] px-6 py-2 rounded-full font-semibold shadow hover:bg-[#219150] hover:text-white transition border border-[#219150] w-full text-center"
              >
                Ver producto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

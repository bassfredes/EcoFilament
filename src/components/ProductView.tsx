"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

function trackEvent(event: string, params?: Record<string, unknown>) {
  if (analytics) {
    logEvent(analytics, event, params);
  }
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  customizable: boolean;
}

export default function ProductView({ product }: { product: Product }) {
  const [showModal, setShowModal] = useState(false);
  const [customName, setCustomName] = useState("");
  const [color, setColor] = useState("verde");
  // Simulación de imágenes por color
  const colorImages: Record<string, string> = {
    verde: product?.image ?? "",
    azul: (product?.image ?? "").replace("6FCF97", "2D9CDB"),
    rojo: (product?.image ?? "").replace("6FCF97", "EB5757"),
  };

  useEffect(() => {
    if (product) {
      trackEvent("view_product", { id: product.id, name: product.name });
    }
  }, [product]);

  const handlePersonalizar = () => {
    trackEvent("open_customizer", { id: product.id, name: product.name });
    setShowModal(true);
  };

  const handleComprar = () => {
    trackEvent("click_comprar", { id: product.id, name: product.name });
    alert("¡Producto agregado al carrito!");
  };

  const handleVerImagen = () => {
    trackEvent("click_ver_imagen", { id: product.id, name: product.name });
    window.open(product.image, "_blank");
  };

  return (
    <main className="pt-28 min-h-screen bg-gradient-to-b from-[#181D22] via-[#232B33] to-[#181D22] flex flex-col items-center px-4">
      {/* Modal de personalización */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-[#232B33] rounded-xl p-8 shadow-lg border border-[#6FCF97]/30 w-full max-w-md relative">
            <button
              className="absolute top-2 right-4 text-white text-2xl hover:text-[#6FCF97]"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-[#6FCF97] mb-4 text-center">
              Personaliza tu {product.name}
            </h2>
            <div className="flex flex-col items-center gap-4">
              <Image
                src={colorImages[color]}
                alt={product.name}
                width={220}
                height={220}
                className="rounded-lg border-2 border-[#6FCF97] shadow mb-2"
                style={{ objectFit: "cover" }}
              />
              <label className="w-full text-white font-semibold">
                Tu nombre o texto
                <input
                  type="text"
                  className="mt-1 w-full rounded px-3 py-2 bg-[#181D22] border border-[#6FCF97]/40 text-white focus:outline-none focus:border-[#6FCF97]"
                  maxLength={20}
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Ej: Camila, Para mamá, etc."
                />
              </label>
              <div className="w-full">
                <span className="text-white font-semibold">Color:</span>
                <div className="flex gap-3 mt-2">
                  <button
                    className={`w-8 h-8 rounded-full border-2 ${
                      color === "verde" ? "border-[#6FCF97]" : "border-gray-400"
                    }`}
                    style={{ background: "#6FCF97" }}
                    onClick={() => setColor("verde")}
                    aria-label="Verde"
                  />
                  <button
                    className={`w-8 h-8 rounded-full border-2 ${
                      color === "azul" ? "border-[#2D9CDB]" : "border-gray-400"
                    }`}
                    style={{ background: "#2D9CDB" }}
                    onClick={() => setColor("azul")}
                    aria-label="Azul"
                  />
                  <button
                    className={`w-8 h-8 rounded-full border-2 ${
                      color === "rojo" ? "border-[#EB5757]" : "border-gray-400"
                    }`}
                    style={{ background: "#EB5757" }}
                    onClick={() => setColor("rojo")}
                    aria-label="Rojo"
                  />
                </div>
              </div>
              <button
                className="mt-6 bg-[#6FCF97] text-[#22292F] px-8 py-2 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide"
                onClick={() => {
                  trackEvent("intent_click", {
                    id: product.id,
                    name: product.name,
                    personalized: true,
                    color,
                    customName,
                  });
                  setShowModal(false);
                }}
              >
                Lo quiero
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-3xl bg-[#232B33] rounded-xl shadow-lg border border-[#6FCF97]/30 p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg border-2 border-[#6FCF97] shadow mb-4 md:mb-0 cursor-pointer hover:scale-105 transition"
            onClick={handleVerImagen}
            style={{ objectFit: "cover" }}
          />
          <button
            className="text-[#6FCF97] underline text-sm mt-2 hover:text-white transition"
            onClick={handleVerImagen}
          >
            Ver imagen en grande
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#6FCF97] mb-4 text-center md:text-left drop-shadow-lg">
            {product.name}
          </h1>
          <p className="text-white mb-6 text-lg text-center md:text-left">
            {product.description}
          </p>
          {product.customizable ? (
            <button
              className="bg-[#6FCF97] text-[#22292F] px-8 py-3 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide"
              onClick={handlePersonalizar}
            >
              Personalizar producto
            </button>
          ) : (
            <button
              className="bg-[#6FCF97] text-[#22292F] px-8 py-3 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide cursor-pointer"
              onClick={handleComprar}
            >
              Comprar ahora
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

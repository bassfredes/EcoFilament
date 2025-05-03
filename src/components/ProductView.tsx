"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import Toast from "@/components/Toast";

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
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
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
    setToastMsg(`¡Gracias por mostrar tu interés en ${product.name}!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 6000);
  };

  const handleVerImagen = () => {
    trackEvent("click_ver_imagen", { id: product.id, name: product.name });
    window.open(product.image, "_blank");
  };

  return (
    <main className="pt-28 min-h-screen bg-gradient-to-b from-[#181D22] via-[#232B33] to-[#181D22] flex flex-col items-center px-2 sm:px-4">
      <Toast show={showToast} message={toastMsg} onClose={() => setShowToast(false)} />
      {/* Modal de personalización */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#232B33]/90 rounded-2xl p-8 shadow-2xl border border-[#6FCF97]/40 w-full max-w-md relative flex flex-col items-center">
            <button
              className="absolute top-2 right-4 text-white text-2xl hover:text-[#6FCF97]"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <h2 className="text-2xl font-extrabold text-[#6FCF97] mb-4 text-center tracking-wide">
              Personaliza tu {product.name}
            </h2>
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="bg-[#181D22] rounded-xl p-4 border-2 border-[#6FCF97]/30 shadow mb-2 flex items-center justify-center">
                <Image
                  src={colorImages[color]}
                  alt={product.name}
                  width={180}
                  height={180}
                  className="rounded-lg shadow-lg object-contain"
                />
              </div>
              <label className="w-full text-white font-semibold text-left">
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
                <div className="flex gap-3 mt-2 justify-center">
                  <button
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      color === "verde"
                        ? "border-[#6FCF97] scale-110"
                        : "border-gray-400"
                    }`}
                    style={{ background: "#6FCF97" }}
                    onClick={() => setColor("verde")}
                    aria-label="Verde"
                  />
                  <button
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      color === "azul"
                        ? "border-[#2D9CDB] scale-110"
                        : "border-gray-400"
                    }`}
                    style={{ background: "#2D9CDB" }}
                    onClick={() => setColor("azul")}
                    aria-label="Azul"
                  />
                  <button
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      color === "rojo"
                        ? "border-[#EB5757] scale-110"
                        : "border-gray-400"
                    }`}
                    style={{ background: "#EB5757" }}
                    onClick={() => setColor("rojo")}
                    aria-label="Rojo"
                  />
                </div>
              </div>
              <button
                className="mt-6 bg-[#6FCF97] text-[#22292F] px-8 py-2 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide w-full"
                onClick={() => {
                  trackEvent("intent_click", {
                    id: product.id,
                    name: product.name,
                    personalized: true,
                    color,
                    customName,
                  });
                  setShowModal(false);
                  setToastMsg(`¡Gracias por mostrar tu interés en ${product.name} personalizado!`);
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 6000);
                }}
              >
                Lo quiero
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-[1120px] bg-[#232B33]/80 rounded-3xl shadow-2xl border border-[#6FCF97]/30 p-0 md:p-10 flex flex-col md:flex-row gap-10 items-center backdrop-blur-md mt-6">
        <div className="flex flex-col items-center w-full md:w-auto md:pr-6">
          <div className="bg-[#181D22] rounded-2xl p-4 border-2 border-[#6FCF97]/30 shadow-lg flex items-center justify-center mb-4">
            <Image
              src={product.image}
              alt={product.name}
              width={360}
              height={360}
              className="rounded-xl border-2 border-[#6FCF97] shadow-xl object-contain bg-white"
              onClick={handleVerImagen}
              style={{ cursor: "zoom-in" }}
            />
          </div>
          <button
            className="text-[#6FCF97] underline text-sm mt-2 hover:text-white transition"
            onClick={handleVerImagen}
          >
            Ver imagen en grande
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#6FCF97] mb-2 text-center md:text-left drop-shadow-lg">
            {product.name}
          </h1>
          {product.customizable && (
            <span className="inline-block bg-[#6FCF97]/20 text-[#6FCF97] font-semibold text-xs px-3 py-1 rounded-full mb-2 uppercase tracking-widest">
              Personalizable
            </span>
          )}
          <p className="text-white mb-6 text-lg text-center md:text-left">
            {product.description}
          </p>
          <div className="flex flex-col gap-4 w-full mt-2">
            {product.customizable ? (
              <button
                className="bg-[#6FCF97] text-[#22292F] px-8 py-3 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide w-full flex items-center justify-center gap-2"
                onClick={handlePersonalizar}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.94l-4.243 1.415 1.415-4.243a4 4 0 01.94-1.414z"
                  />
                </svg>
                Personalizar producto
              </button>
            ) : (
              <button
                className="bg-[#6FCF97] text-[#22292F] px-8 py-3 rounded-full font-bold shadow hover:bg-[#219150] hover:text-white transition border-2 border-[#219150] text-lg tracking-wide w-full flex items-center justify-center gap-2 cursor-pointer"
                onClick={handleComprar}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13V6a1 1 0 011-1h5m-6 8h.01"
                  />
                </svg>
                Comprar ahora
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

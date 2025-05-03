import { products } from "@/lib/products";
import ProductView from "@/components/ProductView";
import React from "react";

export default function ProductPage({ params }: { params: { id: string } } | { params: Promise<{ id: string }> }) {
  const actualParams = params instanceof Promise ? React.use(params) : params;
  const product = products.find((p) => p.id === actualParams.id);
  if (!product) return <div>Producto no encontrado</div>;
  return <ProductView product={product} />;
}
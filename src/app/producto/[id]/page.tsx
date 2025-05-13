import { products } from "@/lib/products";
import ProductView from "@/components/ProductView";
import React from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id);
  if (!product) return <div>Product not found</div>;
  return <ProductView product={product} />;
}
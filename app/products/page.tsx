"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await res.json();

      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
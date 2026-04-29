 import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 75 },
    { name: "Headphones", price: 200 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <p className="mb-6 text-gray-600">
        This page will show products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
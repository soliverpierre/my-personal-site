type Props = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mt-1">${price}</p>
    </div>
  );
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Mini E-Commerce App</h1>
      <p className="mt-2">Built with Next.js + AWS Amplify</p>

      <a href="/products" className="mt-4 text-blue-500 underline">
        View Products
      </a>
    </main>
  );
}
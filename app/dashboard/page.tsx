"use client";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Total Products</h2>
          <p className="text-2xl font-bold">24</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Orders</h2>
          <p className="text-2xl font-bold">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500 text-sm">Users</h2>
          <p className="text-2xl font-bold">3</p>
        </div>

      </div>

  
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <p className="text-gray-600 text-sm">
          Your dashboard is now ready for real API data and analytics.
        </p>
      </div>
    </div>
  );
}
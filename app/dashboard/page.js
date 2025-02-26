export default function Dashboard() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Active Agents</h2>
            <div className="text-3xl font-bold text-blue-600">0</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Total Requests</h2>
            <div className="text-3xl font-bold text-green-600">0</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Success Rate</h2>
            <div className="text-3xl font-bold text-purple-600">0%</div>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
          <div className="text-gray-600">No recent activity</div>
        </div>
      </div>
    </main>
  );
}

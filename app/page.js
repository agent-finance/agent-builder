'use client';

import { useState } from 'react';

/**
 * Stat Card Component
 * @param {{ title: string, value: string|number, color: string }} props
 * @returns {JSX.Element}
 */
function StatCard({ title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className={`text-3xl font-bold text-${color}-600 mt-2`}>{value}</p>
    </div>
  );
}

/**
 * Agent Card Component
 * @param {{ name: string, description: string, status: 'active'|'inactive'|'error' }} props
 * @returns {JSX.Element}
 */
function AgentCard({ name, description, status }) {
  const statusColors = {
    active: 'green',
    inactive: 'gray',
    error: 'red',
  };
  
  const statusColor = statusColors[status] || 'gray';
  
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-xl" aria-hidden="true">🤖</span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 bg-${statusColor}-100 text-${statusColor}-800 rounded-full text-sm`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <button 
            className="p-2 text-gray-400 hover:text-gray-600"
            aria-label={`Options for ${name}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Home Page Component
 * @returns {JSX.Element}
 */
export default function Home() {
  const [agents, setAgents] = useState([
    { id: 1, name: 'Finance Assistant', description: 'Handles financial analysis and reporting', status: 'active' },
    { id: 2, name: 'Customer Support', description: 'Manages customer inquiries and support tickets', status: 'inactive' },
    { id: 3, name: 'Data Analyzer', description: 'Processes and analyzes large datasets', status: 'active' },
  ]);

  const stats = {
    activeAgents: agents.filter(agent => agent.status === 'active').length,
    totalTasks: 24,
    successRate: '95%',
  };

  const handleCreateAgent = () => {
    // Implementation for creating a new agent would go here
    console.log('Creating new agent...');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">AI Agent Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleCreateAgent}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create New Agent
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Active Agents" value={stats.activeAgents} color="blue" />
          <StatCard title="Total Tasks" value={stats.totalTasks} color="green" />
          <StatCard title="Success Rate" value={stats.successRate} color="purple" />
        </div>

        {/* Agents List */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Your Agents</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {agents.length > 0 ? (
              agents.map(agent => (
                <AgentCard 
                  key={agent.id}
                  name={agent.name}
                  description={agent.description}
                  status={agent.status}
                />
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                No agents found. Create your first agent to get started.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

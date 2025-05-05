import React, { useState } from 'react';
import { ArrowLeft, Play, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SimulationResult {
  earnings: number[];
  risk: string;
  apy: number;
  gas: number;
}

const SimulationPanel: React.FC = () => {
  const [input, setInput] = useState({
    asset: 'ETH',
    amount: 1,
    protocol: 'lido'
  });

  const [isSimulating, setIsSimulating] = useState(false);
  const [results, setResults] = useState<SimulationResult | null>(null);

  const protocols = [
    { id: 'lido', name: 'Lido', apy: 5.2 },
    { id: 'rocketpool', name: 'RocketPool', apy: 4.8 },
    { id: 'aave', name: 'Aave', apy: 4.2 }
  ];

  const assets = ['ETH', 'USDC', 'USDT', 'DAI'];

  const runSimulation = () => {
    setIsSimulating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const monthlyRate = (protocols.find(p => p.id === input.protocol)?.apy || 5) / 12 / 100;
      const earnings = Array.from({ length: 12 }, (_, i) => 
        input.amount * monthlyRate * (i + 1) * input.amount * 1000
      );

      setResults({
        earnings,
        risk: 'Low',
        apy: protocols.find(p => p.id === input.protocol)?.apy || 5,
        gas: 0.005
      });
      
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Simulation Parameters</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Asset
                </label>
                <select
                  value={input.asset}
                  onChange={(e) => setInput({ ...input, asset: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {assets.map(asset => (
                    <option key={asset} value={asset}>{asset}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={input.amount}
                  onChange={(e) => setInput({ ...input, amount: parseFloat(e.target.value) })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="0"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Protocol
                </label>
                <select
                  value={input.protocol}
                  onChange={(e) => setInput({ ...input, protocol: e.target.value })}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {protocols.map(protocol => (
                    <option key={protocol.id} value={protocol.id}>
                      {protocol.name} ({protocol.apy}% APY)
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Play className="h-4 w-4" />
                <span>{isSimulating ? 'Simulating...' : 'Run Simulation'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Simulation Results</h2>
            
            {results ? (
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400">Expected APY</div>
                    <div className="text-2xl font-bold text-white">{results.apy}%</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400">Risk Level</div>
                    <div className="text-2xl font-bold text-green-400">{results.risk}</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400">Gas Cost</div>
                    <div className="text-2xl font-bold text-white">${results.gas}</div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Projected Earnings (12 Months)</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={results.earnings.map((value, month) => ({ month: month + 1, value }))}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1F2937',
                            border: '1px solid #374151',
                            borderRadius: '0.5rem'
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#6366f1"
                          fillOpacity={1}
                          fill="url(#colorValue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4 flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-yellow-500 font-medium">Simulation Notice</h4>
                    <p className="text-yellow-200/80 text-sm">
                      This simulation uses historical data and current market conditions. Actual results may vary based on market volatility and other factors.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[400px] flex items-center justify-center text-slate-400">
                Configure parameters and run simulation to see results
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationPanel;
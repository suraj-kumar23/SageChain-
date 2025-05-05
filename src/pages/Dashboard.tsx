import React, { useState, useEffect } from 'react';
import { ArrowLeft, Wallet, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PortfolioData {
  timestamp: number;
  value: number;
}

const mockData = Array.from({ length: 30 }, (_, i) => ({
  timestamp: Date.now() - (29 - i) * 24 * 60 * 60 * 1000,
  value: 10000 + Math.random() * 5000
}));

const Dashboard: React.FC = () => {
  const [portfolioValue, setPortfolioValue] = useState(12345.67);
  const [portfolioChange, setPortfolioChange] = useState(2.5);
  const [chartData, setChartData] = useState<PortfolioData[]>(mockData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = portfolioValue + (Math.random() - 0.5) * 100;
      const change = ((newValue - portfolioValue) / portfolioValue) * 100;
      
      setPortfolioValue(newValue);
      setPortfolioChange(change);
      
      setChartData(prev => [
        ...prev.slice(1),
        { timestamp: Date.now(), value: newValue }
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [portfolioValue]);

  const strategies = [
    {
      name: 'Lido stETH',
      apy: 5.2,
      risk: 'Low',
      value: 5000,
      change: 1.2
    },
    {
      name: 'Aave USDC',
      apy: 4.8,
      risk: 'Low',
      value: 3000,
      change: -0.5
    },
    {
      name: 'Curve 3pool',
      apy: 4.2,
      risk: 'Low',
      value: 4345.67,
      change: 0.8
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Portfolio Value</h3>
              <DollarSign className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              ${portfolioValue.toFixed(2)}
            </div>
            <div className={`flex items-center ${portfolioChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              <TrendingUp className="h-4 w-4 mr-1" />
              {portfolioChange >= 0 ? '+' : ''}{portfolioChange.toFixed(2)}%
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Active Strategies</h3>
              <TrendingUp className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-slate-400">Across 2 protocols</div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Risk Level</h3>
              <AlertTriangle className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Low</div>
            <div className="text-slate-400">Diversified portfolio</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-6">Portfolio Performance</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="timestamp"
                    tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString()}
                    stroke="#9CA3AF"
                  />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem'
                    }}
                    labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
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

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-6">Active Strategies</h3>
            <div className="space-y-4">
              {strategies.map((strategy, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">{strategy.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs ${
                      strategy.risk === 'Low' ? 'bg-green-900/30 text-green-400' :
                      strategy.risk === 'Medium' ? 'bg-yellow-900/30 text-yellow-400' :
                      'bg-red-900/30 text-red-400'
                    }`}>
                      {strategy.risk} Risk
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-400">Value</div>
                      <div className="text-white font-medium">${strategy.value.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">APY</div>
                      <div className="text-white font-medium">{strategy.apy}%</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-slate-400">24h Change</div>
                      <div className={`font-medium ${
                        strategy.change >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {strategy.change >= 0 ? '+' : ''}{strategy.change}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
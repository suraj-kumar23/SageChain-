import React, { useState } from 'react';
import { ArrowLeft, Wallet, TrendingUp, DollarSign, AlertTriangle, PieChart as PieChartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const Portfolio: React.FC = () => {
  const [timeRange, setTimeRange] = useState('1M');

  const portfolioData = [
    { name: 'ETH', value: 5000, color: '#6366f1' },
    { name: 'USDC', value: 3000, color: '#3b82f6' },
    { name: 'LP Tokens', value: 2000, color: '#8b5cf6' },
    { name: 'Other', value: 1000, color: '#a855f7' }
  ];

  const positions = [
    {
      protocol: 'Lido',
      asset: 'stETH',
      amount: '2.5 ETH',
      value: '$5,000',
      apy: '5.2%',
      profit: '+$250',
      profitPercentage: '+5.2%'
    },
    {
      protocol: 'Aave',
      asset: 'USDC',
      amount: '3,000 USDC',
      value: '$3,000',
      apy: '4.8%',
      profit: '+$120',
      profitPercentage: '+4.1%'
    },
    {
      protocol: 'Uniswap',
      asset: 'ETH/USDC LP',
      amount: '1.2 LP',
      value: '$2,000',
      apy: '12.5%',
      profit: '+$180',
      profitPercentage: '+9.8%'
    }
  ];

  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0);

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
              <h3 className="text-lg font-semibold text-white">Total Value</h3>
              <DollarSign className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">
              ${totalValue.toLocaleString()}
            </div>
            <div className="text-green-400 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              +5.8%
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Active Positions</h3>
              <PieChartIcon className="h-5 w-5 text-indigo-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{positions.length}</div>
            <div className="text-slate-400">Across {positions.length} protocols</div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Earnings</h3>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$550</div>
            <div className="text-green-400">+6.2% this month</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-6">Asset Allocation</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {portfolioData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                  <span className="text-slate-300 text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Active Positions</h3>
              <div className="flex space-x-2">
                {['1D', '1W', '1M', '1Y'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    className={`px-3 py-1 rounded-lg text-sm ${
                      timeRange === range
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-slate-400 text-sm">Protocol</div>
                      <div className="text-white font-medium">{position.protocol}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Asset</div>
                      <div className="text-white font-medium">{position.asset}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Value</div>
                      <div className="text-white font-medium">{position.value}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">APY</div>
                      <div className="text-green-400 font-medium">{position.apy}</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-600 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-slate-400 text-sm">Amount</div>
                      <div className="text-white font-medium">{position.amount}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Profit</div>
                      <div className="text-green-400 font-medium">{position.profit}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm">Change</div>
                      <div className="text-green-400 font-medium">{position.profitPercentage}</div>
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

export default Portfolio;
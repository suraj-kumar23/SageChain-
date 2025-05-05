import React from 'react';

const RoadmapSection: React.FC = () => {
  const phases = [
    {
      name: 'Phase 1',
      title: 'MVP Launch',
      quarter: 'Q3 2025',
      items: [
        'Basic strategies (staking, swapping) on testnet',
        'Natural language processing for simple queries',
        'Integration with major Ethereum DeFi protocols',
        'Simple risk assessment algorithms',
        'Basic portfolio dashboard'
      ],
      active: true
    },
    {
      name: 'Phase 2',
      title: 'Privacy & Multi-chain',
      quarter: 'Q4 2025',
      items: [
        'ZK privacy implementation',
        'Multi-chain support (Arbitrum, Pharos)',
        'DAO governance tools',
        'Advanced strategy optimization',
        'Enhanced simulation engine'
      ],
      active: false
    },
    {
      name: 'Phase 3',
      title: 'Expansion',
      quarter: 'Q1 2026',
      items: [
        'Real-world assets (RWAFi) integration',
        'Voice command support',
        'Institutional SDK',
        'Advanced cross-chain yield optimization',
        'Mobile application launch'
      ],
      active: false
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Roadmap</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our journey to revolutionize DeFi accessibility and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className={`relative border border-slate-700 rounded-xl overflow-hidden ${phase.active ? 'bg-gradient-to-b from-indigo-900/20 to-slate-800/80' : 'bg-slate-800/50'}`}
            >
              {phase.active && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-sm font-bold">
                  Current
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold text-indigo-400">{phase.name}</span>
                  <span className="text-sm bg-slate-700 rounded-full px-3 py-1 text-slate-300">{phase.quarter}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className={`mt-1.5 w-2 h-2 rounded-full ${phase.active ? 'bg-indigo-500' : 'bg-slate-600'} mr-3 flex-shrink-0`}></div>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span className="mr-2">View detailed roadmap on Github</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
import React from 'react';

const TechnologySection: React.FC = () => {
  const techStacks = [
    {
      name: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      items: ['React', 'TailwindCSS', 'Socket.io', 'WalletConnect']
    },
    {
      name: 'Backend',
      color: 'from-purple-500 to-indigo-500',
      items: ['Node.js', 'Fastify', 'Redis', 'The Graph', 'Chainlink']
    },
    {
      name: 'AI',
      color: 'from-green-500 to-teal-500',
      items: ['GPT-4 Turbo', 'LangChain', 'DeFiLlama API']
    },
    {
      name: 'Blockchain',
      color: 'from-yellow-500 to-amber-500',
      items: ['Solidity (ERC-4337)', 'Arbitrum Nova', 'Flashbots SUAVE']
    },
    {
      name: 'Privacy',
      color: 'from-red-500 to-rose-500',
      items: ['Semaphore', 'SnarkJS', 'Aztec Connect']
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technology Stack</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built with cutting-edge technologies across AI, blockchain, and privacy layers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techStacks.map((stack, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className={`bg-gradient-to-r ${stack.color} p-4`}>
                <h3 className="text-xl font-bold text-white text-center">{stack.name}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {stack.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex} 
                      className="text-slate-300 flex items-center"
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${stack.color} mr-2`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Architecture Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {['User Interaction', 'AI Processing', 'Simulation', 'Execution', 'Privacy'].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-900 rounded-lg p-4 text-center h-full">
                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">
                      {index + 1}
                    </div>
                    <h4 className="font-bold text-white mb-2">{step}</h4>
                    <p className="text-sm text-slate-400">
                      {index === 0 && 'Chat interface sends queries to AI backend'}
                      {index === 1 && 'Classifies intent, fetches DeFi data, generates strategies'}
                      {index === 2 && 'Tests strategies on forked chains, calculates risks/gas'}
                      {index === 3 && 'User approves, Smart Wallet executes via Account Abstraction'}
                      {index === 4 && 'ZK proofs anonymize transactions, recorded on-chain'}
                    </p>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
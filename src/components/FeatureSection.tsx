import React from 'react';
import { Brain, Shield, Zap, Layers, BarChart4, Globe } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      title: 'AI Chat Interface',
      description: 'Interact with DeFi using natural language queries like "Swap ETH for stablecoins if the market drops" or "Find the safest yield for my USDC."',
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-blue-500" />,
      title: 'Real-Time Strategy Engine',
      description: 'Track optimal APYs across 50+ protocols and receive risk-adjusted suggestions sorted by safety level.',
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Smart Wallet Execution',
      description: 'Execute complex strategies with one click using pre-audited contracts, with built-in gas optimization.',
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: 'ZK-Powered Privacy',
      description: 'Protect your identity and transactions with zero-knowledge proofs, ensuring complete privacy on the blockchain.',
    },
    {
      icon: <Layers className="h-8 w-8 text-teal-500" />,
      title: 'Simulation & Education',
      description: 'Preview outcomes before executing and receive plain-English explanations of complex DeFi concepts.',
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: 'Cross-Chain Support',
      description: 'Operate seamlessly across Ethereum, Arbitrum, Pharos, and Solana with multi-chain optimization.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Key Features</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            SageChain combines AI, blockchain, and privacy technology to simplify and enhance your DeFi experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
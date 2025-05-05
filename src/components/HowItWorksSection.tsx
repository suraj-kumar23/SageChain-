import React, { useEffect, useRef } from 'react';

const HowItWorksSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const steps = [
    {
      number: '01',
      title: 'Ask in plain English',
      description: 'Type a natural language query like "Grow my $1,000 ETH safely" and let SageChain understand your intent.',
      example: '"Grow my $1,000 ETH safely"',
    },
    {
      number: '02',
      title: 'Review AI suggestions',
      description: 'SageChain analyzes 50+ protocols and presents the best options sorted by risk level and expected returns.',
      example: 'Stake on Lido (5.1% APY) or lend on Aave (4.8% APY)',
    },
    {
      number: '03',
      title: 'Preview simulation',
      description: 'See exactly what will happen before execution, including gas costs, expected yields, and potential risks.',
      example: 'Lido: $1.20 gas, 30-day yield = $12.75',
    },
    {
      number: '04',
      title: 'One-click execution',
      description: 'Deploy your strategy with a single click. SageChain handles all the complex interactions securely.',
      example: 'Smart Wallet executes the transaction',
    },
    {
      number: '05',
      title: 'Monitor performance',
      description: 'Track your portfolio\'s performance in real-time with automatic alerts for significant changes.',
      example: 'Live dashboard updates APY and rewards',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = entry.target.querySelector('.timeline');
            if (timeline) {
              timeline.classList.add('progress-active');
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From natural language to on-chain execution in seconds. No coding required.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline bar */}
          <div className="absolute left-0 md:left-24 top-0 bottom-0 w-1 bg-slate-800">
            <div className="timeline w-1 bg-gradient-to-b from-indigo-500 to-blue-500 h-0 transition-all duration-1000 ease-out"></div>
          </div>

          {/* Steps */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="md:ml-36 md:pl-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-24 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-800 border-4 border-slate-950 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  </div>

                  <div className="bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-xl p-8 md:ml-4">
                    <div className="flex flex-col md:flex-row md:items-center mb-4">
                      <span className="text-3xl font-bold text-indigo-500 mb-2 md:mb-0 md:mr-4">{step.number}</span>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-slate-300 mb-6">{step.description}</p>
                    
                    <div className="bg-slate-900 rounded-lg p-4 border-l-4 border-indigo-500">
                      <p className="text-indigo-300 italic">"{step.example}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
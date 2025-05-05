import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', x.toString());
      containerRef.current.style.setProperty('--mouse-y', y.toString());
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden bg-slate-900 min-h-screen flex items-center justify-center"
      style={{ 
        '--mouse-x': '0.5', 
        '--mouse-y': '0.5'
      } as React.CSSProperties}
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute -inset-[10%] rounded-full blur-3xl bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 opacity-30 transition-opacity duration-500 ease-in-out"
          style={{ 
            transform: 'translate(calc(var(--mouse-x) * 10%), calc(var(--mouse-y) * 10%))',
            width: '80%',
            height: '80%',
            top: '10%',
            left: '10%'
          }}
        ></div>
      </div>
      
      {/* Animated particles/nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-container"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-md rounded-full mb-6 border border-slate-700">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-slate-300 text-sm font-medium">Now in closed Beta — Join waitlist</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block">Your AI-Powered</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-600">
              DeFi Copilot
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl">
            Navigate complex DeFi protocols with natural language, execute optimal strategies, 
            and protect your privacy — all with the power of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#" 
              className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all shadow-lg shadow-indigo-600/20"
            >
              Join Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#how-it-works" 
              className="flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all border border-slate-700"
            >
              See How It Works
              <Zap className="ml-2 h-5 w-5 text-yellow-500" />
            </a>
          </div>
          
          {/* Demo preview */}
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800">
            <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto bg-slate-700 rounded-full px-4 py-1 text-xs text-slate-300">
                    sagechain.finance
                  </div>
                </div>
                
                <div className="flex-1 flex">
                  <div className="w-2/3 pr-4 border-r border-slate-700">
                    <div className="h-full bg-slate-900 rounded-lg p-4 text-left">
                      <div className="flex items-start mb-6">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-xs font-bold text-white">AI</span>
                        </div>
                        <div className="bg-slate-800 rounded-lg rounded-tl-none p-3 text-slate-300 text-sm">
                          How can I help you optimize your DeFi strategy today?
                        </div>
                      </div>
                      
                      <div className="flex items-start mb-6">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-xs font-bold text-white">U</span>
                        </div>
                        <div className="bg-slate-800 rounded-lg rounded-tl-none p-3 text-slate-300 text-sm">
                          I want to earn 8% APY with my USDC, but with low risk.
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-xs font-bold text-white">AI</span>
                        </div>
                        <div className="bg-slate-800 rounded-lg rounded-tl-none p-3 text-slate-300 text-sm">
                          <p className="mb-2">Based on current market conditions, here are your best options:</p>
                          <div className="space-y-2">
                            <div className="bg-slate-700 p-2 rounded flex justify-between items-center">
                              <span>Aave USDC Lending</span>
                              <span className="text-green-400">5.2% APY (Low Risk)</span>
                            </div>
                            <div className="bg-slate-700 p-2 rounded flex justify-between items-center">
                              <span>Lido stETH-USDC LP</span>
                              <span className="text-yellow-400">7.8% APY (Medium Risk)</span>
                            </div>
                            <div className="bg-slate-700 p-2 rounded flex justify-between items-center">
                              <span>Curve 3pool</span>
                              <span className="text-green-400">4.6% APY (Low Risk)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/3 pl-4">
                    <div className="h-full bg-slate-900 rounded-lg p-4 flex flex-col">
                      <h3 className="text-white text-sm font-medium mb-3">Portfolio Overview</h3>
                      <div className="flex-1 flex flex-col space-y-3">
                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-xs text-slate-400 mb-1">Total Value</div>
                          <div className="text-white font-bold">$25,432.67</div>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-xs text-slate-400 mb-1">Current APY</div>
                          <div className="text-green-400 font-bold">4.3%</div>
                        </div>
                        <div className="bg-slate-800 rounded-lg p-3">
                          <div className="text-xs text-slate-400 mb-1">Risk Level</div>
                          <div className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded inline-block">LOW</div>
                        </div>
                        <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors">
                          Execute Strategy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
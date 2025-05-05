import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-900 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform your DeFi experience?
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Join our exclusive beta program and be among the first to experience AI-powered DeFi.
            </p>
          </div>
          
          <div className="bg-slate-900/30 backdrop-blur-md rounded-xl border border-indigo-500/30 p-8">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-indigo-300" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full pl-10 pr-3 py-4 border border-indigo-500/30 rounded-lg bg-slate-900/50 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-600 text-white text-base font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
            
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-indigo-200 text-sm">
              <div className="flex items-center mb-4 sm:mb-0">
                <svg className="h-5 w-5 mr-2 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Your data is securely protected</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-900/20 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <p className="text-indigo-200">DeFi Protocols Supported</p>
            </div>
            <div className="bg-slate-900/20 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">$0</div>
              <p className="text-indigo-200">Gas Fees During Beta</p>
            </div>
            <div className="bg-slate-900/20 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-indigo-200">AI-Powered Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
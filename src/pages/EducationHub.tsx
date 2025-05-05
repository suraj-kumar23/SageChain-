import React, { useState } from 'react';
import { ArrowLeft, Book, GraduationCap, FileText, Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tutorials = [
    {
      title: 'DeFi Basics',
      description: 'Learn the fundamentals of decentralized finance',
      duration: '15 min',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg'
    },
    {
      title: 'Staking Fundamentals',
      description: 'Understanding proof of stake and earning rewards',
      duration: '20 min',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg'
    },
    {
      title: 'Liquidity Pools',
      description: 'How to provide liquidity and earn fees',
      duration: '25 min',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/8370836/pexels-photo-8370836.jpeg'
    }
  ];

  const articles = [
    {
      title: 'Understanding APY vs APR',
      description: 'Learn the difference between annual percentage yield and rate',
      readTime: '5 min',
      category: 'Finance'
    },
    {
      title: 'Impermanent Loss Explained',
      description: 'Deep dive into the risks of providing liquidity',
      readTime: '8 min',
      category: 'Risk Management'
    },
    {
      title: 'Gas Optimization Tips',
      description: 'Save money on transaction fees',
      readTime: '6 min',
      category: 'Technical'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Education Hub</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master DeFi with our comprehensive learning resources, from beginner guides to advanced strategies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search tutorials, articles, and terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <Book className="h-8 w-8 text-indigo-400" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">15+ Tutorials</h3>
                <p className="text-slate-400">Step-by-step guides</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-blue-400" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">30+ Articles</h3>
                <p className="text-slate-400">In-depth explanations</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-purple-400" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">5 Learning Paths</h3>
                <p className="text-slate-400">Structured courses</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Tutorials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tutorial.title}</h3>
                  <p className="text-slate-300 mb-4">{tutorial.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">{tutorial.duration}</span>
                    <span className="bg-indigo-900/50 text-indigo-300 text-sm px-3 py-1 rounded-full">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Articles */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                    <p className="text-slate-300 mb-3">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{article.readTime} read</span>
                      <span className="bg-slate-700 text-slate-300 text-sm px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationHub;
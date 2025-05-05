import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import RoadmapSection from './components/RoadmapSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ChatInterface from './pages/ChatInterface';
import Dashboard from './pages/Dashboard';
import SimulationPanel from './pages/SimulationPanel';
import Settings from './pages/Settings';
import Portfolio from './pages/Portfolio';
import EducationHub from './pages/EducationHub';
import NotificationsPage from './pages/NotificationsPage';
import './styles/animations.css';

function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <RoadmapSection />
      <CtaSection />
    </>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'SageChain - AI-Powered DeFi Copilot';
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simulation" element={<SimulationPanel />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/education" element={<EducationHub />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
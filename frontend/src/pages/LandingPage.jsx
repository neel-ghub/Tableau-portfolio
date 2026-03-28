import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ExternalLink, ArrowRight, TrendingUp, Database, BarChart3, Sparkles } from 'lucide-react';
import { personalInfo, projectOverview } from '../data/portfolioData';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1B2E] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1457A8] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0D9488] rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#E8A020] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(#E8A020 1px, transparent 1px), linear-gradient(90deg, #E8A020 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E8A020] to-[#0D9488] rounded-lg flex items-center justify-center">
              <BarChart3 size={24} />
            </div>
            <div>
              <div className="font-bold text-lg">Neelkumar Prajapati</div>
              <div className="text-xs text-gray-400">Business Analyst</div>
            </div>
          </div>
          
          <a 
            href={personalInfo.dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Live Dashboard</span>
          </a>
        </header>

        {/* Hero Section */}
        <div className={`flex-1 flex items-center justify-center px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl w-full">
            <div className="text-center mb-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8A020]/20 border border-[#E8A020]/30 rounded-full mb-6">
                <Sparkles size={16} className="text-[#E8A020]" />
                <span className="text-sm text-[#E8A020]">Tableau Analytics Specialist</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Data-Driven Insights
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#E8A020] via-[#0D9488] to-[#1457A8] bg-clip-text text-transparent">
                  That Drive Results
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transforming complex sales data into actionable insights through advanced Tableau visualizations, 
                LOD expressions, and interactive analytics
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center mb-16">
                <Button 
                  onClick={() => navigate('/portfolio')}
                  className="bg-gradient-to-r from-[#E8A020] to-[#0D9488] hover:from-[#0D9488] hover:to-[#1457A8] text-white px-8 py-6 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2"
                >
                  View Portfolio
                  <ArrowRight size={20} />
                </Button>
                
                <Button 
                  onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-6 text-lg font-bold rounded-xl transform hover:scale-105 transition-all"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1457A8] to-[#0D9488] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-400 text-sm mb-4">
                  13 calculated fields using LOD expressions, table calculations, and dynamic parameters
                </p>
                <div className="text-[#E8A020] font-bold text-2xl">4 Years</div>
                <div className="text-gray-500 text-sm">of data analyzed</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8A020] to-[#0D9488] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Dashboards</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Dynamic visualizations with action filters and real-time data exploration
                </p>
                <div className="text-[#E8A020] font-bold text-2xl">6 Worksheets</div>
                <div className="text-gray-500 text-sm">interconnected insights</div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105 cursor-pointer group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#1457A8] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Impact</h3>
                <p className="text-gray-400 text-sm mb-4">
                  YoY growth analysis across 15 sub-categories and 4 regional markets
                </p>
                <div className="text-[#E8A020] font-bold text-2xl">+18.88%</div>
                <div className="text-gray-500 text-sm">profit growth identified</div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="bg-gradient-to-r from-[#1457A8]/20 to-[#0D9488]/20 border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#E8A020] mb-1">6</div>
                  <div className="text-sm text-gray-400">Worksheets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#E8A020] mb-1">13</div>
                  <div className="text-sm text-gray-400">Calc Fields</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#E8A020] mb-1">2</div>
                  <div className="text-sm text-gray-400">Parameters</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#E8A020] mb-1">4</div>
                  <div className="text-sm text-gray-400">Regions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#E8A020] mb-1">15</div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 py-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2024 Neelkumar Prajapati. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-[#E8A020] transition-colors">
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="hover:text-[#E8A020] transition-colors">
                {personalInfo.phone}
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8A020] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

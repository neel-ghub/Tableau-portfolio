import React from 'react';
import { personalInfo, projectOverview } from '../data/portfolioData';
import { Mail, Phone, Linkedin, ExternalLink, BarChart3, TrendingUp, PieChart } from 'lucide-react';

const PortfolioCover = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2E] text-white flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#1457A8] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0D9488] rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#E8A020] rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E8A020] via-[#E8A020] to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8A020] via-[#E8A020] to-transparent"></div>
      
      {/* Floating icons */}
      <div className="absolute top-32 right-24 text-[#E8A020] opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>
        <BarChart3 size={48} />
      </div>
      <div className="absolute bottom-32 left-24 text-[#1457A8] opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <TrendingUp size={48} />
      </div>
      <div className="absolute top-1/2 right-32 text-[#0D9488] opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
        <PieChart size={48} />
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-16 relative z-10">
        {/* Name with animated underline */}
        <div className="mb-8">
          <h1 className="text-7xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text" style={{ fontFamily: 'Georgia, serif' }}>
            {personalInfo.name}
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-[#E8A020] to-transparent mt-4"></div>
        </div>
        
        {/* Title with glow effect */}
        <div className="text-3xl font-bold mb-6 relative" style={{ fontFamily: 'Georgia, serif' }}>
          <span className="relative z-10 bg-gradient-to-r from-[#E8A020] to-[#0D9488] bg-clip-text text-transparent">
            Tableau Sales Dashboard Portfolio
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8A020] to-[#0D9488] blur-xl opacity-30"></div>
        </div>
        
        {/* Tagline */}
        <p className="text-xl text-gray-300 mb-12 max-w-2xl text-center italic">
          Transforming data into actionable insights through advanced analytics
        </p>
        
        {/* Live Dashboard Link with glow */}
        <div className="mb-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1457A8] to-[#0D9488] rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <a 
            href={personalInfo.dashboardUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 bg-gradient-to-r from-[#1457A8] to-[#0D9488] hover:from-[#0D9488] hover:to-[#1457A8] px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            <ExternalLink size={24} />
            View Live Tableau Dashboard
          </a>
        </div>
        
        {/* Contact Info with icons */}
        <div className="flex flex-wrap gap-8 justify-center mb-12">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-[#1457A8]/20 rounded-full group-hover:bg-[#E8A020]/30 transition-colors">
              <Mail size={20} className="text-[#E8A020]" />
            </div>
            <span className="group-hover:text-[#E8A020] transition-colors">{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-[#1457A8]/20 rounded-full group-hover:bg-[#E8A020]/30 transition-colors">
              <Phone size={20} className="text-[#E8A020]" />
            </div>
            <span className="group-hover:text-[#E8A020] transition-colors">{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="p-2 bg-[#1457A8]/20 rounded-full group-hover:bg-[#E8A020]/30 transition-colors">
              <Linkedin size={20} className="text-[#E8A020]" />
            </div>
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8A020] transition-colors">
              {personalInfo.linkedin}
            </a>
          </div>
        </div>
        
        {/* Tags with stagger animation */}
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
          {projectOverview.tools.map((tool, index) => (
            <span 
              key={index} 
              className="px-5 py-2 bg-gradient-to-r from-[#1457A8] to-[#0D9488] rounded-full text-sm font-medium hover:from-[#0D9488] hover:to-[#1457A8] transition-all transform hover:scale-110 cursor-default shadow-lg"
              style={{ 
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s backwards`
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-8 py-6 border-t border-gray-700/50 flex justify-between items-center relative z-10">
        <span className="text-sm text-gray-400">{personalInfo.name} — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-400">Page 1</span>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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

export default PortfolioCover;
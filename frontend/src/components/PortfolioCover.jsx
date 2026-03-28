import React from 'react';
import { personalInfo, projectOverview } from '../data/portfolioData';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const PortfolioCover = () => {
  return (
    <div className="min-h-screen bg-[#0D1B2E] text-white flex flex-col relative overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#E8A020]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-[#E8A020]"></div>
      
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-16">
        {/* Name */}
        <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          {personalInfo.name}
        </h1>
        
        {/* Title */}
        <div className="text-2xl text-[#E8A020] mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Sales Dashboard Portfolio
        </div>
        
        {/* Education */}
        <p className="text-lg text-gray-300 mb-12 max-w-2xl text-center">
          {personalInfo.education}
        </p>
        
        {/* Live Dashboard Link */}
        <div className="bg-[#1457A8] hover:bg-[#0D9488] transition-colors px-8 py-4 rounded-lg mb-12">
          <a 
            href={personalInfo.dashboardUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg font-semibold"
          >
            <ExternalLink size={24} />
            View Live Tableau Dashboard
          </a>
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-8 justify-center mb-12">
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-[#E8A020]" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-[#E8A020]" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={20} className="text-[#E8A020]" />
            <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8A020] transition-colors">
              {personalInfo.linkedin}
            </a>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
          {projectOverview.tools.map((tool, index) => (
            <span 
              key={index} 
              className="px-4 py-2 bg-[#1457A8] rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-8 py-6 border-t border-gray-700 flex justify-between items-center">
        <span className="text-sm text-gray-400">{personalInfo.name} — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-400">Page 1</span>
      </div>
    </div>
  );
};

export default PortfolioCover;
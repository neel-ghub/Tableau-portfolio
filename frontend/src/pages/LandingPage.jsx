import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2E] via-[#1457A8] to-[#0D1B2E] text-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {personalInfo.name}
          </h1>
          <p className="text-2xl text-[#E8A020] mb-4">Tableau Sales Dashboard Portfolio</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interactive analytics portfolio showcasing advanced Tableau techniques, 
            LOD expressions, and data visualization best practices
          </p>
        </div>

        {/* Main CTA */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20 hover:border-[#E8A020] transition-all hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={32} className="text-[#E8A020]" />
              <h2 className="text-2xl font-bold">View Portfolio</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Explore my complete 8-page portfolio showcasing Sales Dashboard analytics 
              with interactive visualizations and technical insights.
            </p>
            <Button 
              onClick={() => navigate('/portfolio')}
              className="w-full bg-[#E8A020] hover:bg-[#0D9488] text-white font-bold py-3 text-lg"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Live Dashboard Link */}
        <div className="text-center">
          <a 
            href={personalInfo.dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0D9488] to-[#1457A8] hover:from-[#1457A8] hover:to-[#E8A020] px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105"
          >
            <ExternalLink size={24} />
            View Live Tableau Dashboard
          </a>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-[#E8A020] mb-2">6</div>
            <div className="text-sm text-gray-300">Worksheets</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#E8A020] mb-2">13</div>
            <div className="text-sm text-gray-300">Calc Fields</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#E8A020] mb-2">2</div>
            <div className="text-sm text-gray-300">Parameters</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#E8A020] mb-2">4</div>
            <div className="text-sm text-gray-300">Years</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#E8A020] mb-2">15</div>
            <div className="text-sm text-gray-300">Sub-Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

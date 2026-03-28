import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { FileText, Layout, ExternalLink } from 'lucide-react';
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

        {/* Layout Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Single Page Layout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20 hover:border-[#E8A020] transition-all hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={32} className="text-[#E8A020]" />
              <h2 className="text-2xl font-bold">Scrollable View</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Single-page scrollable layout presenting all 8 pages in a continuous flow. 
              Perfect for quick browsing and overview.
            </p>
            <Button 
              onClick={() => navigate('/single')}
              className="w-full bg-[#E8A020] hover:bg-[#0D9488] text-white font-bold py-3"
            >
              View Scrollable Layout
            </Button>
          </div>

          {/* Multi Page Layout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20 hover:border-[#E8A020] transition-all hover:transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <Layout size={32} className="text-[#E8A020]" />
              <h2 className="text-2xl font-bold">Page-by-Page</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Navigate through individual pages with prev/next controls. 
              Ideal for focused reading and presentation mode.
            </p>
            <Button 
              onClick={() => navigate('/multi?page=1')}
              className="w-full bg-[#1457A8] hover:bg-[#0D9488] text-white font-bold py-3"
            >
              View Page Navigation
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

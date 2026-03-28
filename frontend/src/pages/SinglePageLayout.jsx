import React, { useRef } from 'react';
import PortfolioCover from '../components/PortfolioCover';
import ProjectOverview from '../components/ProjectOverview';
import { SalesKPI, ProfitKPI, SubCategoryAnalysis, HeatmapPage, YOYTrends } from '../components/ChartPages';
import TechnicalSummary from '../components/TechnicalSummary';
import { Button } from '../components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

const SinglePageLayout = () => {
  const contentRef = useRef();

  const handleDownloadPDF = async () => {
    await generatePDF(contentRef.current, 'Neelkumar_Prajapati_Tableau_Portfolio.pdf');
  };

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Floating Download Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          onClick={handleDownloadPDF}
          className="bg-[#E8A020] hover:bg-[#1457A8] text-white shadow-lg flex items-center gap-2"
        >
          <Download size={20} />
          Download PDF
        </Button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="bg-[#1457A8] hover:bg-[#E8A020] text-white rounded-full p-3 shadow-lg transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Portfolio Content */}
      <div ref={contentRef}>
        <PortfolioCover />
        <ProjectOverview />
        <SalesKPI />
        <ProfitKPI />
        <SubCategoryAnalysis />
        <HeatmapPage />
        <YOYTrends />
        <TechnicalSummary />
      </div>
    </div>
  );
};

export default SinglePageLayout;

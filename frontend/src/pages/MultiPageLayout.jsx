import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PortfolioCover from '../components/PortfolioCover';
import ProjectOverview from '../components/ProjectOverview';
import { SalesKPI, ProfitKPI, SubCategoryAnalysis, HeatmapPage, YOYTrends } from '../components/ChartPages';
import TechnicalSummary from '../components/TechnicalSummary';
import { Button } from '../components/ui/button';
import { Download, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';

const pages = [
  { id: 1, title: 'Cover', component: PortfolioCover },
  { id: 2, title: 'Overview', component: ProjectOverview },
  { id: 3, title: 'Sales KPI', component: SalesKPI },
  { id: 4, title: 'Profit KPI', component: ProfitKPI },
  { id: 5, title: 'Sub-Categories', component: SubCategoryAnalysis },
  { id: 6, title: 'Heatmap', component: HeatmapPage },
  { id: 7, title: 'YOY Trends', component: YOYTrends },
  { id: 8, title: 'Technical', component: TechnicalSummary }
];

const MultiPageLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const contentRef = useRef();
  
  const pageParam = new URLSearchParams(location.search).get('page');
  const currentPageIndex = pageParam ? parseInt(pageParam) - 1 : 0;
  const CurrentPageComponent = pages[currentPageIndex].component;

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: 'Neelkumar_Prajapati_Tableau_Portfolio',
  });

  const goToPage = (pageNumber) => {
    navigate(`/multi?page=${pageNumber}`);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      goToPage(currentPageIndex + 2);
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      goToPage(currentPageIndex);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0D1B2E] text-white shadow-lg z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu size={24} className="text-[#E8A020]" />
            <span className="font-bold text-lg">Tableau Portfolio</span>
          </div>
          
          {/* Page Navigation Dots */}
          <div className="hidden md:flex items-center gap-2">
            {pages.map((page, index) => (
              <button
                key={page.id}
                onClick={() => goToPage(page.id)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentPageIndex 
                    ? 'bg-[#E8A020] w-8' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                title={page.title}
              />
            ))}
          </div>

          <Button 
            onClick={handlePrint}
            className="bg-[#E8A020] hover:bg-[#1457A8] text-white flex items-center gap-2"
            size="sm"
          >
            <Download size={16} />
            PDF
          </Button>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16" ref={contentRef}>
        <CurrentPageComponent />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0D1B2E] text-white shadow-lg z-[9999]">
        <div className="px-6 py-4 flex items-center justify-between">
          <Button
            onClick={prevPage}
            disabled={currentPageIndex === 0}
            className="bg-[#1457A8] hover:bg-[#E8A020] disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Previous
          </Button>

          <div className="text-center">
            <div className="text-sm text-gray-400">Page {currentPageIndex + 1} of {pages.length}</div>
            <div className="font-bold">{pages[currentPageIndex].title}</div>
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPageIndex === pages.length - 1}
            className="bg-[#1457A8] hover:bg-[#E8A020] disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Next
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>

      {/* Mobile Page Selector */}
      <div className="md:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-[#0D1B2E] rounded-full px-4 py-2 shadow-lg">
        <select 
          value={currentPageIndex + 1}
          onChange={(e) => goToPage(parseInt(e.target.value))}
          className="bg-transparent text-white font-bold outline-none"
        >
          {pages.map((page) => (
            <option key={page.id} value={page.id} className="bg-[#0D1B2E]">
              {page.id}. {page.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MultiPageLayout;

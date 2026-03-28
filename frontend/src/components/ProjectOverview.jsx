import React from 'react';
import { projectOverview } from '../data/portfolioData';
import { TrendingUp, DollarSign, Calendar, Package } from 'lucide-react';

const ProjectOverview = () => {
  const getIcon = (type) => {
    switch(type) {
      case 'sales': return <DollarSign size={32} />;
      case 'profit': return <TrendingUp size={32} />;
      case 'peak': return <Calendar size={32} />;
      case 'category': return <Package size={32} />;
      default: return <DollarSign size={32} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-white text-[#0D1B2E] flex flex-col">
      <div className="flex-1 px-12 py-16">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>
          Project Overview
        </h1>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projectOverview.kpis.map((kpi, index) => (
            <div key={index} className="bg-[#0D1B2E] text-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div className="text-[#E8A020]">
                  {getIcon(kpi.type)}
                </div>
                {kpi.change && (
                  <span className="text-[#0D9488] font-bold text-lg">{kpi.change}</span>
                )}
              </div>
              <div className="text-3xl font-bold mb-2">{kpi.value}</div>
              <div className="text-gray-300 text-sm">{kpi.label}</div>
              {kpi.subtext && (
                <div className="text-[#E8A020] text-sm mt-1">{kpi.subtext}</div>
              )}
            </div>
          ))}
        </div>
        
        {/* Business Problem */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Business Problem
          </h2>
          <p className="text-lg leading-relaxed">
            The organization needed a comprehensive sales analytics solution to track performance across multiple dimensions. 
            With 4 years of historical data spanning 4 regions, 3 product categories, and 15 sub-categories, stakeholders 
            required interactive visualizations to identify trends, compare year-over-year performance, and make data-driven decisions.
          </p>
        </div>
        
        {/* What Was Built */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Solution
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            {projectOverview.description}
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>6 interactive worksheets with dynamic filtering</li>
            <li>13 calculated fields using advanced Tableau functions</li>
            <li>2 interactive parameters for year and category selection</li>
            <li>Dashboard action filters for cross-worksheet interactivity</li>
            <li>Custom color palettes for enhanced data visualization</li>
          </ul>
        </div>
        
        {/* Key Design Decisions */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Key Design Decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-t-4 border-[#1457A8] p-4">
              <h3 className="font-bold text-xl mb-2">LOD Expressions</h3>
              <p>Used Level of Detail calculations to create aggregates immune to filter context, ensuring consistent KPI calculations.</p>
            </div>
            <div className="border-t-4 border-[#E8A020] p-4">
              <h3 className="font-bold text-xl mb-2">Table Calculations</h3>
              <p>Implemented WINDOW_MAX/MIN and LOOKUP functions for dynamic period-over-period comparisons.</p>
            </div>
            <div className="border-t-4 border-[#0D9488] p-4">
              <h3 className="font-bold text-xl mb-2">Dashboard Actions</h3>
              <p>Created interactive filters linking heatmap selections to regional performance charts for seamless exploration.</p>
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {projectOverview.tools.map((tool, index) => (
              <span 
                key={index} 
                className="px-6 py-3 bg-[#1457A8] text-white rounded-lg font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-12 py-6 border-t border-gray-300 flex justify-between items-center">
        <span className="text-sm text-gray-600">Neelkumar Prajapati — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-600">Page 2</span>
      </div>
    </div>
  );
};

export default ProjectOverview;
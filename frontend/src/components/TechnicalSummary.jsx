import React from 'react';
import { calculatedFields, parameters, advancedTechniques, stats } from '../data/portfolioData';
import { Code, Settings, TrendingUp } from 'lucide-react';

const TechnicalSummary = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2E] flex flex-col">
      <div className="flex-1 px-12 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Technical Summary
        </h1>
        
        {/* Stats Banner */}
        <div className="bg-[#0D1B2E] text-white p-8 rounded-lg mb-12">
          <div className="flex flex-wrap justify-around gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E8A020] mb-2">{stats.worksheets}</div>
              <div className="text-sm">Worksheets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E8A020] mb-2">{stats.calculatedFields}</div>
              <div className="text-sm">Calculated Fields</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E8A020] mb-2">{stats.parameters}</div>
              <div className="text-sm">Parameters</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E8A020] mb-2">{stats.years}</div>
              <div className="text-sm">Years of Data</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E8A020] mb-2">{stats.subCategories}</div>
              <div className="text-sm">Sub-Categories</div>
            </div>
          </div>
        </div>
        
        {/* Parameters */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings size={32} className="text-[#1457A8]" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Interactive Parameters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parameters.map((param, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#1457A8]">
                <h3 className="font-bold text-xl mb-2">{param.name}</h3>
                <div className="flex gap-4 mb-2">
                  <span className="text-sm font-semibold text-[#E8A020]">Type:</span>
                  <span className="text-sm">{param.type}</span>
                </div>
                <div className="flex gap-4 mb-2">
                  <span className="text-sm font-semibold text-[#E8A020]">Values:</span>
                  <span className="text-sm">{param.values}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-sm font-semibold text-[#E8A020]">Purpose:</span>
                  <span className="text-sm">{param.purpose}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Calculated Fields */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Code size={32} className="text-[#0D9488]" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Calculated Fields ({calculatedFields.length})</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              {calculatedFields.map((field, index) => (
                <div key={index} className="border-b border-gray-300 pb-4 last:border-b-0">
                  <div className="font-bold text-lg mb-2 text-[#1457A8]">{field.name}</div>
                  <code className="text-sm bg-[#0D1B2E] text-white px-3 py-2 rounded block overflow-x-auto">
                    {field.formula}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Advanced Techniques */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={32} className="text-[#E8A020]" />
            <h2 className="text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>Advanced Techniques</h2>
          </div>
          <div className="bg-[#0D1B2E] text-white p-8 rounded-lg">
            <ul className="space-y-3">
              {advancedTechniques.map((technique, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#E8A020] font-bold mt-1">•</span>
                  <span className="leading-relaxed">{technique}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="px-12 py-6 border-t border-gray-300 flex justify-between items-center">
        <span className="text-sm text-gray-600">Neelkumar Prajapati — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-600">Page 8</span>
      </div>
    </div>
  );
};

export default TechnicalSummary;
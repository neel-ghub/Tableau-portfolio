import React from 'react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { salesKPIData, profitKPIData, subCategoryData, heatmapData, yoyData } from '../data/portfolioData';

// Sales KPI Page
export const SalesKPI = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2E] flex flex-col">
      <div className="flex-1 px-12 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          {salesKPIData.title}
        </h1>
        
        {/* Chart */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={salesKPIData.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Sales ($K)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="cy" stroke="#1457A8" fill="#1457A8" fillOpacity={0.6} name="Current Year" />
              <Area type="monotone" dataKey="py" stroke="#6B7280" fill="#6B7280" fillOpacity={0.4} name="Previous Year" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {salesKPIData.insights.map((insight, index) => {
            const colors = ['#1457A8', '#E8A020', '#0D9488'];
            return (
              <div key={index} className={`border-t-4 p-6 bg-gray-50 rounded-lg`} style={{ borderColor: colors[index] }}>
                <h3 className="font-bold text-2xl mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold mb-2" style={{ color: colors[index] }}>{insight.value}</div>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Technical Explanation */}
        <div className="bg-[#0D1B2E] text-white p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>Technical Implementation</h3>
          <p className="leading-relaxed">{salesKPIData.technical}</p>
        </div>
      </div>
      
      <div className="px-12 py-6 border-t border-gray-300 flex justify-between items-center">
        <span className="text-sm text-gray-600">Neelkumar Prajapati — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-600">Page 3</span>
      </div>
    </div>
  );
};

// Profit KPI Page
export const ProfitKPI = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2E] flex flex-col">
      <div className="flex-1 px-12 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          {profitKPIData.title}
        </h1>
        
        {/* Chart */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={profitKPIData.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Profit ($K)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="cy" stroke="#0D9488" fill="#0D9488" fillOpacity={0.6} name="Current Year" />
              <Area type="monotone" dataKey="py" stroke="#6B7280" fill="#6B7280" fillOpacity={0.4} name="Previous Year" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {profitKPIData.insights.map((insight, index) => {
            const colors = ['#1457A8', '#E8A020', '#0D9488'];
            return (
              <div key={index} className={`border-t-4 p-6 bg-gray-50 rounded-lg`} style={{ borderColor: colors[index] }}>
                <h3 className="font-bold text-2xl mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold mb-2" style={{ color: colors[index] }}>{insight.value}</div>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Technical Explanation */}
        <div className="bg-[#0D1B2E] text-white p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>Technical Implementation</h3>
          <p className="leading-relaxed">{profitKPIData.technical}</p>
        </div>
      </div>
      
      <div className="px-12 py-6 border-t border-gray-300 flex justify-between items-center">
        <span className="text-sm text-gray-600">Neelkumar Prajapati — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-600">Page 4</span>
      </div>
    </div>
  );
};

// Sub-Category Analysis Page
export const SubCategoryAnalysis = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2E] flex flex-col">
      <div className="flex-1 px-12 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          {subCategoryData.title}
        </h1>
        
        {/* Chart */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={subCategoryData.chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" width={180} />
              <Tooltip />
              <Legend />
              <Bar dataKey="py" fill="#6B7280" name="Previous Year" />
              <Bar dataKey="cy" fill="#1457A8" name="Current Year" />
              <Bar dataKey="profit" fill="#E8A020" name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {subCategoryData.insights.map((insight, index) => {
            const colors = ['#1457A8', '#E8A020', '#0D9488'];
            return (
              <div key={index} className={`border-t-4 p-6 bg-gray-50 rounded-lg`} style={{ borderColor: colors[index] }}>
                <h3 className="font-bold text-2xl mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold mb-2" style={{ color: colors[index] }}>{insight.value}</div>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Technical Explanation */}
        <div className="bg-[#0D1B2E] text-white p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>Technical Implementation</h3>
          <p className="leading-relaxed">{subCategoryData.technical}</p>
        </div>
      </div>
      
      <div className="px-12 py-6 border-t border-gray-300 flex justify-between items-center">
        <span className="text-sm text-gray-600">Neelkumar Prajapati — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-600">Page 5</span>
      </div>
    </div>
  );
};

// Heatmap Page
export const HeatmapPage = () => {
  const [selectedDay, setSelectedDay] = React.useState({ month: 6, day: 0 }); // July (index 6), Day 1 (index 0)
  
  // Generate regional data based on selected day
  const getRegionalData = (monthIndex, dayIndex) => {
    // Base values that change based on day and month
    const seed = (monthIndex + 1) * 100 + (dayIndex + 1) * 10;
    return [
      { region: "Central", value: Math.floor(3000 + seed * 2.5 + Math.random() * 1000) },
      { region: "East", value: Math.floor(500 + seed * 0.3 + Math.random() * 500) },
      { region: "South", value: Math.floor(4000 + seed * 2 + Math.random() * 1200) },
      { region: "West", value: Math.floor(2000 + seed * 1.5 + Math.random() * 800) }
    ];
  };
  
  const currentRegionalData = getRegionalData(selectedDay.month, selectedDay.day);
  
  return (
    <div className="min-h-screen bg-white text-[#0D1B2E] flex flex-col">
      <div className="flex-1 px-12 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          {heatmapData.title}
        </h1>
        
        {/* Heatmap */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <div className="mb-4 text-center">
            <p className="text-lg font-semibold text-[#1457A8]">
              Hover over any day to see regional sales breakdown
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Currently showing: {heatmapData.months[selectedDay.month]} - Day {selectedDay.day + 1}
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="flex gap-1 mb-2">
                <div className="w-16"></div>
                {heatmapData.months.map((month, idx) => (
                  <div key={idx} className="w-20 text-center font-bold text-sm">{month}</div>
                ))}
              </div>
              {heatmapData.data.map((row, rowIdx) => (
                <div key={rowIdx} className="flex gap-1 mb-1">
                  <div className="w-16 flex items-center justify-center font-bold text-sm">Day {rowIdx + 1}</div>
                  {row.map((value, colIdx) => {
                    const intensity = Math.min(value / 150, 1);
                    const bgColor = `rgba(251, 130, 0, ${intensity * 0.8 + 0.2})`;
                    const isSelected = selectedDay.month === colIdx && selectedDay.day === rowIdx;
                    return (
                      <div 
                        key={colIdx} 
                        className="w-20 h-12 flex items-center justify-center font-bold text-sm rounded cursor-pointer transition-all"
                        style={{ 
                          backgroundColor: bgColor, 
                          color: intensity > 0.5 ? 'white' : '#0D1B2E',
                          transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                          boxShadow: isSelected ? '0 4px 12px rgba(20, 87, 168, 0.4)' : 'none',
                          border: isSelected ? '2px solid #1457A8' : '2px solid transparent'
                        }}
                        onMouseEnter={() => setSelectedDay({ month: colIdx, day: rowIdx })}
                      >
                        {value}K
                      </div>
                    );
                  })}</div>
              ))}
            </div>
          </div>
          
          {/* Regional Data */}
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-4">
              Sales by Region - {heatmapData.months[selectedDay.month]} Day {selectedDay.day + 1}
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={currentRegionalData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="region" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill="#1457A8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {heatmapData.insights.map((insight, index) => {
            const colors = ['#1457A8', '#E8A020', '#0D9488'];
            return (
              <div key={index} className={`border-t-4 p-6 bg-gray-50 rounded-lg`} style={{ borderColor: colors[index] }}>
                <h3 className="font-bold text-2xl mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold mb-2" style={{ color: colors[index] }}>{insight.value}</div>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Technical Explanation */}
        <div className="bg-[#0D1B2E] text-white p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>Technical Implementation</h3>
          <p className="leading-relaxed">{heatmapData.technical}</p>
        </div>
      </div>
      
      <div className="px-12 py-6 border-t border-gray-300 flex justify-between items-center">
        <span className="text-sm text-gray-600">Neelkumar Prajapati — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-600">Page 6</span>
      </div>
    </div>
  );
};

// YOY Trends Page
export const YOYTrends = () => {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2E] flex flex-col">
      <div className="flex-1 px-12 py-16">
        <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          {yoyData.title}
        </h1>
        
        {/* Chart */}
        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={yoyData.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'YOY Growth %', angle: -90, position: 'insideLeft' }} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
              <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
              <Legend />
              <Area type="monotone" dataKey="officeSupplies" stroke="#1457A8" fill="#1457A8" fillOpacity={0.5} name="Office Supplies" />
              <Area type="monotone" dataKey="furniture" stroke="#E8A020" fill="#E8A020" fillOpacity={0.5} name="Furniture" />
              <Area type="monotone" dataKey="technology" stroke="#0D9488" fill="#0D9488" fillOpacity={0.5} name="Technology" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {yoyData.insights.map((insight, index) => {
            const colors = ['#1457A8', '#E8A020', '#0D9488'];
            return (
              <div key={index} className={`border-t-4 p-6 bg-gray-50 rounded-lg`} style={{ borderColor: colors[index] }}>
                <h3 className="font-bold text-2xl mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold mb-2" style={{ color: colors[index] }}>{insight.value}</div>
                <p className="text-gray-700">{insight.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Technical Explanation */}
        <div className="bg-[#0D1B2E] text-white p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Georgia, serif' }}>Technical Implementation</h3>
          <p className="leading-relaxed">{yoyData.technical}</p>
        </div>
      </div>
      
      <div className="px-12 py-6 border-t border-gray-300 flex justify-between items-center">
        <span className="text-sm text-gray-600">Neelkumar Prajapati — Tableau Analytics Portfolio</span>
        <span className="text-sm text-gray-600">Page 7</span>
      </div>
    </div>
  );
};
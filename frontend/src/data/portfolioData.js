// Mock data for Neelkumar Prajapati's Tableau Sales Dashboard Portfolio

export const personalInfo = {
  name: "Neelkumar Prajapati",
  email: "neelatwork4@gmail.com",
  phone: "+1 (551) 301-4403",
  linkedin: "linkedin.com/in/neelprajapati74",
  education: "MBA in Business Analytics, Saint Peter's University, Jersey City NJ, GPA 3.70",
  dashboardUrl: "https://public.tableau.com/app/profile/prajapatineel740/viz/SalesDashboard_17356814214190/Story1"
};

export const projectOverview = {
  title: "Tableau Sales Dashboard",
  description: "Interactive sales analytics dashboard built with Tableau Desktop, analyzing retail sales data from 2010-2013 across 4 regions and 15 product sub-categories.",
  kpis: [
    { label: "2013 Total Sales", value: "$2,231,000", change: "+14.72%", type: "sales" },
    { label: "2013 Total Profit", value: "$354,000", change: "+18.88%", type: "profit" },
    { label: "Peak Month", value: "$520K", subtext: "November", type: "peak" },
    { label: "Top Sub-Category", value: "$439,888", subtext: "Office Machines", type: "category" }
  ],
  tools: ["Tableau Desktop", "KPI Dashboards", "LOD Expressions", "YOY Analysis", "Interactive Parameters"]
};

export const salesKPIData = {
  title: "Sales KPI Analysis",
  chartData: [
    { month: "Jan", cy: 95, py: 88 },
    { month: "Feb", cy: 125, py: 115 },
    { month: "Mar", cy: 165, py: 148 },
    { month: "Apr", cy: 185, py: 172 },
    { month: "May", cy: 205, py: 188 },
    { month: "Jun", cy: 195, py: 178 },
    { month: "Jul", cy: 215, py: 192 },
    { month: "Aug", cy: 225, py: 202 },
    { month: "Sep", cy: 245, py: 215 },
    { month: "Oct", cy: 285, py: 248 },
    { month: "Nov", cy: 520, py: 445 },
    { month: "Dec", cy: 271, py: 254 }
  ],
  insights: [
    { title: "Peak Month", value: "$520K", description: "November recorded highest sales with significant holiday season spike" },
    { title: "YOY Growth", value: "14.72%", description: "Consistent year-over-year growth across all quarters" },
    { title: "Low Season", value: "$95K", description: "January shows typical post-holiday decline" }
  ],
  technical: "Uses cy sales and py sales calculated fields filtered by Select Year parameter. KPI card shows total using LOD fixed expression. Min/max labels use WINDOW_MAX and WINDOW_MIN table calculations for dynamic annotations."
};

export const profitKPIData = {
  title: "Profit KPI Analysis",
  chartData: [
    { month: "Jan", cy: 7, py: 5 },
    { month: "Feb", cy: 15, py: 12 },
    { month: "Mar", cy: 22, py: 18 },
    { month: "Apr", cy: 28, py: 23 },
    { month: "May", cy: 35, py: 28 },
    { month: "Jun", cy: 32, py: 26 },
    { month: "Jul", cy: 38, py: 30 },
    { month: "Aug", cy: 42, py: 34 },
    { month: "Sep", cy: 48, py: 38 },
    { month: "Oct", cy: 58, py: 45 },
    { month: "Nov", cy: 109, py: 88 },
    { month: "Dec", cy: 48, py: 42 }
  ],
  insights: [
    { title: "Profit Peak", value: "$109K", description: "November generated highest profit margin" },
    { title: "Lowest Profit", value: "$7K", description: "January recorded minimum profitability" },
    { title: "Growth Rate", value: "18.88%", description: "Profit grew faster than sales, indicating improved margins" }
  ],
  technical: "Uses cy profit and py profit calculated fields. % diff profit = (SUM(cy profit) - SUM(py profit)) / SUM(py profit). MOM P field uses LOOKUP(SUM(Profit), -1) for month-over-month comparison."
};

export const subCategoryData = {
  title: "Sub-Category Analysis",
  chartData: [
    { category: "Office Machines", py: 385, cy: 440, profit: 95 },
    { category: "Chairs & Chairmats", py: 298, cy: 325, profit: 65 },
    { category: "Telephones", py: 245, cy: 285, profit: 58 },
    { category: "Tables", py: 188, cy: 215, profit: 42 },
    { category: "Storage", py: 165, cy: 192, profit: 38 },
    { category: "Office Furnishings", py: 142, cy: 168, profit: 32 },
    { category: "Computer Peripherals", py: 125, cy: 148, profit: 28 },
    { category: "Binders & Accessories", py: 108, cy: 128, profit: 24 },
    { category: "Copiers & Fax", py: 95, cy: 115, profit: 22 },
    { category: "Appliances", py: 82, cy: 98, profit: 18 }
  ],
  insights: [
    { title: "Top Performer", value: "$439,888", description: "Office Machines led with highest CY sales" },
    { title: "Dual Perspective", value: "PY vs CY", description: "Visual comparison reveals growth patterns across categories" },
    { title: "Margin Risk", value: "Low Profit", description: "Some categories show high sales but low profit margins" }
  ],
  technical: "Horizontal dual bar chart with Product Sub-Category on rows. Three measures: py sales (grey), cy sales (cyan/blue), SUM(Profit) (amber/gold). Independent axes with interactive dropdowns for year, category, sub-category."
};

export const heatmapData = {
  title: "Profit Heatmap",
  data: [
    [12, 15, 18, 22, 28, 32, 35, 38, 42, 45, 48, 52],
    [8, 12, 15, 18, 24, 28, 32, 35, 38, 42, 45, 48],
    [15, 18, 22, 28, 32, 35, 42, 48, 52, 58, 65, 72],
    [10, 12, 18, 22, 25, 28, 32, 35, 38, 42, 48, 55],
    [18, 22, 28, 32, 38, 42, 48, 52, 58, 65, 75, 85],
    [12, 15, 18, 22, 28, 32, 35, 38, 42, 48, 55, 62],
    [8, 10, 12, 15, 18, 22, 25, 28, 32, 35, 42, 48],
    [15, 18, 22, 28, 35, 42, 48, 55, 62, 72, 85, 95],
    [12, 15, 18, 24, 28, 32, 38, 42, 48, 55, 65, 75],
    [10, 12, 15, 18, 22, 28, 32, 38, 42, 48, 58, 68],
    [22, 28, 35, 42, 52, 62, 75, 85, 95, 109, 125, 142],
    [18, 22, 28, 32, 38, 45, 52, 58, 65, 75, 88, 102]
  ],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  regionalData: [
    { region: "Central", value: 7597 },
    { region: "East", value: 337 },
    { region: "South", value: 8083 },
    { region: "West", value: 4430 }
  ],
  insights: [
    { title: "South Leads July", value: "8,083", description: "South region dominated July with highest units sold" },
    { title: "Loss Days Visible", value: "Red Cells", description: "Heatmap highlights days with negative profit" },
    { title: "Dashboard Action", value: "Interactive", description: "Clicking heatmap updates regional chart in real-time" }
  ],
  technical: "Square marks with DAY(Order Date) on rows, MONTH(Order Date) on columns. SUM(Profit) as color using custom orange sequential palette from #f1f1f1 to #fb8200. Dashboard action filter links to Sales by Region chart."
};

export const yoyData = {
  title: "Year-Over-Year Trends",
  chartData: [
    { month: "Jan", officeSupplies: 0.08, furniture: 0.05, technology: 0.12 },
    { month: "Feb", officeSupplies: 0.12, furniture: 0.08, technology: 0.18 },
    { month: "Mar", officeSupplies: 0.15, furniture: 0.12, technology: 0.22 },
    { month: "Apr", officeSupplies: 0.18, furniture: 0.14, technology: 0.28 },
    { month: "May", officeSupplies: 0.20, furniture: 0.16, technology: 0.32 },
    { month: "Jun", officeSupplies: 0.18, furniture: 0.10, technology: 0.35 },
    { month: "Jul", officeSupplies: 0.19, furniture: 0.09, technology: 0.38 },
    { month: "Aug", officeSupplies: 0.22, furniture: 0.15, technology: 0.42 },
    { month: "Sep", officeSupplies: 0.24, furniture: 0.18, technology: 0.48 },
    { month: "Oct", officeSupplies: 0.26, furniture: 0.22, technology: 0.58 },
    { month: "Nov", officeSupplies: 0.28, furniture: 0.25, technology: 0.85 },
    { month: "Dec", officeSupplies: 0.25, furniture: 0.20, technology: 0.72 }
  ],
  insights: [
    { title: "Technology Q4 Spike", value: "85%", description: "Technology category surpassed 80% benchmark in November" },
    { title: "Furniture Summer Dip", value: "9-10%", description: "Furniture showed decline during June-July period" },
    { title: "Office Supplies Stable", value: "18-28%", description: "Office Supplies maintained consistent growth year-round" }
  ],
  technical: "Area chart with 3 overlapping areas for Office Supplies, Furniture, Technology. YOY S calculated field = (SUM(cy sales) - SUM(py sales)) / SUM(py sales). Reference lines at 60% and 80% of window average. Category(Highlight) Boolean field dims non-selected categories."
};

export const calculatedFields = [
  { name: "cy sales", formula: "IF YEAR([Order Date]) = [Select Year] THEN [Sales] END" },
  { name: "py sales", formula: "IF YEAR([Order Date]) = [Select Year] - 1 THEN [Sales] END" },
  { name: "cy profit", formula: "IF YEAR([Order Date]) = [Select Year] THEN [Profit] END" },
  { name: "py profit", formula: "IF YEAR([Order Date]) = [Select Year] - 1 THEN [Profit] END" },
  { name: "% diff sales", formula: "(SUM([cy sales]) - SUM([py sales])) / SUM([py sales])" },
  { name: "% diff profit", formula: "(SUM([cy profit]) - SUM([py profit])) / SUM([py profit])" },
  { name: "YOY S", formula: "(SUM([cy sales]) - SUM([py sales])) / SUM([py sales])" },
  { name: "YOY P", formula: "(SUM([cy profit]) - SUM([py profit])) / SUM([py profit])" },
  { name: "MOM P", formula: "(SUM([Sales]) - LOOKUP(SUM([Profit]), -1)) / ABS(LOOKUP(SUM([Profit]), -1))" },
  { name: "min/max sales", formula: "WINDOW_MAX / WINDOW_MIN for dynamic annotations" },
  { name: "min/max profit", formula: "WINDOW_MAX / WINDOW_MIN on profit" },
  { name: "Category(Highlight)", formula: "[Product Category] = [Parameters].[Select Category]" },
  { name: "YEAR", formula: "YEAR([Order Date]) = [Parameters].[Select Year]" }
];

export const parameters = [
  { name: "Select Year", type: "Integer", values: "2010, 2011, 2012, 2013", purpose: "Drives all CY/PY calculations" },
  { name: "Select Category", type: "String", values: "Office Supplies, Furniture, Technology", purpose: "Drives highlight field" }
];

export const advancedTechniques = [
  "LOD (Level of Detail) Expressions — fixed aggregates immune to filter context",
  "WINDOW_MAX / WINDOW_MIN — table calculations for dynamic min/max labels",
  "LOOKUP() — table calculation for period-over-period comparison",
  "Dashboard Action Filters — click heatmap → updates regional chart",
  "Boolean highlight field — dims non-selected categories in YOY chart",
  "Custom color palette — ordered sequential orange (#f1f1f1 → #f5c593 → #f99831 → #fb8200)"
];

export const stats = {
  worksheets: 6,
  calculatedFields: 13,
  parameters: 2,
  years: 4,
  subCategories: 15
};
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementRef, fileName = 'portfolio.pdf') => {
  if (!elementRef) {
    console.error('No element reference provided');
    return;
  }

  try {
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                  background: rgba(13, 27, 46, 0.95); color: white; padding: 30px 50px; 
                  border-radius: 10px; z-index: 99999; font-size: 18px; font-weight: bold;
                  box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
        <div style="text-align: center;">
          <div style="margin-bottom: 15px;">Generating PDF...</div>
          <div style="color: #E8A020; font-size: 14px;">This may take a moment</div>
        </div>
      </div>
    `;
    document.body.appendChild(loadingDiv);

    // Get all page sections
    const pages = elementRef.querySelectorAll('.min-h-screen');
    
    if (pages.length === 0) {
      console.error('No pages found');
      document.body.removeChild(loadingDiv);
      return;
    }

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      
      // Scroll to the page to ensure it's rendered
      page.scrollIntoView({ behavior: 'instant', block: 'start' });
      await new Promise(resolve => setTimeout(resolve, 100));

      // Capture the page as canvas
      const canvas = await html2canvas(page, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1920,
        windowHeight: page.scrollHeight
      });

      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add new page if not first page
      if (i > 0) {
        pdf.addPage();
      }

      // Add image to PDF, fitting to page
      if (imgHeight <= pdfHeight) {
        // Image fits in one page
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        // Image needs to be scaled to fit
        const scaledHeight = pdfHeight;
        const scaledWidth = (canvas.width * pdfHeight) / canvas.height;
        const xOffset = (pdfWidth - scaledWidth) / 2;
        pdf.addImage(imgData, 'PNG', xOffset, 0, scaledWidth, scaledHeight);
      }
    }

    // Save the PDF
    pdf.save(fileName);

    // Remove loading indicator
    document.body.removeChild(loadingDiv);

    // Show success message
    const successDiv = document.createElement('div');
    successDiv.innerHTML = `
      <div style="position: fixed; top: 20px; right: 20px; 
                  background: #0D9488; color: white; padding: 15px 30px; 
                  border-radius: 8px; z-index: 99999; font-size: 16px; font-weight: bold;
                  box-shadow: 0 5px 20px rgba(0,0,0,0.3); animation: slideIn 0.3s ease-out;">
        ✓ PDF Downloaded Successfully!
      </div>
      <style>
        @keyframes slideIn {
          from { transform: translateX(400px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      </style>
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => {
      if (document.body.contains(successDiv)) {
        document.body.removeChild(successDiv);
      }
    }, 3000);

  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
};

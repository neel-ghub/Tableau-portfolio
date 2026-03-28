import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementRef, fileName = 'portfolio.pdf') => {
  if (!elementRef) {
    alert('Error: No content found to generate PDF');
    console.error('No element reference provided');
    return;
  }

  try {
    console.log('Starting PDF generation...');
    
    // Show loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'pdf-loading';
    loadingDiv.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                  background: rgba(13, 27, 46, 0.95); color: white; padding: 30px 50px; 
                  border-radius: 10px; z-index: 99999; font-size: 18px; font-weight: bold;
                  box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
        <div style="text-align: center;">
          <div style="margin-bottom: 15px;">Generating PDF...</div>
          <div style="color: #E8A020; font-size: 14px;">Please wait, this will take 10-15 seconds</div>
        </div>
      </div>
    `;
    document.body.appendChild(loadingDiv);

    // Get all page sections
    const pages = elementRef.querySelectorAll('.min-h-screen');
    
    if (pages.length === 0) {
      alert('Error: No pages found. Please try again.');
      console.error('No pages found');
      const loading = document.getElementById('pdf-loading');
      if (loading) document.body.removeChild(loading);
      return;
    }

    console.log(`Found ${pages.length} pages to convert`);

    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      
      console.log(`Processing page ${i + 1}/${pages.length}...`);
      
      // Scroll to the page to ensure it's rendered
      page.scrollIntoView({ behavior: 'instant', block: 'start' });
      await new Promise(resolve => setTimeout(resolve, 300));

      // Capture the page as canvas
      const canvas = await html2canvas(page, {
        scale: 1.5,
        useCORS: true,
        logging: true,
        backgroundColor: '#ffffff',
        windowWidth: 1920,
        windowHeight: page.scrollHeight,
        onclone: (clonedDoc) => {
          // Remove fixed elements that might cause issues
          const fixed = clonedDoc.querySelectorAll('[style*="fixed"]');
          fixed.forEach(el => el.style.position = 'absolute');
        }
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      // Add new page if not first page
      if (i > 0) {
        pdf.addPage();
      }

      // Add image to PDF
      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        const scaledHeight = pdfHeight;
        const scaledWidth = (canvas.width * pdfHeight) / canvas.height;
        const xOffset = (pdfWidth - scaledWidth) / 2;
        pdf.addImage(imgData, 'JPEG', Math.max(0, xOffset), 0, scaledWidth, scaledHeight);
      }
      
      console.log(`Page ${i + 1} added to PDF`);
    }

    console.log('Saving PDF...');
    
    // Save the PDF
    pdf.save(fileName);
    
    console.log('PDF saved successfully!');

    // Remove loading indicator
    const loading = document.getElementById('pdf-loading');
    if (loading) document.body.removeChild(loading);

    // Show success message
    const successDiv = document.createElement('div');
    successDiv.id = 'pdf-success';
    successDiv.innerHTML = `
      <div style="position: fixed; top: 20px; right: 20px; 
                  background: #0D9488; color: white; padding: 15px 30px; 
                  border-radius: 8px; z-index: 99999; font-size: 16px; font-weight: bold;
                  box-shadow: 0 5px 20px rgba(0,0,0,0.3);">
        ✓ PDF Downloaded! Check your Downloads folder
      </div>
    `;
    document.body.appendChild(successDiv);
    setTimeout(() => {
      const success = document.getElementById('pdf-success');
      if (success && document.body.contains(success)) {
        document.body.removeChild(success);
      }
    }, 5000);

    // Also alert the user
    setTimeout(() => {
      alert(`PDF downloaded successfully!\n\nFile name: ${fileName}\nLocation: Your browser's Downloads folder`);
    }, 500);

  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Remove loading if exists
    const loading = document.getElementById('pdf-loading');
    if (loading && document.body.contains(loading)) {
      document.body.removeChild(loading);
    }
    
    alert(`Error generating PDF: ${error.message}\n\nPlease check the browser console for details.`);
  }
};

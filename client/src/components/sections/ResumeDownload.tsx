import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { motion } from 'framer-motion';

/**
 * Component that handles generating and downloading a PDF resume
 */
const ResumeDownload = () => {
  const [loading, setLoading] = useState(false);

  const generateResume = async () => {
    try {
      setLoading(true);
      
      // Create a simplified version of the resume content with updated colors
      const resumeContent = `
        <div id="resume-print" style="padding: 40px; font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3b82f6; margin-bottom: 5px; font-size: 26px;">Sayed Mehedi Hasan</h1>
            <p style="color: #60a5fa; font-size: 18px; margin-bottom: 10px;">Accounting & Information Systems Specialist</p>
            <p>
              <span style="margin-right: 15px;"><i class="fas fa-phone-alt"></i> 01723310266</span>
              <span style="margin-right: 15px;"><i class="fas fa-envelope"></i> mehedi23ru@gmail.com</span>
            </p>
            <p>Village – Swarupdaha, Post – Poradaha, PS – Mirpur, District – Kushtia, Post Code: 7031</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #60a5fa; padding-bottom: 5px; font-size: 20px;">Career Objective</h2>
            <p style="line-height: 1.6;">
              I am seeking a challenging and dynamic role that allows me to utilize my potential, creativity, and skills to contribute innovatively while continuously enhancing my knowledge and serving my country to the best of my abilities.
            </p>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #60a5fa; padding-bottom: 5px; font-size: 20px;">Education</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f3f4f6;">
                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e5e7eb;">Degree</th>
                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e5e7eb;">Institution</th>
                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e5e7eb;">Year</th>
                <th style="padding: 8px; text-align: left; border-bottom: 1px solid #e5e7eb;">Result</th>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">M.B.A</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">Rajshahi University</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">2011</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">3.50</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">B.B.A (Hon's)</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">Rajshahi University</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">2010</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">3.46</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">HSC</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">Jessore Board</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">2005</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">4.50</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">SSC</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">Jessore Board</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">2003</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">3.06 / 5.00</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #60a5fa; padding-bottom: 5px; font-size: 20px;">Professional Experience</h2>
            
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 18px; margin-bottom: 5px; color: #3b82f6;">Lecturer – Accounting & Information Systems</h3>
              <p style="margin: 0; color: #60a5fa;">Kushtia Hazi Abul Hossain Institute & Technology (KHABIT)</p>
              <p style="margin: 0; font-style: italic; font-size: 14px;">1.5 years</p>
              <p style="margin-top: 5px;">Taught accounting and information systems courses to undergraduate students, prepared course materials, conducted assessments, and provided academic guidance.</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 18px; margin-bottom: 5px; color: #3b82f6;">Management Trainee – Accounts</h3>
              <p style="margin: 0; color: #60a5fa;">Marketing Research and Survey Department, PRAN-RFL Group</p>
              <p style="margin: 0; font-style: italic; font-size: 14px;">1 year</p>
              <p style="margin-top: 5px;">Assisted in financial reporting, budget preparation, and accounting operations. Participated in marketing research projects and data analysis.</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 18px; margin-bottom: 5px; color: #3b82f6;">Sales Representative</h3>
              <p style="margin: 0; color: #60a5fa;">PRAN-RFL Group</p>
              <p style="margin: 0; font-style: italic; font-size: 14px;">1 year</p>
              <p style="margin-top: 5px;">Managed client relationships, achieved sales targets, and represented the company's product line in the market. Conducted market research and competitor analysis.</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <h3 style="font-size: 18px; margin-bottom: 5px; color: #3b82f6;">Lecturer</h3>
              <p style="margin: 0; color: #60a5fa;">Swarupdaha Model Madrasa, Poradaha</p>
              <p style="margin: 0; font-style: italic; font-size: 14px;">3 years</p>
              <p style="margin-top: 5px;">Developed curriculum and taught various subjects. Mentored students and coordinated academic activities and events.</p>
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #60a5fa; padding-bottom: 5px; font-size: 20px;">Skills</h2>
            <div style="display: flex; flex-wrap: wrap;">
              <div style="flex: 0 0 50%; margin-bottom: 20px;">
                <h3 style="font-size: 16px; margin-bottom: 10px; color: #3b82f6;">Technical Skills</h3>
                <ul style="padding-left: 20px;">
                  <li>MS Word (90%)</li>
                  <li>MS Excel (85%)</li>
                  <li>MS PowerPoint (88%)</li>
                  <li>Hardware & Networking (75%)</li>
                  <li>Internet Browsing (95%)</li>
                </ul>
              </div>
              <div style="flex: 0 0 50%; margin-bottom: 20px;">
                <h3 style="font-size: 16px; margin-bottom: 10px; color: #3b82f6;">Language Skills</h3>
                <ul style="padding-left: 20px;">
                  <li>Bengali (Speaking, Writing, Reading, Listening)</li>
                  <li>English (Speaking, Writing, Reading, Listening)</li>
                </ul>
              </div>
            </div>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #3b82f6; border-bottom: 2px solid #60a5fa; padding-bottom: 5px; font-size: 20px;">References</h2>
            <div style="display: flex; flex-wrap: wrap;">
              <div style="flex: 0 0 50%; padding-right: 10px; margin-bottom: 15px;">
                <h3 style="font-size: 16px; margin-bottom: 5px; color: #3b82f6;">Dr. Mohammad Main Uddin</h3>
                <p style="margin: 0; color: #60a5fa;">Professor</p>
                <p style="margin: 0;">Department of Accounting & Information Systems</p>
                <p style="margin: 0;">University of Rajshahi, Rajshahi-6205</p>
                <p style="margin: 0;">+8801711227589</p>
              </div>
              <div style="flex: 0 0 50%; padding-left: 10px; margin-bottom: 15px;">
                <h3 style="font-size: 16px; margin-bottom: 5px; color: #3b82f6;">Dr. Md. Sayaduzzaman</h3>
                <p style="margin: 0; color: #60a5fa;">Professor</p>
                <p style="margin: 0;">Department of Accounting & Information Systems</p>
                <p style="margin: 0;">University of Rajshahi, Rajshahi-6205</p>
                <p style="margin: 0;">+8801717743984</p>
              </div>
            </div>
          </div>
        </div>
      `;

      // Create temporary div and add the resume content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = resumeContent;
      document.body.appendChild(tempDiv);

      // Generate PDF from the content
      const pdf = new jsPDF('p', 'mm', 'a4');
      const element = document.getElementById('resume-print');
      
      if (element) {
        const canvas = await html2canvas(element, {
          scale: 1,
          useCORS: true,
          logging: false
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add new pages if content overflows
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save PDF
        pdf.save('Sayed_Mehedi_Hasan_Resume.pdf');
        
        // Remove the temporary div
        document.body.removeChild(tempDiv);
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      onClick={generateResume}
      disabled={loading}
      className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg px-6 py-3 hover-lift neon-glow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Download Resume"
    >
      {loading ? (
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating...
        </motion.div>
      ) : (
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          Download CV
        </motion.div>
      )}
    </motion.button>
  );
};

export default ResumeDownload;
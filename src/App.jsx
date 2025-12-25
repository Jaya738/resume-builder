import React, { useState } from 'react';
import { Download, User, UserX } from 'lucide-react';
import ModernTemplate from './components/ModernTemplate';
import resumeData from './data/resumeData.json';

const App = () => {
  const [template, setTemplate] = useState('modern');
  const [showProfileImage, setShowProfileImage] = useState(true);

  // Handle Printing / PDF Download
  const handlePrint = () => {
    window.print();
  };

  // Toggle profile image visibility
  const toggleProfileImage = () => {
    setShowProfileImage(!showProfileImage);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans print:bg-white print:min-h-0">
      
      {/* Tool Bar - Hidden when printing */}
      <div className="print:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 shadow-sm z-50 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="font-semibold text-slate-700 hidden sm:inline">ResumeBuilder</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Template Selector */}
          <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
            <span>Template:</span>
            <select 
              value={template} 
              onChange={(e) => setTemplate(e.target.value)}
              className="bg-transparent border-none font-medium text-slate-800 focus:ring-0 cursor-pointer"
            >
              <option value="modern">Modern Professional</option>
              {/* Future templates can be added here */}
            </select>
          </div>

          {/* Profile Image Toggle */}
          <button
            onClick={toggleProfileImage}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border ${
              showProfileImage 
                ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200' 
                : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100'
            }`}
            title={showProfileImage ? 'Hide profile image' : 'Show profile image'}
          >
            {showProfileImage ? <User size={16} /> : <UserX size={16} />}
            <span className="hidden sm:inline">
              {showProfileImage ? 'Photo On' : 'Photo Off'}
            </span>
          </button>

          {/* Download Button */}
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Download PDF</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-24 pb-12 px-4 print:p-0 print:m-0">
        <div className="print:w-full">
          {template === 'modern' && (
            <ModernTemplate 
              data={resumeData} 
              showProfileImage={showProfileImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

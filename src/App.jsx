import React, { useEffect, useMemo, useState } from 'react';
import { Download, User, UserX, Palette } from 'lucide-react';
import ModernTemplate from './components/ModernTemplate';
import jayaData from './data/jaya.json';
import navyaData from './data/navya.json';
import venkatData from './data/venkat.json';

const THEME_PRESETS = [
  { name: 'Amber',   color: '#f59e0b' },
  { name: 'Blue',    color: '#3b82f6' },
  { name: 'Emerald', color: '#10b981' },
  { name: 'Rose',    color: '#f43f5e' },
  { name: 'Violet',  color: '#8b5cf6' },
  { name: 'Slate',   color: '#475569' },
  { name: 'Orange',  color: '#f97316' },
  { name: 'Teal',    color: '#14b8a6' },
];

const App = () => {
  const [template, setTemplate] = useState('modern');
  const [profiles, setProfiles] = useState([jayaData, navyaData, venkatData]);
  const [activeProfile, setActiveProfile] = useState(navyaData);
  const hasProfileImage = useMemo(
    () => Boolean(activeProfile?.header?.profileImage?.trim()),
    [activeProfile]
  );
  const [showProfileImage, setShowProfileImage] = useState(hasProfileImage);
  const [themeColor, setThemeColor] = useState('#f59e0b');
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    setShowProfileImage(hasProfileImage);
  }, [hasProfileImage]);

  const handlePrint = () => {
    window.print();
  };

  const toggleProfileImage = () => {
    setShowProfileImage(!showProfileImage);
  };

  const cycleProfile = () => {
    const currentIndex = profiles.findIndex((profile) => profile.header.name === activeProfile.header.name);
    const nextIndex = (currentIndex + 1) % profiles.length;
    setActiveProfile(profiles[nextIndex]);
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
          {/* Profile Selector */}
          <button
            onClick={cycleProfile}
            className="hidden md:flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-100"
            title="Switch profile"
          >
            <span>Profile:</span>
            <span className="font-medium text-slate-800">{activeProfile.header.name}</span>
          </button>

          {/* Theme Color Picker */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 cursor-pointer"
              title="Choose theme color"
            >
              <div
                className="w-4 h-4 rounded-full border border-slate-300"
                style={{ backgroundColor: themeColor }}
              />
              <Palette size={14} />
            </button>

            {showColorPicker && (
              <div className="absolute right-0 top-12 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 w-52">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Theme Color</div>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {THEME_PRESETS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setThemeColor(item.color); setShowColorPicker(false); }}
                      className="group flex flex-col items-center gap-1 cursor-pointer"
                      title={item.name}
                    >
                      <div
                        className={`w-8 h-8 rounded-full border-2 transition-transform group-hover:scale-110 ${
                          themeColor === item.color ? 'border-slate-800 scale-110' : 'border-slate-200'
                        }`}
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[9px] text-slate-500">{item.name}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <label className="text-xs text-slate-500">Custom:</label>
                  <input
                    type="color"
                    value={themeColor}
                    onChange={(e) => setThemeColor(e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                  />
                  <span className="text-xs font-mono text-slate-400">{themeColor}</span>
                </div>
              </div>
            )}
          </div>

          {/* Profile Image Toggle */}
          <button
            onClick={toggleProfileImage}
            disabled={!hasProfileImage}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer border ${
              !hasProfileImage
                ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                : showProfileImage
                ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200' 
                : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100'
            }`}
            title={
              hasProfileImage
                ? (showProfileImage ? 'Hide profile image' : 'Show profile image')
                : 'No profile image configured'
            }
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

      {/* Close color picker when clicking outside */}
      {showColorPicker && (
        <div className="fixed inset-0 z-40 print:hidden" onClick={() => setShowColorPicker(false)} />
      )}

      {/* Main Content Area */}
      <div className="pt-24 pb-12 px-4 print:p-0 print:m-0">
        <div className="print:w-full">
          {template === 'modern' && (
            <ModernTemplate 
              data={activeProfile} 
              showProfileImage={showProfileImage}
              themeColor={themeColor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

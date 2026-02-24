import React from 'react';

const SectionTitle = ({ icon: Icon, title, className = "" }) => (
  <div className={`flex items-center gap-2 mb-2 print:mb-1.5 ${className}`}>
    {Icon && (
      <div
        className="w-5 h-5 print:w-4 print:h-4 rounded flex items-center justify-center"
        style={{ backgroundColor: 'var(--theme-color, #f59e0b)' }}
      >
        <Icon size={12} className="text-white print:w-2.5 print:h-2.5" />
      </div>
    )}
    <h3 className="text-sm print:text-xs font-bold text-slate-800 uppercase tracking-wider">{title}</h3>
  </div>
);

export default SectionTitle;

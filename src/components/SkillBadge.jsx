import React from 'react';

const SkillBadge = ({ skill, variant = 'default' }) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 border-slate-200 print:border-slate-300',
    accent: 'bg-blue-50 text-blue-700 border-blue-200',
    outline: 'bg-transparent text-slate-600 border-slate-300',
  };

  return (
    <span
      className={`px-1.5 py-0.5 print:px-2 print:py-0.5 text-[11px] print:text-[11px] font-medium rounded-md border ${variants[variant] || variants.default}`}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;

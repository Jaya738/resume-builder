import React from 'react';
import SkillBadge from './SkillBadge';

const SkillGroup = ({ icon: Icon, label, skills, badgeVariant = 'default' }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="mb-5 print:mb-3">
      <h5 className="text-[10px] print:text-[10px] font-bold text-slate-500 tracking-wider mb-1.5 flex items-center gap-1.5">
        {Icon && <Icon size={11} className="text-slate-400" />}
        {label}
      </h5>
      <div className="flex flex-wrap gap-1.5 print:gap-1.5">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} variant={badgeVariant} />
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;

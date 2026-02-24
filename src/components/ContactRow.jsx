import React from 'react';
import { MapPin, Phone, Mail, Github, Linkedin, Globe } from 'lucide-react';

const contactFields = [
  { key: 'location', icon: MapPin },
  { key: 'phone', icon: Phone },
  { key: 'email', icon: Mail },
  { key: 'github', icon: Github, isLink: true, formatLabel: (v) => v.replace('github.com/', '') },
  { key: 'linkedin', icon: Linkedin, isLink: true, formatLabel: () => 'LinkedIn' },
  { key: 'website', icon: Globe, isLink: true },
];

const ContactRow = ({ contact, className = '', iconSize = 14, direction = 'row' }) => {
  const dirClass = direction === 'column'
    ? 'flex flex-col gap-y-1.5'
    : 'flex flex-wrap items-center gap-x-4 md:gap-x-5 print:gap-x-4 gap-y-1';

  return (
    <div className={`${dirClass} text-xs md:text-sm print:text-xs text-slate-600 ${className}`}>
      {contactFields.map(({ key, icon: Icon, isLink, formatLabel }) => {
        const value = contact[key];
        if (!value) return null;

        const label = formatLabel ? formatLabel(value) : value;

        return (
          <div key={key} className="flex items-center gap-1.5">
            <Icon size={iconSize} className="text-slate-400" />
            {isLink ? (
              <a
                href={`https://${value}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 hover:underline"
              >
                {label}
              </a>
            ) : (
              <span>{label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContactRow;

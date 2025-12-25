import React from 'react';

const ContactItem = ({ icon: Icon, text, link }) => {
  if (!text) return null;
  
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
      <Icon size={14} className="min-w-[14px]" />
      {link ? (
        <a 
          href={link.startsWith('http') ? link : `https://${link}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 hover:underline"
        >
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default ContactItem;


import React from 'react';

const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  import: 'default',
});

const profileImageByName = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [path.split('/').pop(), url])
);

const ProfileImage = ({ name, imageName, size = 'md', className = '' }) => {
  const src = profileImageByName[imageName?.trim()] || '';
  if (!src) return null;

  const sizes = {
    sm: 'w-16 h-16 print:w-14 print:h-14',
    md: 'w-20 h-20 md:w-24 md:h-24 print:w-20 print:h-20',
    lg: 'w-28 h-28 md:w-32 md:h-32 print:w-28 print:h-28',
  };

  return (
    <div className={`flex-shrink-0 ${className}`}>
      <div className={`${sizes[size] || sizes.md} rounded-full overflow-hidden border-2 border-slate-300 shadow-md print:shadow-sm`}>
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>
    </div>
  );
};

export default ProfileImage;

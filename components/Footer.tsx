import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="absolute w-full bottom-0">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Nikita Makarov. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-600 mt-1">
          Currently remote, relocating to Brazil soon.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
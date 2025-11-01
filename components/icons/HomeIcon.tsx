import React from 'react';

const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M3 10.5v8.25a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V10.5M8.25 21V15a3.75 3.75 0 017.5 0v6" />
  </svg>
);

export default HomeIcon;
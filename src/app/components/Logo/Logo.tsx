'use client';

import Image from 'next/image';

export const Logo = () => {
  return (
    <Image 
      src="/face-logo.svg" 
      alt="MJ Studio" 
      priority={true}
      width={50}
      height={50}
    />
  );
};
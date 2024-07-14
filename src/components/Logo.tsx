import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { useWhitelabel } from '@/context/Whitelabel';

function Logo() {

  const { logoUrl, logoHref, title } = useWhitelabel();

  return (
      <Link href={logoHref} style={{ width: '50px', height: '50px', position: 'relative' }}>
        <Image fill={true} src={logoUrl} alt={title} title={title} />
      </Link>
  );

}

export default Logo;

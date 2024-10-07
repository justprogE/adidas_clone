import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/shared/assets/logo.svg';

export function Logo() {
  return (
    <Link href="/">
      <Image className="w-[60px] relative top-[-9px]" src={logo} alt="logo" />
    </Link>
  );
}

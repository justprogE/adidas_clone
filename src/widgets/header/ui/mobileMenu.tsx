'use client'; // eslint-disable-line
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import mobileMenu from '@/shared/assets/mobileMenuIcon.svg';
import logo from '@/shared/assets/logo.svg';
import close from '@/shared/assets/close.svg';
import { navs } from '../model/nav';

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        onClick={() => setOpen(true)}
        width={24}
        height={14}
        src={mobileMenu}
        alt="mobileMenu"
      />
      {open && (
        <div className="fixed w-screen h-screen top-0 left-0 z-30 bg-white">
          <div className="h-[60px] flex items-center justify-center border-[1px] border-[#eceff1]">
            <Image className="w-[50px]" src={logo} alt="logo" />
            <div
              onClick={() => setOpen(false)}
              className="absolute cursor-pointer top-[20px] right-[30px]"
            >
              <Image className="w-4" src={close} alt="" />
            </div>
          </div>
          <ul className="py-[10px] px-[30px]">
            {Object.entries(navs).map(([path, title]) => (
              <Link
                key={path}
                href={path}
                onClick={() => setOpen(false)}
                className="h-[45px] flex items-center uppercase font-bold tracking-[2px] text-lg"
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;

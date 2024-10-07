'use client'; // eslint-disable-line
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import heart from '@/shared/assets/heart.svg';
import logo from '@/shared/assets/logo.svg';
import cart from '@/shared/assets/bag.svg';
import search from '@/shared/assets/search.svg';
import profile from '@/shared/assets/user.svg';
import MobileMenu from './mobileMenu';

function MobileHeader() {
  return (
    <div className="hidden md:grid md:grid-cols-[2fr_1fr_2fr] py-[5px] h-[60px]">
      <div className="flex justify-start items-center gap-3">
        <MobileMenu />
        <Link href={'favorites'} className="relative pl-2">
          <div>
            <span className="animate-ping w-[22px] h-[22px] rounded-full bg-[#0071ae] absolute top-[-15px] left-4"></span>
            <span className="w-[22px] h-[22px] flex items-center justify-center text-[12px] font-bold text-white rounded-full bg-[#0071ae] absolute top-[-15px] left-4">
              1
            </span>
          </div>
          <Image className="w-6 h-[26.6px]" src={heart} alt="" />
        </Link>
      </div>
      <Link href={'/'} className="flex justify-center items-center">
        <Image className="w-[50px]" src={logo} alt="logo" />
      </Link>
      <div className="flex justify-end items-center gap-3">
        <div className="relative pl-2 cursor-pointer">
          {!localStorage.getItem('access_token') && (
            <div className="w-[22px] h-[22px] flex items-center font-hausBold justify-center text-[12px] font-bold rounded-[50%] bg-[#ffd200] absolute top-[-10px] left-[21px]">
              1
            </div>
          )}
          <Image className="max-w-7 h-[30px]" src={profile} alt="" />
        </div>
        <div className="relative pl-2">
          <Image className="w-6 h-[26.6px]" src={search} alt="" />
        </div>
        <Link href="/cart" className="relative pl-2">
          <div className="w-[22px] h-[22px] flex items-center justify-center text-[12px] font-bold text-white rounded-[50%] bg-[#0071ae] absolute top-[-15px] left-4">
            1
          </div>
          <Image className="w-6 h-[26.6px]" src={cart} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default MobileHeader;

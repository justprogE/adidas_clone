'use client'; // eslint-disable-line
import React, { useContext } from 'react';
import Image from 'next/image';
import Search from '@/shared/ui/Search';
import profile from '@/shared/assets/user.svg';
import heart from '@/shared/assets/heart.svg';
import cart from '@/shared/assets/bag.svg';
import { AuthContext } from '@/features/session';

export function Interaction() {
  const { setOpenAuth } = useContext(AuthContext);
  return (
    <div className="flex items-center h-12 pr-[20px]">
      <Search />
      <div className="flex items-center gap-[25px] ml-[10px]">
        <div
          onClick={() => setOpenAuth(true)}
          className="relative cursor-pointer"
        >
          {!localStorage.getItem('access_token') && (
            <div className="w-[22px] h-[22px] flex items-center font-hausBold justify-center text-[12px] font-bold rounded-[50%] bg-[#ffd200] absolute top-[-10px] left-[14px]">
              1
            </div>
          )}
          <Image className="max-w-7 h-[30px]" src={profile} alt="" />
        </div>
        <Image className="w-6 h-[26.6px]" src={heart} alt="" />
        <Image className="w-6 h-[26.6px]" src={cart} alt="" />
      </div>
    </div>
  );
}

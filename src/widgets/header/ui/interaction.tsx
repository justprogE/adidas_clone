'use client'; // eslint-disable-line
import React, { useContext } from 'react';
import Image from 'next/image';
import Search from '@/shared/ui/Search';
import profile from '@/shared/assets/user.svg';
import heart from '@/shared/assets/heart.svg';
import cartIcon from '@/shared/assets/bag.svg';
import { AuthContext } from '@/features/session';
import Link from 'next/link';
import { CartContext } from '@/features/cart';

export function Interaction() {
  const { setOpenAuth } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="flex items-center h-12">
      <Search />
      <div className="w-[134px] flex items-center justify-between pl-[10px]">
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
        <Link href="/favorites" className="relative pl-2">
          <Image
            className="w-6 h-[26.6px] cursor-pointer"
            src={heart}
            alt="favorites"
          />
        </Link>

        <Link href="/cart" className="relative pl-2">
          {cart?.length > 0 && (
            <div className="w-[22px] h-[22px] flex items-center justify-center text-[12px] font-bold text-white rounded-[50%] bg-[#0071ae] absolute top-[-15px] left-4">
              {cart?.length > 10 ? '10+' : cart?.length}
            </div>
          )}
          <Image
            className="w-6 h-[26.6px] cursor-pointer"
            src={cartIcon}
            alt="cart"
          />
        </Link>
      </div>
    </div>
  );
}

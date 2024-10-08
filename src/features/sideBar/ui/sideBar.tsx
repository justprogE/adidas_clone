'use client'; // eslint-disable-line
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userQueries } from '@/entities/user/api';
import close from '@/shared/assets/close.svg';
import coin from '@/shared/assets/coin.svg';
import arrow from '@/shared/assets/arrow.svg';
import adiClub from '@/shared/assets/adiclub_level_1.svg';
import { Tabs } from './tabs';
import { AuthContext } from '../../session/@x/context';

export function SideBar() {
  const { data } = userQueries.get();
  const { setOpenAuth } = useContext(AuthContext);
  return (
    <div className="w-[390px] ml-auto h-screen bg-white overflow-y-scroll scroll_width pb-5 sm:w-screen">
      <div className="sticky top-0 z-10 px-[30px] bg-[url(../shared/assets/back_points.png)] bg-repeat bg-cover">
        <div
          onClick={() => setOpenAuth(false)}
          className="absolute cursor-pointer top-[15px] right-[30px]"
        >
          <Image className="w-[27px]" src={close} alt="" />
        </div>
        <p className="text-center py-[15px] uppercase text-lg font-bold">
          hi {data?.user?.firstName ?? ''}
        </p>
        <div className="flex justify-between pb-[10px]">
          <Image className="w-[100px]" src={adiClub} alt="adiclub" />
          <div className="flex flex-col">
            <p className="text-xs">Points to spend</p>
            <div className="flex gap-1 self-end mt-[8px]">
              <Image className="w-[19px] filter_black" src={coin} alt="" />
              <strong className="font-hausBold text-lg">
                {data?.user?.points}
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(../shared/assets/back_points.png)] bg-repeat px-[30px] pb-5 pt-[15px]">
        <Link
          href={'account'}
          onClick={() => setOpenAuth(false)}
          className="flex justify-between"
        >
          <p className="text-xs font-hausBold uppercase">Visit your account</p>
          <Image className="w-6" src={arrow} alt="arrow" />
        </Link>
        <div className="mt-[15px] flex justify-between">
          <p className="text-xs font-hausBold uppercase">points history</p>
          <Image className="w-6" src={arrow} alt="arrow" />
        </div>
      </div>
      <Tabs />
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import voucher from '@/shared/assets/voucher.png';
import { justForYouContent } from '../model/justForYouContent';

export function JustForYou() {
  return (
    <div className="pt-[30px] px-[10px]">
      <span className="text-sm uppercase underline font-bold tracking-[2px] cursor-pointer hover:text-white hover:no-underline hover:bg-black ">
        view my vouchers
      </span>
      <div className="bg-[#0081c7] p-5 pb-[25px] rounded-[4px] flex justify-between items-center mt-5">
        <div>
          <Image className="w-12" src={voucher} alt="" />
          <p className="text-xl font-hausBold uppercase text-white mt-[5px]">
            15% off selected items
          </p>
        </div>
        <p className="text-white underline hover:text-black hover:bg-white cursor-pointer">
          copy code
        </p>
      </div>
      {Object.entries(justForYouContent).map(([title, text]) => (
        <div key={title} className="p-5 border-[1px] border-gray-300 mt-[10px]">
          <p className="text-base font-hausBold mb-[10px]">{title}</p>
          <span className="text-sm">{text}</span>
        </div>
      ))}
    </div>
  );
}

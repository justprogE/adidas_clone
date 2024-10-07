import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { cn } from '@/shared/lib/cn';
import coin from '@/shared/assets/coin.svg';
import voucher from '@/shared/assets/voucher.png';
import checkmark from '@/shared/assets/check_mark.svg';

export function Voucher({
  percent,
  points,
  setActive,
  chosen,
  id,
}: {
  percent: string;
  points: string;
  setActive?: Dispatch<SetStateAction<number>>;
  chosen?: boolean;
  id?: number;
}) {
  return (
    <div
      onClick={setActive ? () => setActive(id ?? 0) : () => {}}
      className="bg-[#0081c7] rounded-[4px] p-5 min-w-[280px] relative cursor-pointer"
    >
      <div
        className={cn(
          'absolute w-6 h-6 bg-black rounded-full flex justify-center items-center right-[5px] top-[10px]',
          {
            hidden: !chosen,
          },
        )}
      >
        <Image className="w-3 filter_white" src={checkmark} alt="checkmark" />
      </div>
      <p className="text-[28px] text-white font-hausBold uppercase mb-6">
        {percent}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <Image src={coin} alt="" />
          <p className="text-white text-base font-bold">{points} points</p>
        </div>
        <Image className="w-[70px] h-[17px]" src={voucher} alt="" />
      </div>
    </div>
  );
}

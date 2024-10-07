import React from 'react';
import { vouchers } from '../model/vouchers';
import { Voucher } from './voucher';

export function PointShop() {
  return (
    <div className="px-[30px] pt-[15px]">
      <p className="text-[30px] font-neueBold tracking-[1.5px]">
        Swap points for vouchers
      </p>
      <p className="text-sm mt-[10px]">
        Swap your points for discounts or special offers
      </p>
      <p className="text-sm mt-[10px] underline hover:bg-blackx hover:text-white hover:bg-black font-bold inline-block cursor-pointer">
        {' '}
        View my vouchers
      </p>
      <div className="flex gap-[10px] overflow-x-scroll scroll mt-5 pb-[30px] cursor-pointer">
        {Object.entries(vouchers).map(([percent, points]) => (
          <Voucher key={percent} percent={percent} points={points} />
        ))}
      </div>
    </div>
  );
}

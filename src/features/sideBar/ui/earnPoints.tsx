import React from 'react';
import Image from 'next/image';
import Button from '@/shared/ui/Button';
import pointsShop from '@/shared/assets/shop.webp';
import pointsReview from '@/shared/assets/review.webp';

export function EarnPoints() {
  return (
    <div className="pt-[15px]">
      <div className="px-[30px]">
        <p className="text-[30px] font-neueBold tracking-[1.5px]">
          Earn adiClub points
        </p>
        <p className="text-sm">
          Earning points is easy. The more you interact, the more you earn.
          There are a few ways you can do this.
        </p>
      </div>
      <h2 className="ml-[30px] pt-[30px] uppercase text-lg font-neueBold">
        shop
      </h2>
      <Image className="w-full mt-5" src={pointsShop} alt="" />
      <div className="px-[30px]">
        <p className="text-sm mt-5">
          Earn <strong>10 points</strong> for every <strong>$1</strong> you
          spend at adidas.com or in the app.
        </p>
        <Button className="border-[1px] border-black mt-5" intent={'primary'}>
          browse items
        </Button>
      </div>

      <h2 className="ml-[30px] pt-[30px] uppercase text-lg font-neueBold tracking-[1.5px]">
        review
      </h2>
      <Image className="w-full mt-5" src={pointsReview} alt="" />
      <div className="px-[30px]">
        <p className="text-sm mt-5">
          Share your thoughts on what you shopped and <strong>50 points</strong>{' '}
          are yours.
        </p>
        <Button className="border-[1px] border-black mt-5" intent={'primary'}>
          write a review
        </Button>
      </div>
    </div>
  );
}

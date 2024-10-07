'use client'; //eslint-disable-line
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Clothes({
  clothes,
}: {
  clothes: { [key: string]: { image: string; path: string } };
}) {
  return (
    <div className="w-[1640px] max-w-full flex flex-wrap px-[110px] 2xl:px-[64px] smd:px-[30px] gap-5 mt-[60px] esm:px-[15px] mx-auto">
      {Object.entries(clothes).map(([title, { image, path }]) => (
        <div
          key={path}
          className="w-[calc(25%-15px)] md:w-[calc(50%-15px)] min-w-[180px] md:min-w-[250px] md:max-h-[144px] smd:w-auto smd:flex-grow bg-[#eceff1] flex flex-col md:flex-row-reverse md:gap-5 md:items-end md:pb-0 items-center justify-between pb-5"
        >
          <div className="w-[180px] h-[180px] md:w-[144px] md:h-[144px]">
            <Image
              loader={({ src }) => src}
              width={0}
              height={0}
              src={image}
              className="w-full"
              alt=""
            />
          </div>
          <Link
            href={path}
            className="uppercase font-hausBold text-sm tracking-[2px] mt-5 text-center md:text-start smd:flex-1 underline md:pl-[15px] md:pb-[15px]"
          >
            {title}
          </Link>
        </div>
      ))}
    </div>
  );
}

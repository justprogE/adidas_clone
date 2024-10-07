import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from '@/shared/ui/Button';

export function PageHeader({
  image,
  imageMobile,
  title,
  subtitle,
}: {
  image: StaticImageData;
  imageMobile: StaticImageData;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative">
      <div>
        <div className="hidden smd:block">
          <Image className="w-full h-full" src={imageMobile} alt="" />
        </div>
        <div className="smd:hidden">
          <Image className="w-full h-full" src={image} alt="main" />
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 px-[108px] 2xl:px-[60px] smd:px-[30px] smd:pb-[30px] pb-[60px] flex flex-col justify-end">
        <div>
          <div className="max-w-max bg-white px-1">
            <h2 className="text-wrap slg:text-xl text-2xl text-black uppercase font-neueBold tracking-[2px]">
              {title}
            </h2>
          </div>
          <div className="max-w-max bg-white mb-4 mt-1 p-[2px] pb-1">
            <p className="text-base text-wrap slg:text-ms text-black">
              {subtitle}
            </p>
          </div>
          <Button className="max-w-[220px]">shop now</Button>
        </div>
      </div>
    </div>
  );
}

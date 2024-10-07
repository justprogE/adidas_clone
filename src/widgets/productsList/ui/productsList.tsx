'use client';

import React from 'react';
import RoutePaths from '@/shared/ui/RoutePaths';
import { productsQueries } from '@/entities/product/api';
import { usePathname } from 'next/navigation';
import { ProductCard } from '@/entities/product';
import { getPaths } from '../lib/getPaths';

export function ProductsList({
  filter,
  title,
  desc,
}: {
  filter: {
    [key: string]: string | boolean;
  };
  title: string;
  desc: string;
}) {
  const pathname = usePathname();
  const { data } = productsQueries.products({ ...filter });
  const paths = pathname.replace('/', '').replace('_', ' ').split('-');

  return (
    <div className="">
      <div className="w-[1630px] mt-[30px] max-w-full mx-auto px-[30px] md:px-[15px]">
        <RoutePaths paths={getPaths(paths)} />
        <p className="text-[40px] my-[15px] font-neueBold uppercase xl:text-[30px] md:text-2xl">
          {title}
        </p>
        <p className="mb-[30px]">{desc}</p>
      </div>
      <div className="w-[1600px] max-w-full px-[15px] grid grid-cols-[25%_25%_25%_25%] mx-auto gap-[1px] 3xl:w-[1280px] md:grid-cols-[33%_33%_33%] sm:grid-cols-[50%_50%] sm:px-[1px]">
        {data?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

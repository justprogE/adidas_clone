'use client'; // eslint-disable-line
import Image from 'next/image';
import { productsQueries } from '@/entities/product/api';
import { Interaction } from './interaction';

export const Product = ({ id }: { id: string }) => {
  const { data } = productsQueries.product(id);
  return (
    <div className="flex md:flex-col relative mx-auto md:mx-0">
      <div className="max-w-[1200px] md:hidden self-start flex-auto grid grid-cols-[50%_50%] gap-x-[1px] gap-y-[1px]">
        {Object?.entries(data?.product?.[0]?.images ?? {}).map(
          ([title, image]) => (
            <div className="w-full" key={title}>
              <Image
                loader={({ src }) => src}
                width={0}
                height={0}
                className="w-full"
                src={image}
                alt=""
              />
            </div>
          ),
        )}
      </div>
      <div className="hidden md:block w-full">
        <div className="px-5 py-[10px]">
          <h1 className="text-3xl uppercase font-neueBold mt-[10px]">
            {data?.product?.[0]?.title}
          </h1>
          <p className="font-bold text-base mt-[10px]">
            $ {data?.product?.[0]?.price}
          </p>
        </div>
        <Image
          loader={({ src }) => src}
          width={0}
          height={0}
          className="w-full"
          src={data?.product?.[0]?.images?.image ?? ''}
          alt=""
        />
      </div>
      <div className="min-w-[490px] 3xl:min-w-[450px] 3xl:px-[40px] 2xl:min-w-[430px] 2xl:px-[30px] xl:min-w-[320px] xl:px-[20px] md:min-w-full md:w-full sticky top-[var(--header-lg)] px-[60px] py-[30px] self-start">
        <div className="md:hidden">
          <span className="text-base">{data?.product?.[0]?.style}</span>
          <h1 className="text-3xl uppercase font-neueBold mt-[10px]">
            {data?.product?.[0]?.title}
          </h1>
          <p className="font-bold text-base mt-[10px]">
            $ {data?.product?.[0]?.price}
          </p>
          <p className="mt-10 text-base">{data?.product?.[0]?.color}</p>
        </div>
        <Interaction
          category={data?.product?.[0]?.category ?? ''}
          // eslint-disable-next-line
          // @ts-ignore
          product={data?.product?.[0]}
        />
        <p className="mt-5 text-sm text-[#17120f]">
          4 interest-free payments of $27.50 with Klarna. Learn More
        </p>
        <p className="underline mt-[30px] hover:bg-black hover:text-white">
          Join adiClub to get unlimited free standard shipping, returns, &
          exchanges
        </p>
      </div>
    </div>
  );
};

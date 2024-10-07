import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/shared/lib/cn';
import { IProduct } from '../model/types';
import { convertPrice } from '../lib/price';

export function ProductCard({
  product,
  favorites,
}: {
  product: IProduct;
  favorites?: boolean;
}) {
  return (
    <Link
      href={`${product.id}`}
      className="w-full pb-6 hover:border-black hover:border-[1px]"
    >
      <div
        className={cn('w-full relative', {
          'hover:favorite_hover': favorites,
          'hover:item_hover': !favorites,
        })}
      >
        <Image
          loader={({ src }) => src}
          width={0}
          height={0}
          className="w-full h-auto"
          src={product?.images?.image}
          alt={product?.title}
        />
        <Image
          loader={({ src }) => src}
          width={0}
          height={0}
          className="w-full h-auto hidden hover"
          src={product?.images?.hover}
          alt={product?.title}
        />
      </div>
      <div className="flex flex-col p-[10px] pb-5 gap-1">
        <div>
          <div>
            {product?.discount ? (
              <div>
                <div className="font-hausBold text-sm flex gap-1">
                  <p className="text-[var(--red)]">
                    $
                    {convertPrice(
                      product?.price,
                      product?.discount?.replace(/#/, ''),
                    )}
                    .00
                  </p>
                  {product?.members && (
                    <p className="text-[var(--blue)]">
                      ${product?.members.replace(/#/, '')}.00 for members
                    </p>
                  )}
                </div>
                <div className="flex gap-1 text-xs">
                  <p className="line-through">${product?.price}</p>
                  <p className="text-[var(--red)]">
                    -{product?.discount?.replace(/#/, '')}%
                  </p>
                  <p className="text-[var(--dark-gray)]">Original price</p>
                </div>
              </div>
            ) : (
              <div className="font-hausBold text-sm flex gap-1">
                <p> ${product?.price}.00</p>
                {product?.members && (
                  <p className="text-[var(--blue)]">
                    ${product?.members.replace(/#/, '')}.00 for members
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <p className="text-sm mt-1">{product?.title}</p>
        {!favorites && (
          <>
            <p className="text-sm text-[var(--dark-gray)]">{product?.style}</p>
            <span className="text-sm text-[var(--dark-gray)]">
              {product?.color}
            </span>
          </>
        )}
      </div>
    </Link>
  );
}

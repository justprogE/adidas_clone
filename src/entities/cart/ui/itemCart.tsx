import React, { useContext, useState } from 'react';
import Image from 'next/image';
import favorite from '@/shared/assets/heart.svg';
import close from '@/shared/assets/close.svg';
import { CartContext } from '@/features/cart';
import arrowDown from '@/shared/assets/arrowDown.svg';
import { cn } from '@/shared/lib/cn';
import { IProduct } from '../../product/@x/type';
import { cartQueries } from '../api';
import { IItemDB, IProductCart } from '../model/type';
import { convertToItemsDB } from '../lib/convertToItemsDB';

export function ItemCart({
  product,
}: {
  product: IProduct & { size: string; quantity: number };
}) {
  const arrQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [open, setOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [mutation] = cartQueries.update();

  async function deleteItem(id: string) {
    const auth = localStorage.getItem('access_token');

    if (auth) {
      const newCart = [...cart.filter((item) => item.id + item.size !== id)];
      const bag = convertToItemsDB(newCart);

      await mutation({
        variables: {
          where: {
            cart: bag,
          },
        },
      });

      return setCart([...newCart]);
    }

    const cartItems = JSON.parse(localStorage.getItem('basketData')!);

    const newCartItems = cartItems.filter(
      (item: IItemDB) => item.productId + item.size !== id,
    );
    localStorage.setItem('basketData', JSON.stringify(newCartItems));

    const newCart = [...cart.filter((item) => item.id + item.size !== id)];
    return setCart([...newCart]);
  }

  async function changeQuantity(
    productId: string,
    size: string,
    quantity: number,
  ) {
    try {
      const productChanged = cart.find(
        (item) => item.id === productId && item.size === size,
      );

      const arr = [...cart];

      const productIndex = arr
        .map((item) => item.id + item.size)
        .indexOf(productId + size);

      arr.splice(productIndex, 1, {
        ...productChanged,
        quantity,
      } as IProductCart);

      setCart(arr);
      const cartDB = convertToItemsDB(arr);

      const auth = localStorage.getItem('access_token');
      if (auth) {
        setOpen(false);
        return await mutation({
          variables: {
            where: {
              cart: cartDB,
            },
          },
        });
      }
      setOpen(false);
      const newCart = convertToItemsDB(arr);
      return localStorage.setItem('basketData', JSON.stringify(newCart));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="flex border-black border-[1px] w-full sm:border-0 ">
      <div className="max-w-[240px]">
        <Image
          loader={({ src }) => src}
          width={0}
          height={0}
          className="w-full"
          src={product?.images?.image}
          alt=""
        />
      </div>
      <div className="ml-[4.16666%] w-full sm:min-w-[150px] sm:flex-nowrap">
        <div className="py-5 h-full w-full flex sm:py-0 ">
          <div className="w-full flex flex-col h-full sm:break-all sm:w-[calc(100%-54px)]">
            <div className="w-full flex justify-between">
              <span className="uppercase text-base overflow-hidden">
                {product?.title}
              </span>
              <span className="uppercase text-base text-nowrap">
                $ {product?.price}
              </span>
            </div>
            <div className="w-full overflow-hidden uppercase sm:hidden">
              {product?.color}
            </div>
            <div className="w-full mt-[10px]">
              <span className="uppercase sm:text-sm text-base">Size: </span>
              <span className="uppercase sm:text-sm">{product?.size}</span>
            </div>
            <div className="flex justify-between relative mt-auto font-hausBold sm:w-[80px] w-[100px] h-[58px] sm:border-none border-[1px] border-black px-[10px] py-[15px]">
              <p className="hidden sm:block">Qty:</p>
              {product?.quantity}
              <Image
                onClick={() => setOpen((prev) => !prev)}
                className={cn(
                  'w-[15px] cursor-pointer rotate-0 transition-all duration-150',
                  {
                    'rotate-180': open,
                  },
                )}
                src={arrowDown}
                alt="arrow down"
              />
              {open && (
                <div className="absolute sm:rounded-b-md sm:max-h-[160px] max-h-[232px] sm:border-[1px] sm:border-black sm:border-t-0 overflow-y-scroll sm:top-[40px] top-[57px] -left-[0.5px] sm:left-[10px] z-[49]">
                  {arrQuantity.map((quantity) => (
                    <div
                      className={cn(
                        'hover:bg-[var(--gray)] cursor-pointer sm:w-[40px] sm:h-[40px] sm:border-x-0 w-[100px] h-[58px] border-[1px] border-black border-t-0 bg-white px-[10px] py-[15px] font-hausBold z-50',
                        {
                          'bg-[var(--gray)]': product.quantity === quantity,
                        },
                      )}
                      key={quantity}
                      id={`${quantity}`}
                      onClick={(e) =>
                        changeQuantity(
                          product.id,
                          product.size,
                          Number((e.target as EventTarget & { id: string }).id),
                        )
                      }
                    >
                      {quantity}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="px-[15px]">
            <div
              onClick={() => deleteItem(product.id + product.size)}
              className="mb-[15px] cursor-pointer"
            >
              <Image className="min-w-5 w-5" src={close} alt="" />
            </div>
            <div>
              <Image className="min-w-5 w-5" src={favorite} alt="" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

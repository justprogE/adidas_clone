'use client'; // eslint-disable-line

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Button from '@/shared/ui/Button';
import Sizes from '@/shared/ui/Sizes';
import favorite from '@/shared/assets/heart.svg';
import { IProduct } from '@/entities/product/@x/type';
import { cartQueries } from '@/entities/cart/api';
import { CartContext } from '@/features/cart';
import { addProductInCart } from '@/entities/cart/lib/addProductInCart';
import { convertToItemsDB } from '@/entities/cart/lib/convertToItemsDB';
import Loader from '@/shared/ui/Loader';
import { clothesSizes, shoesSizes } from '../model/const';

export function Interaction({
  category,
  product,
}: {
  category: string;
  product: IProduct;
}) {
  const [active, setActive] = useState('');
  const [mutation, { loading }] = cartQueries.update();
  const { cart, setCart } = useContext(CartContext);

  async function addToCart() {
    const newCart = addProductInCart(product, active, cart, setCart);
    console.log('newCart: ', newCart);
    const newDBCart = convertToItemsDB(newCart);
    console.log('newDBCart: ', newDBCart);
    if (localStorage.getItem('access_token')) {
      return await mutation({
        variables: {
          where: {
            cart: [...newDBCart],
          },
        },
      });
    }
    return localStorage.setItem('basketData', JSON.stringify([...newDBCart]));
  }
  return (
    <div>
      <Sizes
        sizes={/shoes/gi.test(category) ? shoesSizes : clothesSizes}
        active={active}
        setActive={setActive}
      />
      <div className="flex gap-2 mt-10">
        <Button
          onClick={() => addToCart()}
          disabled={loading}
          intent={'secondary'}
        >
          {loading ? <Loader /> : 'add to bag'}
        </Button>
        <div className="p-[15px] border-black border-[1px]">
          <Image className="min-w-5 w-5" src={favorite} alt="" />
        </div>
      </div>
    </div>
  );
}

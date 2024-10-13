'use client'; // eslint-disable-line
import React, { useContext, useEffect } from 'react';
import { productsQueries } from '@/entities/product/api';
import { convertToItemsCart } from '@/entities/cart/lib';
import { CartContext } from '../model/context';

export function StorageCart() {
  const { setCart } = useContext(CartContext);
  const { refetch } = productsQueries.products();

  async function addItemsCart() {
    try {
      const cartLocal = JSON.parse(
        localStorage.getItem('basketData') ?? JSON.stringify(''),
      );
      if (cartLocal) {
        const productsData = await refetch({
          ids: cartLocal.map(
            (item: { productId: string; quantity: number; size: string }) =>
              item.productId,
          ),
        });
        console.log('productsData: ', productsData.data);
        const itemsCart = convertToItemsCart(
          cartLocal,
          productsData?.data.products,
        );
        console.log('items cart: ', itemsCart);
        return setCart(itemsCart as []);
      }
      return setCart([]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    (async () => await addItemsCart())();
  }, []);
  return <></>;
}

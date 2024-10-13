import React, { useContext, useEffect } from 'react';
import { productsQueries } from '@/entities/product/api';
import { convertToItemsCart } from '@/entities/cart/lib';
import { CartContext } from '../model/context';

export function StorageCart() {
  const { setCart } = useContext(CartContext);
  const { data: products, refetch } = productsQueries.products({ ids: [] });

  async function addItemsCart() {
    try {
      const cartLocal = JSON.parse(
        localStorage.getItem('basketData') ?? JSON.stringify(''),
      );
      if (cartLocal) {
        await refetch();
        const itemsCart = convertToItemsCart(cartLocal, products!.products);
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

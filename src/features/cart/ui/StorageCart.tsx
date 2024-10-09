import React, { useContext, useEffect } from 'react';
import { CartContext } from '../model/context';

export function StorageCart() {
  const { setCart } = useContext(CartContext);
  function getBasketData() {
    const cartLocal = JSON.parse(
      localStorage.getItem('basketData') ?? JSON.stringify(''),
    );
    if (cartLocal) {
      return setCart(cartLocal);
    }
    return setCart([]);
  }
  useEffect(() => {
    getBasketData();
  }, []);
  return <></>;
}

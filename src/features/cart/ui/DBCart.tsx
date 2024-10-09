import { sessionQueries } from '@/entities/session/api';
import React, { useContext, useEffect } from 'react';
import { TItemCart } from '../model/type';
import { CartContext } from '../model/context';

export function DBCart() {
  const { setCart } = useContext(CartContext);
  const { data } = sessionQueries.get();
  useEffect(() => {
    setCart(data?.user?.cart as TItemCart[]);
  }, [data]);
  return <></>;
}

'use client'; // eslint-disable-line
import React, { useEffect, useState } from 'react';
import { IProductCart } from '@/entities/cart/model/type';
import { CartContext } from '../model/context';
import { DBCart } from './DBCart';
import { StorageCart } from './StorageCart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<IProductCart[]>([]);

  useEffect(() => {
    console.log('Cart changed: ', cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {localStorage.getItem('access_token') ? <DBCart /> : <StorageCart />}
      {children}
    </CartContext.Provider>
  );
}

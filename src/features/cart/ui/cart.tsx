'use client'; // eslint-disable-line
import React, { useState } from 'react';
import { CartContext } from '../model/context';
import { TItemCart } from '../model/type';
import { DBCart } from './DBCart';
import { StorageCart } from './StorageCart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<TItemCart[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {localStorage.getItem('access_token') ? <DBCart /> : <StorageCart />}
      {children}
    </CartContext.Provider>
  );
}

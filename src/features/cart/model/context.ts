import { createContext, Dispatch, SetStateAction } from 'react';
import { TItemCart } from './type';

type CartContextType = {
  cart: TItemCart[];
  setCart: Dispatch<SetStateAction<TItemCart[]>>;
};

export const CartContext = createContext({} as CartContextType);

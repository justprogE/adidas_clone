import { createContext, Dispatch, SetStateAction } from 'react';
import { IProductCart } from '@/entities/cart/model/type';

type CartContextType = {
  cart: IProductCart[];
  setCart: Dispatch<SetStateAction<IProductCart[]>>;
};

export const CartContext = createContext({} as CartContextType);

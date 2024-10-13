import { createContext, Dispatch, SetStateAction } from 'react';
import { IProductFavorites } from './type';

type FavoritesContextType = {
  favorites: IProductFavorites[];
  setFavorites: Dispatch<SetStateAction<IProductFavorites[]>>;
};

export const FavoritesContext = createContext({} as FavoritesContextType);

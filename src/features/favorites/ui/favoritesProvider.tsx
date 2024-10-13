import React, { useEffect, useState } from 'react';
import { IProductFavorites } from '../model/type';
import { FavoritesContext } from '../model/context';
import { Favorites } from './favorites';

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<IProductFavorites[]>([]);

  useEffect(() => {
    console.log('favorites changed: ', favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {!localStorage.getItem('access_token') && <Favorites />}
      {children}
    </FavoritesContext.Provider>
  );
}

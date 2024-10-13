import React, { useContext, useEffect } from 'react';
import { sessionQueries } from '@/entities/session/api';
import { productsQueries } from '@/entities/product/api';
import { convertToItemsFavorites } from '@/entities/favorites';
import { FavoritesContext } from '../model/context';

export function Favorites() {
  const { setFavorites } = useContext(FavoritesContext);
  const { data } = sessionQueries.get();
  const { refetch } = productsQueries.products({
    ids: data?.user?.cart?.map((product) => product.productId),
  });

  async function addItemsFavorites() {
    try {
      if (data?.user) {
        const products = await refetch({
          ids: data?.user?.cart?.map((product) => product.productId),
        });
        const itemsCart = convertToItemsFavorites(
          data?.user.cart,
          products?.data?.products,
        );
        return setFavorites(itemsCart as []);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    (async () => await addItemsFavorites())();
  }, [data?.user.favorites]);
  return <></>;
}

import { IProductCart } from '../model/type';

export const convertToItemsDB = (cart: IProductCart[]) => {
  const result = [...cart];
  return result.map((item) => ({
    productId: item.id,
    quantity: item.quantity,
    size: item.size,
  }));
};

import { IProduct } from '@/entities/product/@x/type';

export const convertToItemsCart = (
  cart: { productId: string; quantity: number; size: string }[],
  products: IProduct[],
) => {
  const result = [...cart];
  return result.map((item) => {
    const product = products?.find(
      (productDb) => productDb.id === item.productId,
    );
    return {
      ...product,
      size: item.size,
      quantity: item.quantity,
    };
  });
};

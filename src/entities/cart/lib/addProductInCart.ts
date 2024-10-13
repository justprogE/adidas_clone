import { Dispatch, SetStateAction } from 'react';
import { IProduct } from '@/entities/product/@x/type';
import { IProductCart } from '../model/type';

export function addProductInCart(
  productData: IProduct,
  activeSize: string,
  cart: IProductCart[],
  setCart: Dispatch<SetStateAction<IProductCart[]>>,
) {
  const product = cart.find(
    (item) => item.id === productData.id && item.size === activeSize,
  );
  if (product) {
    const arr = [...cart];

    const productIndex = arr
      .map((item) => item.id + item.size)
      .indexOf(productData.id + (product?.size as string));

    arr.splice(productIndex, 1, {
      ...product,
      quantity: product.quantity + 1,
    });

    // Add new cart
    setCart(arr);
    console.log('arr: ', arr);
    return arr;
  }

  setCart([
    ...cart,
    {
      ...productData,
      quantity: 1,
      size: activeSize,
    },
  ]);
  console.log('arr have: ', [
    ...cart,
    {
      ...productData,
      quantity: 1,
      size: activeSize,
    },
  ]);
  return [
    ...cart,
    {
      ...productData,
      quantity: 1,
      size: activeSize,
    },
  ];
}

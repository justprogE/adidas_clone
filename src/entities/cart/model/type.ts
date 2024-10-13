import { IProduct } from '../../product/@x/type';

export interface IProductCart extends IProduct {
  size: string;
  quantity: number;
}

export type IItemDB = {
  productId: string;
  size: string;
  quantity: number;
};

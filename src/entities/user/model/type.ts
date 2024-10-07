export interface IUser {
  id: number;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  vouchers?: string[];
  points?: number;
  cart: {
    productId: string;
    size: string;
    quantity: string;
  }[];
  favorites: string[];
}

export interface IProduct {
  id: string;
  title: string;
  style: string;
  category: string;
  members?: string;
  discount?: string;
  images: {
    image: string;
    hover: string;
    image_description: string;
    image_right: string;
  };
  price: string;
  color: string;
  description: {
    title: string;
    text: string;
  };
}

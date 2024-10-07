import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function MenHoodies() {
  return (
    <ProductsList
      filter={{ category: 'men_hoodies' }}
      title="Up to 50% Off Men's Hoodies & Sweatshirts for adiClub Members"
      desc="adidas men's hoodies offer the perfect blend of comfort and style, keeping you warm while you stay active on chilly days. Equally suited for gym cool downs and lounging at home, choose from a wide selection of soft fleece to sweat-wicking hoodies to match your favorite adidas sweatpants"
    />
  );
}

export default MenHoodies;

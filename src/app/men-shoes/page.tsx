import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function MenShoes() {
  return (
    <ProductsList
      filter={{ category: 'men_shoes' }}
      title="Men's Shoes"
      desc="Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfy slides. Browse styles for "
    />
  );
}

export default MenShoes;

import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function KidsShoes() {
  return (
    <ProductsList
      filter={{ category: 'kids_shoes' }}
      title="Kid's Shoes"
      desc="Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfy slides. Browse styles for "
    />
  );
}

export default KidsShoes;

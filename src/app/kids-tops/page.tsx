import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function KidsShirts() {
  return (
    <ProductsList
      filter={{ category: 'kids_shirts' }}
      title="Kid's Tops"
      desc="Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfy slides. Browse styles for "
    />
  );
}

export default KidsShirts;

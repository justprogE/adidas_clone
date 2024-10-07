import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function KidsShorts() {
  return (
    <ProductsList
      filter={{ category: 'kids_shorts' }}
      title="Kid's Shorts"
      desc="Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and comfy slides. Browse styles for "
    />
  );
}

export default KidsShorts;

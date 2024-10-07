import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function WomenShoes() {
  return (
    <ProductsList
      filter={{ category: 'women_shirts' }}
      title="Women's Tops"
      desc=""
    />
  );
}

export default WomenShoes;

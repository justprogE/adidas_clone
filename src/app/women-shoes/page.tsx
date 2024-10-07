import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function WomenShoes() {
  return (
    <ProductsList
      filter={{ category: 'women_shoes' }}
      title="Women's Shoes"
      desc="From Superstars to slides, you can find the perfect women’s shoes to fit your activity level. Whether you’re training or chilling, you’ll be prepared with top-notch features made for movement."
    />
  );
}

export default WomenShoes;

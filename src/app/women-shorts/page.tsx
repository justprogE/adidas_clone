import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function WomenShoes() {
  return (
    <ProductsList
      filter={{ category: 'women_shorts' }}
      title="Women's Shorts"
      desc="Whether you're running laps or running errands, women's shorts from adidas keep you cool and comfortable. Train, chill or win in a wide selection of shorts."
    />
  );
}

export default WomenShoes;

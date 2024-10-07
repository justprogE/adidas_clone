import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function KidsHoodies() {
  return (
    <ProductsList
      filter={{ category: 'kids_hoodies' }}
      title="Kids Hoodies & Sweatshirts"
      desc="kids hoodies and sweatshirts from adidas offer an ideal extra layer at any time of year. Get go-to comfort and on-trend style for school, play and relaxation."
    />
  );
}

export default KidsHoodies;

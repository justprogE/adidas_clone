import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function NewArrivals() {
  return (
    <div>
      <ProductsList
        filter={{ trending: true }}
        title="New Arrivals: Shoes, Clothing & More"
        desc="Freshen up your wardrobe with new clothes and shoes from adidas. From cutting-edge sportswear to the latest kicks, find the styles you'll love forever."
      />
    </div>
  );
}

export default NewArrivals;

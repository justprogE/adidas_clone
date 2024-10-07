import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function MenShirts() {
  return (
    <div>
      <ProductsList
        filter={{ category: 'men_shirts' }}
        title="Men's Tops"
        desc="Stay active and stylish in men's tops from adidas. If you want a tank for intense workouts or hoodies to keep out the chill, you'll be ready for whatever."
      />
    </div>
  );
}

export default MenShirts;

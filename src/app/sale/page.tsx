import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function MenShirts() {
  return (
    <div>
      <ProductsList
        filter={{ q: '#' }}
        title="Clothes & Shoes on Sale: Up to 40% Off"
        desc="The sale is on, so what are you waiting for? Whether you're doing reps or lighting up the scene, you'll find adidas clothes and shoes on sale that work"
      />
    </div>
  );
}

export default MenShirts;

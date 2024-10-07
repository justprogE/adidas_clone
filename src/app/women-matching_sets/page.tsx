import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function WomenMatchingSets() {
  return (
    <div>
      <ProductsList
        filter={{ category: 'women_sets' }}
        title="Up to 50% Off Women's Matching Sets for adiClub Members"
        desc=""
      />
    </div>
  );
}

export default WomenMatchingSets;

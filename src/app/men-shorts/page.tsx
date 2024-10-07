import React from 'react';
import { ProductsList } from '../../widgets/productsList';

function MenShorts() {
  return (
    <div>
      <ProductsList
        filter={{ category: 'men_shorts' }}
        title="Men's Pants"
        desc="lip on lightweight men’s pants when you want comfortable coverage without worrying about overheating."
      />
    </div>
  );
}

export default MenShorts;

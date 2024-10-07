'use client'; // eslint-disable-line
import React from 'react';
import { useParams } from 'next/navigation';
import { Product } from '@/widgets/product';

function ProductPage() {
  const params = useParams<{ id: string }>();
  return <Product id={params.id} />;
}

export default ProductPage;

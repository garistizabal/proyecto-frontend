import { useState } from 'react';

import { Product } from '@/interfaces/product.interfaces';
import { getProducts } from '@/services/product.services';

export const useFetchProducts = () => {
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  const onFetchProducts = async () => {
    try {
      setIsLoadingProducts(true);
      const products = await getProducts();
      setProducts(products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  return {
    onFetchProducts,
    isLoadingProducts,
    products,
  };
};

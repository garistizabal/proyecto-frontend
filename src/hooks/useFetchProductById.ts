import { useState } from 'react';

import type { Product } from '@/interfaces/product.interfaces';
import { findProductById } from '@/services/product.services';

export const useFetchProductById = () => {
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);
  const [product, setProduct] = useState<Product>();

  const onFetchProduct = async (id: string) => {
    try {
      setIsLoadingProduct(true);
      const product = await findProductById(id);
      setProduct(product);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingProduct(false);
    }
  };

  return {
    onFetchProduct,
    isLoadingProduct,
    product,
  };
};

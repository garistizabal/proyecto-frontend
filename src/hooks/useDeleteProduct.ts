import { useState } from 'react';

import { deleteProduct } from '@/services/product.services';

export const useDeleteProduct = () => {
  const [isDeletingProduct, setIsDeletingProduct] = useState(false);

  const onDeleteProduct = async (id: string) => {
    try {
      setIsDeletingProduct(true);

      await deleteProduct(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeletingProduct(false);
    }
  };

  return {
    onDeleteProduct,
    isDeletingProduct,
  };
};

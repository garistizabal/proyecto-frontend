import { useState } from 'react';

import { type IProductForm } from '@/components/ProductForm';
import { createProduct, updateProduct } from '@/services/product.services';

export const useSaveProduct = () => {
  const [isSavingProduct, setIsSavingProduct] = useState(false);

  const onSaveProduct = async (product: IProductForm) => {
    try {
      setIsSavingProduct(true);

      if (!product.id) {
        await createProduct(product);
      } else {
        const { id, ...productData } = product;
        await updateProduct(id, productData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSavingProduct(false);
    }
  };

  return {
    onSaveProduct,
    isSavingProduct,
  };
};

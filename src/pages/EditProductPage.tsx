import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ProductForm } from '@/components/ProductForm';
import { useFetchProductById } from '@/hooks/useFetchProductById';

const EditProductPage = () => {
  const params = useParams<{ id: string }>();
  const { isLoadingProduct, onFetchProduct, product } = useFetchProductById();

  useEffect(() => {
    if (params.id) onFetchProduct(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full px-5 py-4 lg:w-2/5 md:w-1/2">
        {isLoadingProduct ? (
          <LoadingSpinner size="md" className="text-indigo-600" />
        ) : (
          <ProductForm
            productToEdit={product}
            formTitle="Edit Product"
            buttonText="Update"
          />
        )}
      </div>
    </div>
  );
};

export default EditProductPage;

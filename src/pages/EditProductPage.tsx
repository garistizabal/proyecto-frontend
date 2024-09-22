import { ProductForm } from '@/components/ProductForm';
import { Product } from '@/interfaces/product.interfaces';

const product: Product = {
  id: '1',
  name: 'Product 1',
  description: 'This is product 1',
  price: 100,
  stock: 10,
};

const EditProductPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full px-5 py-4 lg:w-2/5 md:w-1/2">
        <ProductForm
          productToEdit={product}
          formTitle="Edit Product"
          buttonText="Update"
        />
      </div>
    </div>
  );
};

export default EditProductPage;

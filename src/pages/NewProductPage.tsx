import { ProductForm } from '@/components/ProductForm';

const NewProductPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full px-5 py-4 lg:w-2/5 md:w-1/2">
        <ProductForm formTitle='New Product' buttonText='Create'/>
      </div>
    </div>
  );
};

export default NewProductPage;

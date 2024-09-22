import type { Product } from '@/interfaces/product.interfaces';

interface Props {
  productToEdit?: Product;
  formTitle: string;
  buttonText: string;
}

export interface IProductForm {
  id?: string;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const ProductForm: React.FC<Props> = ({
  productToEdit,
  formTitle,
  buttonText,
}) => {
  console.log(productToEdit);

  const handleSaveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('saving');
  };

  return (
    <form
      className="min-w-full p-10 bg-white border rounded-lg shadow-lg"
      onSubmit={handleSaveProduct}
    >
      <h1 className="mb-6 font-sans text-2xl font-bold text-center text-gray-600">
        {formTitle}
      </h1>

      <div className="flex flex-col gap-3">
        <div className="space-y-3">
          <label className="block font-semibold text-gray-800 text-md" htmlFor="name">
            Name
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="text"
            name="name"
            id="name"
            placeholder="name"
          />
        </div>

        <div className="space-y-3">
          <label className="block font-semibold text-gray-800 text-md" htmlFor="price">
            Price
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="number"
            name="price"
            id="price"
            placeholder="price"
          />
        </div>

        <div className="space-y-3">
          <label
            className="block font-semibold text-gray-800 text-md"
            htmlFor="description"
          >
            Description
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="text"
            name="description"
            id="description"
            placeholder="description"
          />
        </div>

        <div className="space-y-3">
          <label className="block font-semibold text-gray-800 text-md" htmlFor="stock">
            Stock
          </label>
          <input
            required
            className="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none"
            type="number"
            name="stock"
            id="stock"
            placeholder="stock"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-3 mt-6 font-sans text-lg font-semibold tracking-wide text-white transition-all bg-indigo-500 rounded hover:bg-indigo-600 disabled:opacity-50"
      >
        {buttonText}
      </button>
    </form>
  );
};

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { ProductsTableRow } from './ProductsTableRow';
import { Product } from '@/interfaces/product.interfaces';

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'Description 1',
    stock: 10,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    description: 'Description 2',
    stock: 20,
  },
];

export const ProductsTable = () => {
  return (
    <div className="py-4 overflow-x-auto">
      <Link
        to="/products/new"
        className="inline-block px-4 py-2 text-xs font-medium text-white transition-all bg-indigo-600 rounded hover:bg-indigo-700"
      >
        <MdAdd className="size-6" />
      </Link>

      <table className="min-w-full mt-3 text-sm bg-white divide-y-2 divide-gray-200">
        <thead className="text-left">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              Name
            </th>
            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              Price
            </th>
            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              Description
            </th>
            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
              Stock
            </th>
            <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <ProductsTableRow product={product} showActions />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

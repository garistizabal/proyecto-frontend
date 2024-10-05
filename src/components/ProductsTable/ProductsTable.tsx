import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { useFetchProducts } from '@/hooks/useFetchProducts';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useAuthStore } from '@/stores/auth.store';

import { ProductsTableRow } from './ProductsTableRow';

export const ProductsTable = () => {
  const { isLoadingProducts, onFetchProducts, products } = useFetchProducts();
  const authStore = useAuthStore();

  const isAdmin = authStore.user?.isAdmin;

  useEffect(() => {
    onFetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-4 overflow-x-auto">
      {isAdmin && (
        <Link
          to="/products/new"
          className="inline-block px-4 py-2 text-xs font-medium text-white transition-all bg-indigo-600 rounded hover:bg-indigo-700"
        >
          <MdAdd className="size-6" />
        </Link>
      )}

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
            {isAdmin && (
              <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap"></th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <ProductsTableRow product={product} showActions={isAdmin} />
            </tr>
          ))}
        </tbody>
      </table>

      {isLoadingProducts && <LoadingSpinner size="md" className="text-indigo-600" />}
    </div>
  );
};

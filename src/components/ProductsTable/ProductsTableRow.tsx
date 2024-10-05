import { Link, useNavigate } from 'react-router-dom';

import type { Product } from '@/interfaces/product.interfaces';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDeleteProduct } from '@/hooks/useDeleteProduct';

interface Props {
  product: Product;
  showActions?: boolean;
}

export const ProductsTableRow: React.FC<Props> = ({ product, showActions }) => {
  const navigate = useNavigate();

  const { isDeletingProduct, onDeleteProduct } = useDeleteProduct();

  const handleDelete = async () => {
    await onDeleteProduct(product.id);

    navigate('/');
  };

  return (
    <>
      <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
        {product.name}
      </td>
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">${product.price}</td>
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{product.description}</td>
      <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{product.stock}</td>

      {showActions && (
        <td className="flex gap-2 px-4 py-2 text-gray-700 whitespace-nowrap">
          <Link
            to={`/products/edit/${product.id}`}
            className="inline-block px-4 py-2 text-xs font-medium text-white transition-all bg-indigo-600 rounded hover:bg-indigo-700"
          >
            <MdEdit className="size-6" />
          </Link>
          <button
            onClick={handleDelete}
            disabled={isDeletingProduct}
            className="inline-block px-4 py-2 text-xs font-medium text-indigo-600 transition-all bg-white border border-indigo-600 rounded hover:bg-indigo-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <MdDelete className="size-6" />
          </button>
        </td>
      )}
    </>
  );
};

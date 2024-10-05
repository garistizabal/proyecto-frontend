import { productsApi } from '@/api/productsApi';
import { type IProductForm } from '@/components/ProductForm';
import type { Product } from '@/interfaces/product.interfaces';

export const getProducts = async () => {
  const { data } = await productsApi.get<Product[]>('/products');

  return data;
};

export const createProduct = async (product: IProductForm) => {
  const { data } = await productsApi.post<Product>('/products', product);

  return data;
};

export const findProductById = async (id: string) => {
  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data;
};

export const updateProduct = async (id: string, product: IProductForm) => {
  const { data } = await productsApi.put<Product>(`/products/${id}`, product);

  return data;
};

export const deleteProduct = async (id: string) => {
  await productsApi.delete<Product>(`/products/${id}`);
};

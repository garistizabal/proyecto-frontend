import { productsApi } from '@/api/productsApi';

import { type ILoginForm } from '@/components/LoginForm';
import type { User } from '@/interfaces/user.interfaces';

export const login = async ({ email, password }: ILoginForm) => {
  const { data } = await productsApi.get<User[]>('/users', {
    params: { email, password },
  });

  return data;
};

export const checkAuth = async (id: string, email: string) => {
  const { data } = await productsApi.get<User[]>('/users', {
    params: { id, email },
  });

  return data;
};

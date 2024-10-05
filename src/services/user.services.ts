import { productsApi } from '@/api/productsApi';
import { type IRegisterForm } from '@/components/RegisterForm';
import { User } from '@/interfaces/user.interfaces';


export const register = async (registerData: IRegisterForm) => {
  const { data } = await productsApi.post<User>('/users', registerData);

  return data;
};
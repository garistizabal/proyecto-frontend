import { useState } from 'react';

import { type IRegisterForm } from '@/components/RegisterForm';
import { register } from '@/services/user.services';

export const useRegister = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const onRegister = async (registerData: IRegisterForm) => {
    try {
      setIsRegistering(true);
      await register(registerData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRegistering(false);
    }
  };

  return {
    onRegister,
    isRegistering,
  };
};

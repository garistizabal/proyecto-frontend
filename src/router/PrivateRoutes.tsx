import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '@/stores/auth.store';

const PrivateRoutes = () => {
  const authStore = useAuthStore();

  if (!authStore.user) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default PrivateRoutes;

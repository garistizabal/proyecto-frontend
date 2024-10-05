import { Navigate, Outlet } from 'react-router-dom';

import { useAuthStore } from '@/stores/auth.store';

const PublicRoutes = () => {
  const authStore = useAuthStore();

  if (authStore.user) return <Navigate to="/products" replace />;

  return <Outlet />;
};

export default PublicRoutes;

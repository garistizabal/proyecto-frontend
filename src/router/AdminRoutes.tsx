import { useAuthStore } from '@/stores/auth.store';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {
  const authStore = useAuthStore();

  if (!authStore?.user?.isAdmin) return <Navigate to="/products" replace />;

  return <Outlet />;
};

export default AdminRoutes;

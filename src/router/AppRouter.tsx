import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

import HomePage from '@/pages/HomePage';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import ProductsPage from '@/pages/ProductsPage';
import NewProductPage from '@/pages/NewProductPage';
import EditProductPage from '@/pages/EditProductPage';
import NotFoundPage from '@/pages/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Private Routes */}
        <Route element={<MainLayout />}>
          <Route path="/products" element={<ProductsPage />} />

          {/* Admin Routes */}
          <Route path="/products/new" element={<NewProductPage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import { Outlet } from 'react-router-dom';

import { MainFooter } from '@/components/MainFooter';
import { MainNavbar } from '@/components/MainNavbar';

const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default MainLayout;

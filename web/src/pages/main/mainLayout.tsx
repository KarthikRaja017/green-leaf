import HeaderComponent from '../Header';
import Footer from '../footer';
import { Outlet } from '@umijs/max';

const MainLayout = () => {
  return (
    <>
      <HeaderComponent />
      <div style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>
        <Outlet /> 
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
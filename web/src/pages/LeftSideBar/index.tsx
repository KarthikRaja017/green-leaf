import AddsContainer from '../adds/adds';
import MostViewedProductsBar from './mostViewedProductsBar';
import NewProductsBar from './newProductsBar';
import ShopByCategoryBar from './ShopByCategoryBar';

const LeftSideBar = () => {
  return (
    <>
      <div style={{ padding: '100px 40px' }}>
        <ShopByCategoryBar/>
        <AddsContainer flatOff={'Flats Upto 60% Off'} />
        <div style={{ padding: '40px 0' }}>
          <NewProductsBar />
        </div>
        <MostViewedProductsBar />
      </div>
    </>
  );
};

export default LeftSideBar;

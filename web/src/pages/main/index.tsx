import { PageHelmet } from '@/comman';
import HeaderComponent from '../Header';
import DeliveryBanner from '../banner/deliveryBanner';
import BannerComponent from '../banner/mainBanner';
import SubBanner from '../banner/subBanner';
import Features from '../features/features';
import Footer from '../footer';
import BestDeals from '../productOffers/bestDeals';
import ProductOffersStageOne from '../productOffers/productOffersStageOne';
import ProductOffersStageTwo from '../productOffers/productOffersStageTwo';
import WeekLyProductOffers from '../productOffers/weeklyProductOffers';
import FeaturedProducts from '../products/featuredProducts';
import NewProducts from '../products/newProducts';
import ShopByCategory from '../shopByCategory/ShopByCategory';
import BestsellerProducts from '../products/bestsellerProducts';
import Testimonials from '../testimonials';
import GEFooter from '../footer';

const MainApp = () => {
  return (
    <>
      <PageHelmet />
      <HeaderComponent />
      <BannerComponent />
      <Features />
      <ShopByCategory />
      <ProductOffersStageOne />
      <NewProducts />
      <DeliveryBanner />
      <FeaturedProducts />
      <ProductOffersStageTwo />
      <SubBanner />
      <WeekLyProductOffers />
      <BestDeals />
      <Testimonials/>
      <BestsellerProducts/>
      <GEFooter />
    </>
  );
};
export default MainApp;

import { CustomSubTitle, CustomTitle, useIsMobile } from '@/comman';
import { useState } from 'react';
import { theme } from '../components/theme';
import ProductCard from './dealsCard';
const products = [
  {
    badgeText: '-20%',
    badgeColor: '#f5222d',
    title: 'Swing paper boat swing juicier drink',
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner4.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner3.jpg',
    discountedPrice: '28.00',
    originalPrice: '35.00',
    available: 90,
    progress: 70,
    rating: 4.5,
    endDate: '2025-01-30T23:59:59',
  },
  {
    badgeText: '-18%',
    badgeColor: '#fa8c16',
    title: 'Golden grains for your healthy diet',
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner1.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner2.jpg',
    discountedPrice: '22.00',
    originalPrice: '30.00',
    available: 120,
    progress: 50,
    rating: 3.5,
    endDate: '2025-01-30T23:59:59',
  },
  {
    badgeText: '-18%',
    badgeColor: '#fa8c16',
    title: 'Golden grains for your healthy diet',
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner1.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner2.jpg',
    discountedPrice: '22.00',
    originalPrice: '30.00',
    available: 120,
    progress: 50,
    rating: 3.5,
    endDate: '2025-01-30T23:59:59',
  },
  {
    badgeText: '-18%',
    badgeColor: '#fa8c16',
    title: 'Golden grains for your healthy diet',
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner1.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner2.jpg',
    discountedPrice: '22.00',
    originalPrice: '30.00',
    available: 120,
    progress: 50,
    rating: 3.5,
    endDate: '2025-01-30T23:59:59',
  },
  {
    badgeText: '-18%',
    badgeColor: '#fa8c16',
    title: 'Golden grains for your healthy diet',
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner1.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner2.jpg',
    discountedPrice: '22.00',
    originalPrice: '30.00',
    available: 120,
    progress: 50,
    rating: 3.5,
    endDate: '2025-01-30T23:59:59',
  },
  {
    badgeText: '-18%',
    badgeColor: '#fa8c16',
    title: 'Golden grains for your healthy diet',
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner1.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner2.jpg',
    discountedPrice: '22.00',
    originalPrice: '30.00',
    available: 120,
    progress: 50,
    rating: 3.5,
    endDate: '2025-01-30T23:59:59',
  },
  {
    badgeText: '-18%',
    badgeColor: '#fa8c16',
    title: 'Golden grains for your healthy diet',
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner1.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner2.jpg',
    discountedPrice: '22.00',
    originalPrice: '30.00',
    available: 120,
    progress: 50,
    rating: 3.5,
    endDate: '2025-01-30T23:59:59',
  },
];
const BestDeals = () => {
  const isMobile = useIsMobile();
  const visibleCards = isMobile ? 2 : 6;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: isMobile ? '10px 20px' : '10px 0px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomSubTitle title={'Trending item'} />
      <CustomTitle title={'Best deals of week'} />
      <div style={{ width: '96%', marginLeft: '50px' }}>
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};
export default BestDeals;

export const ProductCarousel = ({ products }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(true);
  const cardsToShow = 3;

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - cardsToShow < 0 ? 0 : prevIndex - cardsToShow));
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsToShow >= products.length
        ? products.length - cardsToShow
        : prevIndex + cardsToShow,
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 20px',
        position: 'relative',
        width: '100%',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: theme.colors.white,
            color: theme.colors.black,
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            position: 'absolute',
            left: '25px',
            fontSize: theme.icons.secondary,
            zIndex: '1000',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          &#8592;
        </button>
      )}

      <div
        style={{
          display: 'flex',
          gap: '15px',
          overflow: 'hidden',
          width: '1500px',
          padding: '20px 30px',
        }}
      >
        {products.slice(startIndex, startIndex + cardsToShow).map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {isHovered && (
        <button
          onClick={nextSlide}
          style={{
            backgroundColor: theme.colors.white,
            color: theme.colors.black,
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            position: 'absolute',
            right: '35px',
            fontSize: theme.icons.secondary,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          &#8594;
        </button>
      )}
    </div>
  );
};

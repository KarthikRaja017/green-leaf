import { useIsMobile } from '@/comman';
import ProductOffersCard from './productOffersCard';
const productData = [
  {
    badgeText: 'Biggest Deals',
    badgeColor: '#f4c340',
    title: 'Bell peppers with many colors on sale',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner2/views/img/cms-banner1.jpg',
  },
  {
    badgeText: '-20% Off',
    badgeColor: '#f26222',
    title: 'Experience the best fresh fruits',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner2/views/img/cms-banner2.jpg',
  },
  {
    badgeText: 'Up to 50% Off',
    badgeColor: '#ff0800',
    title: 'Satisfy sweet tooth with lychee',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner2/views/img/cms-banner3.jpg',
  },
];
const ProductOffersStageOne = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', padding: isMobile ? '10px 20px' : '10px 0px' }}>
        <ProductOffersCard data={productData} />
      </div>
    </>
  );
};

export default ProductOffersStageOne;

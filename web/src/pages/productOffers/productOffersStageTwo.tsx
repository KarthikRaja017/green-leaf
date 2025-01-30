import { useIsMobile } from '@/comman';
import ProductOffersCard from './productOffersCard';
const productData = [
  {
    badgeText: '-18% Off',
    badgeColor: '#ff0800',
    title: 'We will handle the care of products',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner4/views/img/cms-banner1.jpg',
  },
  {
    badgeText: 'Limited Time Offer',
    badgeColor: '#f4c340',
    title: 'Workshop for full grain baking',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner4/views/img/cms-banner2.jpg',
  },
  {
    badgeText: '-20% Off',
    badgeColor: '#347758',
    title: 'A streamlining your food journey',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner4/views/img/cms-banner3.jpg',
  },
];
const ProductOffersStageTwo = () => {
    const isMobile = useIsMobile();
  
  return (
    <>
      <div style={{ display: 'flex', gap: '20px', padding: isMobile ? '10px 20px' : '10px 0px' }}>
        <ProductOffersCard data={productData} />
      </div>
    </>
  );
};

export default ProductOffersStageTwo;

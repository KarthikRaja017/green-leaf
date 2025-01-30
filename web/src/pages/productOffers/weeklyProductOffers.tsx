import { CustomSubTitle, CustomTitle, useIsMobile } from '@/comman';
import ProductOffersCard from './productOffersCard';
const productData = [
  {
    badgeText: '-18% Off',
    badgeColor: '#f4c340',
    title: 'Honoring taste and texture together',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner1.jpg',
  },
  {
    badgeText: 'Biggest Deals',
    badgeColor: '#ff0800',
    title: 'Grain of pure sweetness golden',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner2.jpg',
  },
  {
    badgeText: '-20% Off',
    badgeColor: '#347758',
    title: 'Stay strong with the power of milk',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner3.jpg',
  },
  {
    badgeText: 'Today Offer',
    badgeColor: '#f26222',
    title: 'Golden spice for every kitchen',
    description: 'Shop Now',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner5/views/img/cms-banner4.jpg',
  },
];
const WeekLyProductOffers = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile ? '10px 20px' : '10px 0px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomSubTitle title={'My collection'} />
        <CustomTitle title={'Best deals of week'} />
        <div style={{padding:'30px 0'}}>
          <ProductOffersCard
            data={productData}
            width={isMobile ? 'auto' : '310px'}
            height={isMobile ? 'auto' : '450px'}
            badgeTop={isMobile ? '1%' : '5%'}
            contentWidth={'80%'}
            contentTop={isMobile ? '20px' : '60px'}
          />
        </div>
      </div>
    </>
  );
};

export default WeekLyProductOffers;

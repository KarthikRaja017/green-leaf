import { useIsMobile } from '@/comman';
import { useState } from 'react';
import HeaderBanner from './headerBanner';
import PrimaryHeader from './primaryHeader';
import SecondaryHeader from './secondaryHeader';
import TertiaryHeader from './tertiaryHeader';

const HeaderComponent = () => {
  const isMobile = useIsMobile();
  const [offer, setOffer] = useState(30);
  const [deliveryTime, setDeliveryTime] = useState(
    'Delivery on next day from 08:00 AM to 08:00 PM',
  );

  return (
    <div style={{ overflow: 'auto' }}>
      <HeaderBanner offer={offer} />
      {!isMobile && <SecondaryHeader deliveryTime={deliveryTime} />}
      <PrimaryHeader />
      <TertiaryHeader />
    </div>
  );
};

export default HeaderComponent;

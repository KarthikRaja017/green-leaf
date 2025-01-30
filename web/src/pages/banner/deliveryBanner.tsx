import { CustomSubTitle, useIsMobile } from '@/comman';
import { Button } from 'antd';
import { theme } from '../components/theme';

const DeliveryBanner = () => {
  const isMobile = useIsMobile();

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginLeft: '10px',
    position: 'relative',
  };

  const containerStyle = {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 100px',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '53%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    borderRadius: '10px',
    padding: '0 100px',
    zIndex: 2,
  };

  const buttonStyle = {
    padding: '20px 30px',
    backgroundColor: theme.colors.highlight,
    color: theme.colors.white,
    border: 'none',
    borderRadius: '7px',
  };

  return (
    <div
      style={{
        display: isMobile ? 'none' : 'flex',
        ...containerStyle,
      }}
    >
      <img
        src={
          'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_cmsbanner3/views/img/cms-banner1.png'
        }
        alt="Delivery Scooter"
        style={imageStyle}
      />
      <div style={textOverlayStyle}>
        <div style={{ color: theme.colors.white, fontSize: theme.fontSizes.big }}>
          {' '}
          <h5 style={{ marginBottom: '5px' }}>Delivery on Next Day From 08:00 AM to 08:00 PM</h5>
        </div>
        <CustomSubTitle
          title={'Get all latest information on events, sales offers in your store'}
          color={theme.colors.white}
        />
        <div style={{ marginBottom: '20px' }}></div>
        <Button style={buttonStyle}>
          <h4 style={{ marginTop: '5px' }}>Shop Now</h4>
        </Button>
      </div>
    </div>
  );
};

export default DeliveryBanner;

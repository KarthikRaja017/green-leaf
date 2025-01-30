import { useIsMobile } from '@/comman';

const SubBanner = () => {
  const isMobile = useIsMobile();
  const containerStyle = {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 100px',
    width: '100%',
  };
  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  };

  return (
    <>
      <div
        style={{
          display: isMobile ? 'none' : 'flex',
          ...containerStyle,
        }}
      >
        <img
          src={
            'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categoryproductsslider/views/img/9-cp_categoryproductsslider.jpg'
          }
          alt="Delivery Scooter"
          style={imageStyle}
        />
      </div>
    </>
  );
};

export default SubBanner;

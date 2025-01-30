import { useIsMobile } from '@/comman';
import { Button, Carousel } from 'antd';
import { theme } from '../components/theme';

const MainBanner = () => {
  const isMobile = useIsMobile();

  const slides = [
    {
      image:
        'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_imageslider/views/img/sample-1.jpg',
      title: 'Various vegetables & fruits available at your store',
      description: 'Vegetables are parts of plants that are consumed.',
      buttonText: 'Shop Now',
    },
    {
      image:
        'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_imageslider/views/img/sample-2.jpg',
      title: 'Enrich your feed among some chili love',
      description: 'Vegetables are parts of plants that are consumed.',
      buttonText: 'Shop Now',
    },
    {
      image:
        'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_imageslider/views/img/sample-3.jpg',
      title: 'All Fruits & Veggies Are Offered At Your Store',
      description: 'Vegetables Are Parts Of Plants That Are Consumed.',
      buttonText: 'Shop Now',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        margin: isMobile ? '18px 18px' : '50px 70px',
        marginTop:'90px'
      }}
    >
      <Carousel autoplay effect="fade" autoplaySpeed={1000}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                height: isMobile ? '150px' : '475px',
                overflow: 'hidden',
                borderRadius: '10px',
                position: 'relative',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '5%',
                  transform: 'translateY(-50%)',
                  color: 'black',
                  padding: isMobile ? '10px' : '20px',
                  borderRadius: '10px',
                  maxWidth: isMobile ? '90%' : '40%',
                }}
              >
                {!isMobile && (
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '5px 15px',
                      backgroundColor: theme.colors.white,
                      color: theme.colors.black,
                      fontSize: theme.fontSizes.primary,
                      fontWeight: 'bold',
                      borderRadius: '20px 0px 20px 0px',
                      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    Organic Foods
                  </div>
                )}

                <h1
                  style={{
                    fontSize: isMobile ? theme.fontSizes.primary : theme.fontSizes.big,
                    marginBottom: isMobile ? '5px' : '10px',
                  }}
                >
                  {slide.title}
                </h1>
                <p
                  style={{
                    fontSize: isMobile ? theme.fontSizes.tertiary : theme.fontSizes.primary,
                    marginBottom: isMobile ? '5px' : '10px',
                  }}
                >
                  {slide.description}
                </p>
                <Button
                  type="primary"
                  style={{
                    fontSize: theme.fontSizes.primary,
                    padding: isMobile ? '8px 15px' : '20px 30px',
                    backgroundColor: theme.colors.primary,
                    borderColor: theme.colors.primary,
                  }}
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainBanner;

import { CustomCarousel, CustomSubTitle, CustomTitle, useIsMobile } from '@/comman';
import ProductCard from './productCard';
const products = [
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/164-home_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/166-large_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    subtitle: 'Arctic Garden',
    title: 'Bundle of blue grapes with a green leaf',
    rating: 4.0,
    price: 30.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/159-large_default/crispy-fruit-freen-orange-dried-fruit.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/160-home_default/crispy-fruit-freen-orange-dried-fruit.jpg',
    subtitle: 'Bonzime',
    title: 'Crispy fruit freen orange dried fruit',
    rating: 5,
    price: 90.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/154-large_default/green-lemon-fruit-indoor-outdoor-plant.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/155-home_default/green-lemon-fruit-indoor-outdoor-plant.jpg',
    subtitle: 'Essential vegan',
    title: 'Green lemon fruit indoor & outdoor plant',
    rating: 4.5,
    price: 45.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/149-large_default/organic-world-kashmiri-red-chilly-powder.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/150-home_default/organic-world-kashmiri-red-chilly-powder.jpg',
    subtitle: 'foodland',
    title: 'Organic world kashmiri red chilly powder',
    rating: 3.0,
    price: 80.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/144-large_default/radish-red-long-beetroot-orange-nantes.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/145-home_default/radish-red-long-beetroot-orange-nantes.jpg',
    subtitle: 'Fresh market',
    title: 'Radish red long beetroot & orange nantes',
    rating: 3.5,
    price: 40.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/135-large_default/roasted-freeze-mix-blue-combo-dispenser.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/149-large_default/organic-world-kashmiri-red-chilly-powder.jpg',
    subtitle: 'Freshdirect',
    title: 'Roasted freeze mix blue combo dispenser',
    rating: 4.0,
    price: 140.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/164-home_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/166-large_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    subtitle: 'Essential vegan',
    title: 'Green lemon fruit indoor & outdoor plant',
    rating: 4.5,
    price: 45.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/164-home_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/166-large_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    subtitle: 'Essential vegan',
    title: 'Green lemon fruit indoor & outdoor plant',
    rating: 4.5,
    price: 45.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/164-home_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/166-large_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    subtitle: 'Essential vegan',
    title: 'Green lemon fruit indoor & outdoor plant',
    rating: 4.5,
    price: 45.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
  {
    image1:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/164-home_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    image2:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/166-large_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    subtitle: 'Essential vegan',
    title: 'Gre',
    rating: 4.5,
    price: 45.0,
    onAddToCart: () => alert('Added to Cart!'),
  },
];
const NewProducts = () => {
  const isMobile = useIsMobile();

  const visibleCards = isMobile ? 2 : 6;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '20px 0' : '30px 0px',
      }}
    >
      <CustomSubTitle title={'Trending item'} />
      <CustomTitle title={'New products'} />
      <div style={{ width: '95%', marginLeft: '50px' }}>
        <CustomCarousel
          items={products}
          visibleCards={visibleCards}
          gap={isMobile ? '5px' : '20px'}
          renderCards={(products) =>
            products.map((product, index) => <ProductCard key={index} data={product} flag={true} />)
          }
          arrowLeft={isMobile ? '30px' : '34px'}
          arrowRight={isMobile ? '30px' : '47px'}
        />
      </div>
    </div>
  );
};

export default NewProducts;

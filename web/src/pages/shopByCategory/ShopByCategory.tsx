import { CustomCarousel, CustomSubTitle, CustomTitle, useIsMobile } from '@/comman';
import { theme } from '../components/theme';

const categories = [
  {
    id: 1,
    name: 'Juice',
    items: 24,
    color: '#f0fff4',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/6-cp_categorylist.jpg',
  },

  {
    id: 2,
    name: 'Vegetables',
    items: 21,
    color: '#fffaf0',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/9-cp_categorylist.jpg',
  },

  {
    id: 3,
    name: 'Fruits',
    items: 24,
    color: '#fff5f5',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/32-cp_categorylist.jpg',
  },

  {
    id: 4,
    name: 'Cold Drinks',
    items: 20,
    color: '#f8f5ff',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/33-cp_categorylist.jpg',
  },

  {
    id: 5,
    name: 'Cookies',
    items: 24,
    color: '#f0fff4',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/34-cp_categorylist.jpg',
  },

  {
    id: 6,
    name: 'Cooking Spice',
    items: 22,
    color: '#fff5f5',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/35-cp_categorylist.jpg',
  },

  {
    id: 7,
    name: 'Nuts & Seeds',
    items: 24,
    color: '#f0fff4',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/36-cp_categorylist.jpg',
  },

  {
    id: 8,
    name: 'Pretzels',
    items: 24,
    color: '#fff5f5',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/37-cp_categorylist.jpg',
  },
  {
    id: 9,
    name: 'Cruciferous',
    items: 24,
    color: '#fcede8',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_categorylist/views/img/38-cp_categorylist.jpg',
  },

  {
    id: 10,
    name: 'Toys',
    items: 24,
    color: '#f8f5ff',
    image:
      'https://png.pngtree.com/png-clipart/20241121/original/pngtree-kids-toys-png-image_17275409.png',
  },
];

const ShopByCategory = () => {
  const isMobile = useIsMobile();
  const visibleCards = isMobile ? 2 : 8;
  const cardWidth = isMobile ? '100%' : `calc((100% - 50px) / ${visibleCards})`;

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: isMobile ? '20px 0' : '30px 10px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomSubTitle title={'Latest collection'} />
        <CustomTitle title={'Shop by category'} />
        <CustomCarousel
          items={categories}
          visibleCards={visibleCards}
          autoScroll={true}
          gap={'10px'}
          renderCards={(currentCards) =>
            currentCards.map((category) => (
              <CategoryCard key={category.id} category={category} cardWidth={cardWidth} />
            ))
          }
        />
      </div>
    </>
  );
};

export default ShopByCategory;

const CategoryCard = ({ category, cardWidth }) => {
  return (
    <div
      key={category.id}
      style={{
        backgroundColor: category.color,
        width: cardWidth,
        height: '220px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '90%',
          height: '70%',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <img
          src={category.image}
          alt={category.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>
      <h3 style={{ margin: '10px 0 5px', fontSize: theme.fontSizes.secondary }}>{category.name}</h3>
      <p
        style={{
          margin: 0,
          fontSize: theme.fontSizes.tertiary,
          color: theme.colors.darkHighlight,
          marginBottom: '20px',
        }}
      >
        Items ({category.items})
      </p>
    </div>
  );
};

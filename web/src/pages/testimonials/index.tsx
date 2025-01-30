import { CustomSubTitle, CustomTitle, useIsMobile } from '@/comman';
import { useState } from 'react';
import { theme } from '../components/theme';
import TestimonialCard from './testimonialCard';
const cardsToShow = 3;
const testimonials = [
  {
    id: 1,
    testimonial: 'Testimonial 1',
    text: 'Contrary to popular belief, Lorem Ipsu not simply random text. It has roots in piece of classical Latin literature from',
    user: { avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    rating: 5,
  },
  {
    id: 2,
    testimonial: 'Testimonial 2',
    text: 'popular belief, Lorem Ipsu not simply text. It has roots in piece of classical Latin',
    user: { avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    rating: 5,
  },
  {
    id: 3,
    testimonial: 'Testimonial 3',
    text: 'Lorem Ipsu not simply random text. Contrary to popular belief, It has roots in piece of classical Latin literature from The point of using Lorem',
    user: { avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
    rating: 5,
  },
  {
    id: 4,
    testimonial: 'Testimonial 4',
    text: 'It has roots in piece of classical Latin literature from Contrary to popular belief, Lorem Ipsu not simply random text.',
    user: { avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
    rating: 5,
  },
];

const Testimonials = () => {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: isMobile ? '20px 0' : '20px 10px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomSubTitle title={'Trending item'} />
      <CustomTitle title={'Bestseller products'} />
      <div style={{ width: '95%', marginLeft: '0px' }}>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;

export const TestimonialCarousel = ({ testimonials }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(true);

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - cardsToShow < 0 ? 0 : prevIndex - cardsToShow));
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsToShow >= testimonials.length
        ? testimonials.length - cardsToShow
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
            left: '75px',
            fontSize: theme.icons.secondary,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
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
          width: '1200px',
          padding: '20px 0px',
        }}
      >
        {testimonials.slice(startIndex, startIndex + cardsToShow).map((item, index) => (
          <div key={index} style={{ flexShrink: 0 }}>
            <TestimonialCard {...item} />
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
            right: '25px',
            fontSize: theme.icons.secondary,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
          }}
        >
          &#8594;
        </button>
      )}
    </div>
  );
};

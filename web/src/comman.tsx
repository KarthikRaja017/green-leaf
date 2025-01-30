import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ConfigProvider, DatePicker, Typography } from 'antd';
import enUS from 'antd/es/locale/en_US';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { theme } from './pages/components/theme';
import token from './pages/utils/token';

export const Name = 'Greenleaf';
export const Logo = '🍃';
export const ShippingCost = '₹500';
export const PhoneNumber = '+91 9952202256';
export const G_DATE_FORMAT = 'DD/MM/YYYY';

export const getIsMobile = () => window.innerWidth <= 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};

export const PageHelmet = ({
  title = Name,
  vendor = {},
  description = 'Fresh Fruits and Vegetables',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/png"
        href={
          'https://s.tmimgcdn.com/scr/312300/green-leaf-illustration-nature-logo-design_312389-original.gif'
        }
      />
    </Helmet>
  );
};

export const CustomCarousel = (props) => {
  const isMobile = useIsMobile();
  const {
    items,
    visibleCards,
    renderCards,
    autoScroll = false,
    gap = '10px',
    arrowLeft = isMobile ? '30px' : '55px',
    arrowRight = isMobile ? '30px' : '60px',
  } = props;

  const [direction, setDirection] = useState('next');
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(true);

  const handleNext = () => {
    if (startIndex + visibleCards < items.length) {
      isMobile ? setStartIndex((prev) => prev + 1) : setStartIndex((prev) => prev + 2);
    } else {
      setDirection('prev');
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      isMobile ? setStartIndex((prev) => prev - 1) : setStartIndex((prev) => prev - 2);
    } else {
      setDirection('next');
    }
  };

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        if (direction === 'next') {
          if (startIndex + visibleCards < items.length) {
            handleNext();
          } else {
            setDirection('prev');
          }
        } else if (direction === 'prev') {
          if (startIndex > 0) {
            handlePrev();
          } else {
            setDirection('next');
          }
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [autoScroll, direction, startIndex, visibleCards, items.length]);
  const currentCards = items.slice(startIndex, startIndex + visibleCards);
  const getTransformStyle = () => {
    return {
      transform: `translateX(-${startIndex * (1.3 / visibleCards)}%)`,
      transition: 'transform 0.5s ease-in-out',
    };
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '98%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '5px 0px' : '10px 0px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {startIndex > 0 && isHovered && (
        <div
          onClick={handlePrev}
          style={{
            fontSize: theme.icons.primary,
            cursor: 'pointer',
            zIndex: 2,
            color: theme.colors.black,
            position: 'absolute',
            left: arrowLeft,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: theme.colors.white,
            borderRadius: '50%',
            width: isMobile ? '25px' : '30px',
            height: isMobile ? '25px' : '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.8)',
          }}
        >
          <LeftOutlined
            style={{
              fontSize: theme.icons.secondary,
              color: theme.colors.black,
            }}
          />
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: 'calc(100% - 70px)',
          overflow: isMobile ? 'none' : 'hidden',
        }}
      >
        <div
          style={{ display: 'flex', justifyContent: 'center', gap: gap, ...getTransformStyle() }}
        >
          {renderCards ? renderCards(currentCards) : <></>}
        </div>
      </div>

      {startIndex + visibleCards < items.length && isHovered && (
        <div
          onClick={handleNext}
          style={{
            fontSize: theme.icons.primary,
            cursor: 'pointer',
            zIndex: 2,
            color: theme.colors.black,
            position: 'absolute',
            right: arrowRight,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: theme.colors.white,
            borderRadius: '50%',
            width: isMobile ? '25px' : '30px',
            height: isMobile ? '25px' : '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.8)',
          }}
        >
          <RightOutlined
            style={{
              fontSize: theme.icons.secondary,
              color: theme.colors.black,
            }}
          />
        </div>
      )}
    </div>
  );
};

export const CustomSubTitle = (props) => {
  const isMobile = useIsMobile();
  const {
    title,
    fontSize = isMobile ? theme.fontSizes.secondary : theme.fontSizes.primary,
    color = theme.colors.primary,
  } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          fontSize: fontSize,
          color: color,
          margin: '0',
        }}
      >
        {title}
      </div>
    </div>
  );
};

export const CustomTitle = (props) => {
  const isMobile = useIsMobile();
  const {
    title,
    color = theme.colors.black,
    fontSize = isMobile ? theme.fontSizes.small : theme.fontSizes.large,
  } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      }}
    >
      <h5
        style={{
          fontSize: fontSize,
          color: color,
          margin: '0',
          marginLeft: '2%',
        }}
      >
        {title}
      </h5>
    </div>
  );
};

const { Title, Text } = Typography;
export const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const end = new Date(endDate);
    const difference = end - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const theme = {
    colors: {
      lightHighlight: '#f3f4f6',
      black: '#000',
      darkHighlight: '#666',
    },
    fontSizes: {
      tertiary: '12px',
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
      }}
    >
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Mins', value: timeLeft.minutes },
        { label: 'Secs', value: timeLeft.seconds },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: theme.colors.lightHighlight,
            borderRadius: '5px',
            textAlign: 'center',
            padding: '0px 12px',
          }}
        >
          <Title level={5} style={{ margin: 0, color: theme.colors.black }}>
            {item.value}
          </Title>
          <Text
            style={{
              fontSize: theme.fontSizes.tertiary,
              color: theme.colors.darkHighlight,
            }}
          >
            {item.label}
          </Text>
        </div>
      ))}
    </div>
  );
};

export const CustomDatePicker = (props) => {
  return (
    <>
      <ConfigProvider locale={enUS}>
        <DatePicker style={{ width: 100 }} format={G_DATE_FORMAT} {...props} allowClear />
      </ConfigProvider>
    </>
  );
};


export function buildAuthorization() {
  const tokenVal = token.get();
  return tokenVal !== null && tokenVal !== '' && tokenVal !== 'null' ? `Bearer ${tokenVal}` : null;
  // : `Bearer {}`;
}

export const setTokenAndRedirect = async (data) => {
  if (data && data.accessToken) {
    await token.save(data);
  }

  if (data && data.redirectUrl) {
    // redirectTo(data.redirectUrl);
    window.location = data.redirectUrl;
  }
};
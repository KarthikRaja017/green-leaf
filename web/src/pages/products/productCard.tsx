import { useIsMobile } from '@/comman';
import { FullscreenOutlined, HeartOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Rate } from 'antd';
import { useState } from 'react';
import { theme } from '../components/theme';

const ProductCard = ({ data, flag = false }) => {
  const isMobile = useIsMobile();

  const cardStyles = {
    width: isMobile ? '135px' : '200px',
    height: isMobile ? '290px' : '340px',
    borderRadius: '10px',
    overflow: 'hidden',
    position: 'relative',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'transform 0.5s ease',
    boxShadow: 'inset 0 0 0 0.25px rgba(0, 0, 0, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile ? '0' : '8px 3px',
    justifyContent: 'space-between',
  };

  const imageContainerStyles = {
    width: '100%',
    height: '133px',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageWrapperStyles = {
    width: '80%',
    height: '80%',
    position: 'absolute',
    transition: 'transform 0.6s ease',
    transformStyle: 'preserve-3d',
    marginLeft: '20px',
    marginTop: '15px',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backfaceVisibility: 'hidden',
    position: 'absolute',
  };

  const detailsStyles = {
    padding: isMobile ? '5px' : '5px',
    textAlign: 'left',
    marginLeft: '5px',
    position: isMobile ? 'absolute' : 'none',
    top: '100px',
    lineHeight: '1.3',
  };

  const subtitleStyles = {
    fontSize: theme.fontSizes.tertiary,
    color: theme.colors.darkHighlight,
    marginBottom: '2px',
  };

  const titleStyles = {
    fontSize: theme.fontSizes.secondary,
    margin: '2px 0',
  };

  const priceStyles = {
    fontSize: isMobile ? theme.fontSizes.secondary : theme.fontSizes.primary,
    color: theme.colors.primary,
    margin: '2px 0',
  };

  const buttonStyles = {
    width: isMobile ? '78%' : '90%',
    padding: isMobile ? '8px' : '12px',
    margin: isMobile ? 'auto 10px' : '5px auto',
    fontSize: isMobile ? theme.fontSizes.tertiary : theme.fontSizes.secondary,
    border: 'none',
    backgroundColor: theme.colors.mediumHighlight,
    color: theme.colors.primary,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyles = {
    ...buttonStyles,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  };

  const topRightIconsStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={cardStyles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={imageContainerStyles}>
        {flag && (
          <div
            style={{
              textAlign: 'left',
              backgroundColor: theme.colors.mediumHighlight,
              position: 'absolute',
              top: '10px',
              left: '10px',
              color: theme.colors.black,
              padding: '4px 10px',
              borderRadius: '10px 0px 10px 0px',
              fontSize: theme.fontSizes.tertiary,
              zIndex: 2,
            }}
          >
            New
          </div>
        )}

        <div
          style={{
            ...imageWrapperStyles,
            transform: hovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          <img src={data.image1} alt={data.title} style={imageStyles} />
          <img
            src={data.image2}
            alt={data.title}
            style={{
              ...imageStyles,
              transform: 'rotateY(180deg)',
            }}
          />
        </div>
        <div
          style={{
            ...topRightIconsStyles,
            opacity: hovered ? 1 : 0,
          }}
        >
          <FullscreenOutlined
            style={{ fontSize: theme.fontSizes.primary, color: theme.colors.darkHighlight }}
          />
          <HeartOutlined
            style={{ fontSize: theme.fontSizes.primary, color: theme.colors.darkHighlight }}
          />
          <SyncOutlined
            style={{ fontSize: theme.fontSizes.primary, color: theme.colors.darkHighlight }}
          />
        </div>
      </div>

      <div style={detailsStyles}>
        <div style={subtitleStyles}>{data.subtitle}</div>
        <div style={titleStyles}>{data.title}</div>
        <Rate disabled defaultValue={data.rating} style={{ fontSize: theme.icons.tertiary }} />
        <div style={priceStyles}>₹{data.price}</div>
        <Button style={hovered ? buttonHoverStyles : buttonStyles} onClick={data.onAddToCart}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

import { useIsMobile } from '@/comman';
import { theme } from '../components/theme';

const ProductOffersCard = (props) => {
  const isMobile = useIsMobile();
  const {
    data,
    width = isMobile ? 'auto' : '420px',
    height = isMobile ? 'auto' : '300px',
    badgeTop = isMobile ? '10%' : '20%',
    contentWidth = '60%',
    contentTop = isMobile ? '50px' : '100px',
  } = props;

  const containerStyles = {
    display: 'flex',
    gap: '25px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: isMobile ? '0' : '0px 102px',
  };

  const cardStyles = {
    width: width,
    height: height,
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  };

  const imageContainerStyles = {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 'inherit',
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  const hoverEffect = (e, isHovering) => {
    e.target.style.transform = isHovering ? 'scale(1.07)' : 'scale(1)';
  };

  const badgeStyles = {
    position: 'absolute',
    top: badgeTop,
    left: isMobile ? '5%' : '7%',
    color: theme.colors.white,
    right: 'auto',
    width: 'auto',
    height: isMobile ? '33px' : '40px',
    padding: isMobile ? '2px 8px' : '5px 15px',
    borderRadius: '15px 0px 15px 0px',
    fontWeight: '700',
    lineHeight: '30px',
    fontSize: isMobile ? theme.fontSizes.secondary : theme.fontSizes.primary,
    zIndex: '2',
  };

  const contentStyles = {
    position: 'absolute',
    top: contentTop,
    left: '0',
    right: '0',
    width: contentWidth,
    padding: isMobile ? '15px 10px' : '20px',
    color: theme.colors.black,
    textAlign: 'left',
  };

  const titleStyles = {
    fontSize: isMobile ? theme.fontSizes.primary : theme.fontSizes.small,
    marginBottom: '10px',
  };

  const descriptionStyles = {
    fontSize: isMobile ? theme.fontSizes.tertiary : theme.fontSizes.secondary,
    textDecoration: 'underline',
    textDecorationColor: theme.colors.black,
  };

  return (
    <div style={containerStyles}>
      {data.map((item, index) => (
        <div key={index} style={cardStyles}>
          <div style={imageContainerStyles}>
            <img
              src={item.image}
              alt={item.title}
              style={imageStyles}
              onMouseEnter={(e) => hoverEffect(e, true)}
              onMouseLeave={(e) => hoverEffect(e, false)}
            />
          </div>
          <div style={{ textAlign: 'left', backgroundColor: item.badgeColor, ...badgeStyles }}>
            <h4>{item.badgeText}</h4>
          </div>
          <div style={contentStyles}>
            <div style={titleStyles}>
              <h3>{item.title}</h3>
            </div>
            <div style={descriptionStyles}>
              <h4>{item.description}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductOffersCard;

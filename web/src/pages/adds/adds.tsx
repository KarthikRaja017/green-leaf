import { theme } from '../components/theme';

const AddsContainer = ({ flatOff }) => {
  const containerStyle = {
    position: 'relative',
    width: '250px',
    height: '300px',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  };

  const imageWrapperStyle = {
    width: '100%',
    height: '100%',
    overflow: 'hidden', // Ensures the zoom effect is confined to the wrapper
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  };

  const contentStyle = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    zIndex: 2,
    textShadow: '0px 0px 4px rgba(245, 242, 242, 0.7)',
  };

  const headingStyle = {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.primary,
  };

  const subheadingStyle = {
    margin: '0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: theme.fontSizes.small,
  };

  return (
    <div style={containerStyle}>
      <div
        style={imageWrapperStyle}
        onMouseEnter={(e) => {
          e.currentTarget.firstChild.style.transform = 'scale(1.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.firstChild.style.transform = 'scale(1)';
        }}
      >
        <img
          src="https://prestashop.coderplace.com/PRS03/PRS03070/demo2/modules/cp_leftbanner1/views/img/left-banner-1.jpg"
          alt="Ad Image"
          style={imageStyle}
        />
      </div>
      <div style={contentStyle}>
        <h4 style={headingStyle}>New Trending</h4>
        <h2 style={subheadingStyle}>{flatOff}</h2>
      </div>
    </div>
  );
};

export default AddsContainer;

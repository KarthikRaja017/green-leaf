import { useIsMobile } from '@/comman';
import { Button, Layout } from 'antd';
import { theme } from '../components/theme.js';
import { history } from '@umijs/max';

const { Header } = Layout;

const HeaderBanner = (props) => {
  const { offer } = props;
  const isMobile = useIsMobile();

  return (
    <Header
      style={{
        background: 'transparent',
        padding: 0,
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="https://prestashop.coderplace.com/PRS03/PRS03070/demo2/themes/PRS03070_2/assets/img/megnor/top-cms-banner-1.jpg"
        alt="Top CMS Banner"
        style={{
          width: '100%',
          height: isMobile ? '40px' : '56px',
          maxHeight: isMobile ? '200px' : '220px',
          objectFit: isMobile ? 'unset' : 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          textAlign: 'center',
          padding: isMobile ? '10px' : '0',
        }}
      >
        <span
          style={{
            color: theme.colors.white,
            fontSize: theme.fontSizes.primary,
            fontWeight: 'bold',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Up to{' '}
          <span style={{ color: isMobile ? theme.colors.black : theme.colors.highlight }}>
            {offer}% off
          </span>{' '}
          on everyday
        </span>

        <Button
          style={{
            backgroundColor: theme.colors.highlight,
            color: theme.colors.white,
            fontSize: isMobile ? theme.fontSizes.tertiary : theme.fontSizes.secondary,
            fontWeight: 'bold',
            border: `2px solid ${theme.colors.highlight}`,
          }}
          shape="round"
          onClick={() => history.push('/main')}
        >
          Shop Now
        </Button>
      </div>
    </Header>
  );
};

export default HeaderBanner;

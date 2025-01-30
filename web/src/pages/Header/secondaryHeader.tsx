import { useIsMobile } from '@/comman';
import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from '@umijs/max';
import { Divider, Layout, Space } from 'antd';
import { theme } from '../components/theme';

const { Header } = Layout;

const SecondaryHeader = (props: any) => {
  const { deliveryTime } = props;
  const isMobile = useIsMobile();

  return (
    <Header
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        fontSize: theme.fontSizes.secondary,
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '12px' : '20px',
      }}
    >
      <Space
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ClockCircleOutlined
              style={{
                marginRight: 8,
                fontSize: theme.icons.secondary,
              }}
            />
            {deliveryTime}
          </div>
        )}

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Space style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ cursor: 'pointer' }}>Store Locator</div>

              <Divider
                type="vertical"
                style={{
                  margin: '0 15px',
                  backgroundColor: theme.colors.white,
                }}
              />

              <div style={{ cursor: 'pointer' }}>Track Your Order</div>

              <Divider
                type="vertical"
                style={{
                  margin: '0 15px',
                  backgroundColor: theme.colors.white,
                }}
              />
              <div>
                <Link to={'/green-leaf/user/login-Account'} style={{ color: theme.colors.white }}>
                  <UserOutlined
                    style={{
                      marginRight: '10px',
                      fontSize: theme.icons.secondary,
                    }}
                  />
                  My Account
                </Link>
              </div>
            </Space>
          </div>
        )}
      </Space>
    </Header>
  );
};

export default SecondaryHeader;

import { Logo, Name, PhoneNumber, ShippingCost, useIsMobile } from '@/comman';
import { MenuOutlined, PhoneOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useState } from 'react';
import { theme } from '../components/theme';

const PrimaryHeader = () => {
  const menuItems = ['Organic', 'Juice', 'Vegetables', 'Fruits', 'Cookies', 'Pretzels', 'News'];
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '25px 10px' : '0 20px',
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      height: isMobile ? '40px' : '60px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: isMobile ? '25px' : '30px',
      fontWeight: 'bold',
      color: theme.colors.white,
    },
    logoIcon: {
      fontSize: isMobile ? '30px' : '35px',
      marginRight: '7px',
      color: theme.colors.highlight,
    },
    menu: {
      display: 'flex',
      gap: '20px',
      margin: 0,
    },
    menuItem: {
      color: theme.colors.white,
      fontWeight: '500',
      cursor: 'pointer',
    },
    shippingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    shippingIcon: {
      fontSize: theme.icons.primary,
      color: theme.colors.white,
      border: `1px solid ${theme.colors.white}`,
      borderRadius: '50%',
      padding: '5px',
    },
    shippingText: {
      color: theme.colors.white,
    },
    shippingHeader: {
      fontWeight: 'bold',
      fontSize: theme.fontSizes.primary,
      color: theme.colors.white,
    },
    shippingSubText: {
      fontSize: theme.fontSizes.secondary,
      color: theme.colors.white,
      marginTop: '4px',
    },
    menuIcon: {
      fontSize: theme.icons.primary,
      color: theme.colors.white,
      marginRight: '15px',
      cursor: 'pointer',
    },
  };
  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);
  return (
    <div style={styles.header}>
      <div style={{ display: 'flex' }}>
        {isMobile && <MenuOutlined style={styles.menuIcon} onClick={handleDrawerOpen} />}

        <div style={styles.logo}>
          <span style={styles.logoIcon}>{Logo}</span>
          {Name}
        </div>
      </div>

      {!isMobile && (
        <>
          <div style={styles.menu}>
            {menuItems.map((item, index) => (
              <div key={index} style={styles.menuItem}>
                {item}
              </div>
            ))}
          </div>
          <div style={styles.shippingContainer}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: '0 25px',
                gap: '50px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShoppingOutlined style={styles.shippingIcon} />
                <div>
                  <div style={styles.shippingHeader}>Free Shipping</div>
                  <div style={styles.shippingSubText}>On order over {ShippingCost}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PhoneOutlined style={styles.shippingIcon} />
                <div>
                  <div style={styles.shippingHeader}>Call Anytime</div>
                  <div style={styles.shippingSubText}>{PhoneNumber}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={handleDrawerClose}
        open={isDrawerOpen}
        width={(window.innerWidth * 80) / 100}
        bodyStyle={{
          padding: '15px',
          overflowY: 'auto',
        }}
        headerStyle={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.white,
          fontSize: theme.fontSizes.primary,
          fontWeight: 'bold',
        }}
        footer={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: theme.fontSizes.primary,
              height: '50px',
              width: '100%',
              backgroundColor: '#f2f2f2',
            }}
          >
            <div style={{ margin: '0 10px' }}>Wishlist</div>
            <div style={{ width: '1px', height: '20px', backgroundColor: '#343a40' }}></div>
            <div style={{ margin: '0 10px' }}>Compare</div>
          </div>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '10px',
                borderBottom: '1px solid #ddd',
                fontSize: '16px',
                color: '#333',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Drawer>
      {isMobile && (
        <UserOutlined
          style={{
            fontSize: theme.icons.secondary,
            backgroundColor: theme.colors.primary,
            borderRadius: '60%',
            border: `2px solid ${theme.colors.white}`,
            padding: '5px',
            color: '#fff',
          }}
        />
      )}
    </div>
  );
};

export default PrimaryHeader;

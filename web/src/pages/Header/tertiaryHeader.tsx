import { useIsMobile } from '@/comman';
import {
  AppstoreOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Badge, Button, Dropdown, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { theme } from '../components/theme';
import SearchBar from './searchBar';

const TertiaryHeader = () => {
  const isMobile = useIsMobile();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categoriesMenu = (
    <Menu>
      <Menu.Item key="1">Fruits</Menu.Item>
      <Menu.Item key="2">Vegetables</Menu.Item>
      <Menu.Item key="3">Juices</Menu.Item>
      <Menu.Item key="4">Cookies</Menu.Item>
    </Menu>
  );

  const styles = {
    container: {
      position: isFixed ? 'fixed' : 'absolute',
      top: isFixed ? 0 : '155px',
      zIndex: 1000,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.primary,
      padding: '10px 15px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    categoryButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: theme.colors.white,
      fontSize: theme.fontSizes.primary,
      fontWeight: '500',
      cursor: 'pointer',
      border: 'none',
      background: 'transparent',
    },
    iconsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px',
      padding: '0 20px',
    },
    iconWrapper: {
      position: 'relative',
      color: theme.colors.white,
      fontSize: theme.icons.primary,
      cursor: 'pointer',
      transition: 'transform 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      {!isMobile && (
        <Dropdown overlay={categoriesMenu} trigger={['click']} placement="bottomLeft">
          <Button type="text" style={styles.categoryButton}>
            <AppstoreOutlined style={{ fontSize: theme.icons.primary }} />
            Shop By Categories
          </Button>
        </Dropdown>
      )}
      <div style={{ alignItems: 'center', width: '100%', marginLeft: isMobile ? '0px' : '100px' }}>
        <SearchBar />
      </div>
      <div style={styles.iconsContainer}>
        {!isMobile && (
          <>
            <Badge count={10} size="small">
              <SyncOutlined style={styles.iconWrapper} />
            </Badge>
            <Badge count={0} size="small">
              <HeartOutlined style={styles.iconWrapper} />
            </Badge>
          </>
        )}
        <Badge count={0} size="small">
          <ShoppingCartOutlined style={styles.iconWrapper} />
        </Badge>
      </div>
    </div>
  );
};

export default TertiaryHeader;

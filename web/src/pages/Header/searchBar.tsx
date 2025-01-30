import { SearchOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import { theme } from '../components/theme';

const { Option } = Select;

const SearchBar = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing.medium,
      backgroundColor: theme.colors.primary,
    },
    searchBar: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.large,
      boxShadow: theme.shadows.medium,
      overflow: 'hidden',
      width: '100%',
      maxWidth: '900px',
      border: theme.borders.primary,
    },
    select: {
      flex: 1,
      border: theme.borders.none,
      outline: 'none',
      borderRadius: `${theme.borderRadius.large} 0 0 ${theme.borderRadius.large}`,
      padding: theme.spacing.small,
    },
    button: {
      backgroundColor: theme.colors.highlight,
      border: theme.borders.highlight,
      borderRadius: `0 ${theme.borderRadius.large} ${theme.borderRadius.large} 0`,
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `0 ${theme.spacing.medium}`,
      cursor: 'pointer',
    },
    buttonIcon: {
      fontSize: theme.icons.primary,
      color: theme.colors.white,
    },
  };

  return (
    <div>
      <div style={styles.searchBar}>
        <Select placeholder="Search Product Here..." style={styles.select} bordered={false}>
          <Option value="organic">Organic</Option>
          <Option value="juice">Juice</Option>
          <Option value="vegetables">Vegetables</Option>
          <Option value="fruits">Fruits</Option>
          <Option value="cookies">Cookies</Option>
          <Option value="pretzels">Pretzels</Option>
          <Option value="news">News</Option>
        </Select>

        <Button type="primary" style={styles.button}>
          <SearchOutlined style={styles.buttonIcon} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

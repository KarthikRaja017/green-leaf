import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import { useState } from 'react';
import { theme } from '../components/theme.js';

const { Title, Text } = Typography;

const ShopByCategoryBar = () => {
  const [expandedCategory, setExpandedCategory] = useState('Organic Fruits');

  const categories = [
    { name: 'Vegetable', subcategories: [] },
    {
      name: 'Organic Fruits',
      subcategories: ['Banana', 'Apple', 'Orange', 'Berries', 'Melon'],
    },
    { name: 'Juice & Drinks', subcategories: [] },
    { name: 'Fresh Fruits', subcategories: [] },
  ];

  const toggleCategory = (category) => {
    setExpandedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div
      style={{
        width: 250,
        borderRadius: 8,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: 15,
        fontFamily: 'Arial, sans-serif',
        marginBottom: '38px',
      }}
    >
      <Title
        level={4}
        style={{
          color: theme.colors.black,
          textAlign: 'left',
        }}
      >
        Shop By Category
      </Title>
      <div
        style={{
          height: '1px',
          backgroundColor: '#e8e8e8',
          marginBottom: 16,
        }}
      ></div>
      {categories.map((category) => (
        <div key={category.name} style={{ marginBottom: 20 }}>
          <Space
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: 16,
              color: '#333',
              fontWeight: 500,
            }}
            onClick={() => toggleCategory(category.name)}
          >
            {category.name}
            {expandedCategory === category.name ? (
              <MinusOutlined style={{ fontSize: 14, color: '#555' }} />
            ) : (
              <PlusOutlined style={{ fontSize: 14, color: '#555' }} />
            )}
          </Space>
          {expandedCategory === category.name &&
            category.subcategories.map((sub) => (
              <Text
                key={sub}
                level={4}
                style={{
                  display: 'block',
                  marginLeft: 16,
                  marginTop: 10,
                  color: theme.colors.black,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                {sub}
              </Text>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ShopByCategoryBar;

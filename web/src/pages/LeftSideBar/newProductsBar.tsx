import { ShoppingOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Typography } from 'antd';
import { theme } from '../components/theme';

const { Title, Text } = Typography;

const products = [
  {
    id: 1,
    name: 'Bundle Of Blue Grapes',
    price: '$30.00',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/164-cart_default/bundle-of-blue-grapes-with-a-green-leaf.jpg',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Crispy Fruit Freen',
    price: '$90.00',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/159-cart_default/crispy-fruit-freen-orange-dried-fruit.jpg',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Green Lemon Fruit',
    price: '$45.00',
    image:
      'https://prestashop.coderplace.com/PRS03/PRS03070/demo2/154-cart_default/green-lemon-fruit-indoor-outdoor-plant.jpg',
    tag: 'New',
  },
];

const NewProductsBar = () => {
  return (
    <Card
      style={{
        width: 250,
        border: '1px solid #d9d9d9',
      }}
    >
      <h2 style={{ marginTop: '-15px' }}>New Products</h2>
      <Divider style={{ marginTop: '-5px' }} />
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '6px',
            paddingBottom: '8px',
            marginTop:'-15px'
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '8px',
              marginRight: '12px',
              border: `1px solid ${theme.colors.mediumHighlight}`,
            }}
          />
          <div style={{ flex: 1 }}>
            <h3
              style={{
                display: 'block',
                fontSize: theme.fontSizes.secondary,
                marginBottom: '4px',
              }}
            >
              {product.name}
            </h3>
            <h3
              style={{
                display: 'block',
                color: theme.colors.primary,
                fontSize: theme.fontSizes.secondary,
              }}
            >
              {product.price}
            </h3>
          </div>
        </div>
      ))}
      <Button
        type="primary"
        block
        style={{
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.primary,
          padding:'20px 0',
          width:'150px'
        }}
      >
        All Products
      </Button>
    </Card>
  );
};

export default NewProductsBar;

import React from "react";
import { Card, Button, Typography, Divider } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { theme } from "../components/theme";

const { Title, Text } = Typography;

const products = [
  {
    id: 1,
    name: "Roasted Freeze Mix Blue",
    price: "$85.00",
    image: "https://prestashop.coderplace.com/PRS03/PRS03070/demo2/35-cart_default/roasted-freeze-mix-blue-combo-dispenser.jpg",
    tag: "New",
  },
  {
    id: 2,
    name: "Swing Paper Boat Swing",
    price: "$28.00",
    oldPrice: "$35.00",
    image: "https://prestashop.coderplace.com/PRS03/PRS03070/demo2/44-cart_default/swing-paper-boat-swing-juicier-drink.jpg",
  },
  {
    id: 3,
    name: "Guava Red Flesh Fresh Fruit",
    price: "$50.00",
    image: "https://prestashop.coderplace.com/PRS03/PRS03070/demo2/49-cart_default/guava-red-flesh-fresh-fruit-plants-tree.jpg",
    tag: "New",
  },
];

const MostViewedProductsBar = () => {
  return (
    <Card
      style={{
        width: 250,
        border: '1px solid #d9d9d9',
      }}
    >
      <h2 style={{ marginTop: '-15px' }}>Most View Product</h2>
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

export default MostViewedProductsBar;

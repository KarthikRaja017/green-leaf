import { CountdownTimer } from '@/comman';
import { Card, Col, Progress, Rate, Row, Tag, Typography } from 'antd';
import { useState } from 'react';
import { theme } from '../components/theme';

const { Title, Text } = Typography;

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { product } = props;

  return (
    <Card
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        width: '440px',
        height: '250px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'transform 0.5s ease',
        boxShadow: 'inset 0 0 0 0.25px rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 3px',
        justifyContent: 'space-between',
      }}
      bodyStyle={{ padding: 15 }}
    >
      <Row
        style={{ display: 'flex' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Col
          span={10}
          style={{
            position: 'relative',
            height: 'auto',
            width: '100%',
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.5s',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transition: 'transform 0.6s',
              transformStyle: 'preserve-3d',
              transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
              }}
            >
              <img
                src={product.image1}
                alt="Product Front"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <img
                src={product.image2}
                alt="Product Back"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          <Tag
            color={theme.colors.red}
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              fontWeight: 'bold',
              borderRadius: '50%',
              height: '50px',
              width: '50px',
              textAlign: 'center',
              lineHeight: '50px',
            }}
          >
            {product.badgeText}
          </Tag>
        </Col>

        <Col span={14} style={{ paddingLeft: '15px' }}>
          <Title
            level={5}
            style={{ margin: 0, fontSize: theme.fontSizes.secondary, color: theme.colors.black }}
          >
            {product.title}
          </Title>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '5px 0',
              color: '#fadb14',
            }}
          >
            <Rate
              disabled
              defaultValue={product.rating}
              style={{ fontSize: theme.icons.tertiary }}
            />
          </div>

          <div>
            <Text
              strong
              style={{
                color: theme.colors.primary,
                fontSize: theme.fontSizes.primary,
                marginRight: '10px',
              }}
            >
              ₹{product.discountedPrice}
            </Text>
            <Text
              delete
              style={{
                color: theme.colors.darkHighlight,
                fontSize: theme.fontSizes.secondary,
                marginLeft: '5px',
              }}
            >
              ₹{product.originalPrice}
            </Text>
          </div>

          <Text style={{ display: 'block', margin: '8px 0' }}>
            Available: <strong>{product.available}</strong>
          </Text>
          <Progress
            percent={product.progress}
            showInfo={false}
            strokeColor={theme.colors.highlight}
            style={{ marginBottom: '10px' }}
          />

          <CountdownTimer endDate={product.endDate} />
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;

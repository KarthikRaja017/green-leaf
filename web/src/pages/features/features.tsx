import { useIsMobile } from '@/comman';
import {
  CarOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  GiftOutlined,
} from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import { theme } from '../components/theme';

const features = [
  {
    icon: <CarOutlined style={{ fontSize: theme.icons.primary, color: theme.colors.primary }} />,
    title: 'Free Fast Shipping',
    description: 'Free shipping for orders over',
  },
  {
    icon: (
      <CheckCircleOutlined style={{ fontSize: theme.icons.primary, color: theme.colors.primary }} />
    ),
    title: '100% Fresh Vegetables',
    description: 'Within 30 days for an exchange',
  },
  {
    icon: <GiftOutlined style={{ fontSize: theme.icons.primary, color: theme.colors.primary }} />,
    title: 'Best Online Support',
    description: 'Within 30 days money return',
  },
  {
    icon: (
      <CreditCardOutlined style={{ fontSize: theme.icons.primary, color: theme.colors.primary }} />
    ),
    title: 'Secure Payments',
    description: 'Pay with multiple credit cards',
  },
];

const FeatureCards = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{ backgroundColor: theme.colors.white, width: '100%' }}>
      <Row
        gutter={[16, 16]}
        justify="center"
        style={{ marginRight: '8px', marginLeft: '8px' }}
      >
        {features.map((feature, index) => (
          <Col key={index} xs={22} sm={12} md={5} style={{ marginRight: isMobile ? '0' : '1.15%' }}>
            <Card
              style={{
                borderRadius: '15px',
                backgroundColor: theme.colors.lightHighlight,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                height: isMobile ? '130px' : '115px',
              }}
              bordered={false}
            >
              <div
                style={{
                  display: isMobile ? 'unset' : 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <div>{feature.icon}</div>
                <h3
                  style={{
                    fontSize: isMobile ? theme.fontSizes.secondary : theme.fontSizes.primary,
                    fontWeight: 'bold',
                    color: theme.colors.black,
                    marginTop: '2px',
                  }}
                >
                  {feature.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: isMobile ? theme.fontSizes.tertiary : theme.fontSizes.tertiary,
                  color: theme.colors.darkHighlight,
                  marginTop: '0',
                  marginLeft: isMobile ? '10px' : '40px',
                }}
              >
                {feature.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureCards;

import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Col, Layout, Row, Space, Typography } from 'antd';

const { Footer } = Layout;
const { Title, Text } = Typography;

const GEFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: '#f9f9f9',
        padding: '40px 60px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Row gutter={[32, 32]} justify="space-between">
        {/* Contact Us */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ marginBottom: '16px' }}>
            Contact Us
          </Title>
          <Text>Greenleaf Store</Text>
          <br />
          <Text>1801 Zboncak Island Suite Street</Text>
          <br />
          <Text>Hampshire</Text>
          <br />
          <Text>New Paris, 90002</Text>
          <br />
          <Text>United States</Text>
          <br />
          <Text>demo.store@gmail.com</Text>
          <br />
          <Text style={{ display: 'block', marginTop: '12px' }}>
            You Have Any Questions? Call Us 24x7
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: '16px' }}>
            (+001) <span style={{ color: '#000' }}>0123-456-789</span>
          </Text>
          <Space style={{ marginTop: '16px', marginLeft: '20px' }} size="middle">
            <FacebookOutlined style={{ fontSize: '22px' }} />
            <TwitterOutlined style={{ fontSize: '22px' }} />
            <InstagramOutlined style={{ fontSize: '22px' }} />
            <LinkedinOutlined style={{ fontSize: '22px' }} />
          </Space>
        </Col>

        {/* Products */}
        <Col xs={24} sm={12} md={4}>
          <Title level={4} style={{ marginBottom: '16px' }}>
            Products
          </Title>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <Space direction="vertical">
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Prices Drop
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  New Products
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Best Sales
                </a>
              </li>
            </Space>
          </ul>
        </Col>

        {/* Our Company */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ marginBottom: '16px' }}>
            Our Company
          </Title>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <Space direction="vertical">
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Terms And Conditions Of Use
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Secure Payment
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Stores
                </a>
              </li>
            </Space>
          </ul>
        </Col>

        {/* Trending Category */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ marginBottom: '16px' }}>
            Trending Category
          </Title>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            <Space direction="vertical">
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Cold Drinks
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Cooking Spice
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Fruits
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Juice
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Pretzels
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#000' }}>
                  Vegetables
                </a>
              </li>
            </Space>
          </ul>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: '40px', textAlign: 'center' }}>
        <Col>
          <Text>&copy; 2024 - Ecommerce software by Karthik Raja</Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default GEFooter;

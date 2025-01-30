import { Button, Form, Input, Select, message, notification } from 'antd';
import { useState } from 'react';
import { profileSetup } from './service';
import './styles.css';
import { history } from '@umijs/max';
import { setTokenAndRedirect } from '@/comman';

const { Option } = Select;

const RestaurantDetailsPage = ({ otpRequest }) => {
  const [isGstRegistered, setIsGstRegistered] = useState(false);
  const [gstPercentage, setGstPercentage] = useState('');
  const [restaurantName, setRestaurantName] = useState({});
  const [restaurantType, setRestaurantType] = useState({});

  const handleFormSubmit = async (values) => {
    if (restaurantName && restaurantType) {
      const {
        status,
        class: className,
        message,
        payload,  // Contains the accessToken
      } = await profileSetup({ values, ...otpRequest });
      
      if (isGstRegistered && !gstPercentage) {
        message.error('Please provide the GST percentage for your restaurant.');
        return;
      }
  
      if (status) {
        // Storing access token in local storage
        setTokenAndRedirect(payload);
        notification.success({ message });
        history.push('/dashboard')
      }
    } else {
      message.error('Please fill all required fields.');
    }
  };
  

  return (
    <div className="restaurant-container">
      <div className="restaurant-card">
        <div className="restaurant-header">
          <h2>Restaurant Details</h2>
          <p>Provide your restaurant details below.</p>
        </div>
        <Form onFinish={handleFormSubmit} className="restaurant-form" layout="vertical">
          <Form.Item
            label="Restaurant Name"
            name="restaurantName"
            rules={[{ required: true, message: 'Please enter the restaurant name!' }]}
          >
            <Input
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              placeholder="Enter Restaurant Name"
              className="form-input"
            />
          </Form.Item>

          <Form.Item
            label="Restaurant Type"
            name="restaurantType"
            rules={[{ required: true, message: 'Please select the restaurant type!' }]}
          >
            <Select
              value={restaurantType}
              onChange={(value) => setRestaurantType(value)}
              placeholder="Select Restaurant Type"
              style={{ marginBottom: '7px', fontSize: '16px' }}
              //   className="form-input"
            >
              <Option value="fast-food">Fast Food</Option>
              <Option value="cafe">Cafe</Option>
              <Option value="coffee-shop">Coffee Shop</Option>
              <Option value="fine-dining">Fine Dining</Option>
              <Option value="pub">Pub</Option>
            </Select>
          </Form.Item>

          {/* GST Registered Status */}
          <Form.Item label="Is GST Registered?" name="gstRegistered" valuePropName="checked">
            <Select
              value={isGstRegistered ? 'Yes' : 'No'}
              onChange={(value) => {
                setIsGstRegistered(value === 'Yes');
                if (value === 'No') {
                  setGstPercentage('');
                }
              }}
              style={{ marginBottom: '7px', fontSize: '16px' }}
            >
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>

          {isGstRegistered && (
            <Form.Item
              label="GST Percentage"
              name="gstPercentage"
              rules={[{ required: true, message: 'Please enter the GST percentage!' }]}
            >
              <Input
                value={gstPercentage}
                onChange={(e) => setGstPercentage(e.target.value)}
                placeholder="Enter GST Percentage"
                className="form-input"
                addonAfter={<span style={{ color: '#3498db' }}>%</span>}
              />
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" className="generate-bill-btn">
              Get in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RestaurantDetailsPage;

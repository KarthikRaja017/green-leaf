import { CustomDatePicker, setTokenAndRedirect } from '@/comman.tsx';
import { LockOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  notification,
  Radio,
  RadioChangeEvent,
} from 'antd';
import { useState } from 'react';
import { theme } from '../components/theme.js';
import { createAccount } from './service.ts';

const CreateAccount = () => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [receiveOffers, setReceiveOffers] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const onChangeSocialTitle = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  const tailLayoutbutton = {
    wrapperCol: { offset: 11, span: 13 },
  };
  const handleCreateAccount = async (values) => {
    const birthDateformat = values.birthdate?.format('DD-MM-YYYY');
    const newValues = { birthDateformat, ...values };
    setLoading(true);
    const { status, message, payload } = await createAccount(newValues);
    if (status) {
      setTokenAndRedirect(payload);
      notification.success({ message });
      setTimeout(() => {
        history.push('/main');
      }, 2000);
    } else {
      notification.error({ message });
    }
    setLoading(false);
  };
  return (
    <>
      <div style={{ padding: '100px 0', margin: '0' }}>
        <h1 style={{ fontSize: theme.fontSizes.primary, margin: '0' }}>Create An Account</h1>
        <div style={{ width: 1120, padding: '0' }}>
          <Divider
            style={{
              margin: '20px 0',
              borderWidth: '1px',
              borderColor: theme.colors.mediumHighlight,
              borderStyle: 'solid',
            }}
          />
        </div>
        <div
          style={{
            width: 1120,
            height: '97%',
            borderRadius: 8,
            padding: 35,
            border: `2px solid ${theme.colors.mediumHighlight}`,
          }}
        >
          <div style={{ marginBottom: '12px' }}>
            Already have an account?{' '}
            <Button
              type="link"
              style={{ padding: '4px 1px' }}
              onClick={(e) => history.push('/green-leaf/user/login-Account')}
              loading={loading}
            >
              Log in instead!
            </Button>
          </div>
          <Form onFinish={handleCreateAccount}>
            <Form.Item
              name="socialTitle"
              label={
                <h4 style={{ fontSize: theme.fontSizes.secondary, margin: '0' }}>Social title</h4>
              }
              colon={false}
            >
              <Radio.Group
                onChange={onChangeSocialTitle}
                value={value}
                style={{ marginLeft: '180px' }}
              >
                <Radio value={'Mr'}> Mr.</Radio>
                <Radio value={'Mrs'}> Mrs.</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="firstName"
              label={
                <h4 style={{ fontSize: theme.fontSizes.secondary, margin: '0' }}>First name</h4>
              }
              colon={false}
              extra={
                <div style={{ width: '62%', color: theme.colors.black }}>
                  <p style={{ marginLeft: '172px', fontSize: theme.fontSizes.secondary }}>
                    Only letters and the dot (.) character, followed by a space, are allowed.
                  </p>
                </div>
              }
              rules={[{ required: true, message: 'Please enter valid First name!' }]}
            >
              <Input
                style={{ marginLeft: '172px', width: 400, padding: 8 }}
                placeholder="Enter your First name"
                allowClear
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              label={
                <h4 style={{ fontSize: theme.fontSizes.secondary, margin: '0' }}>Last name</h4>
              }
              colon={false}
              extra={
                <div style={{ width: '62%', color: theme.colors.black }}>
                  <p style={{ marginLeft: '172px', fontSize: theme.fontSizes.secondary }}>
                    Only letters and the dot (.) character, followed by a space, are allowed.
                  </p>
                </div>
              }
              rules={[{ required: true, message: 'Please enter Last name!' }]}
            >
              <Input
                style={{ marginLeft: '172px', width: 400, padding: 8 }}
                placeholder="Enter your Last name"
                allowClear
              />
            </Form.Item>
            <Form.Item
              label={<h4 style={{ fontSize: theme.fontSizes.secondary, margin: '0' }}>Email</h4>}
              name="email"
              rules={[{ type: 'email', required: true, message: 'Please enter valid email id!' }]}
              colon={false}
            >
              <Input
                type="email"
                placeholder="Enter your email id"
                allowClear
                style={{ marginLeft: '210px', width: 400, padding: 8 }}
              />
            </Form.Item>
            <Form.Item
              label={<h4 style={{ fontSize: theme.fontSizes.secondary, margin: '0' }}>Password</h4>}
              name="password"
              rules={[{ required: true, message: 'Please enter password!' }]}
              colon={false}
            >
              <Input.Password
                placeholder="Enter new password"
                prefix={<LockOutlined style={{ color: theme.colors.primary }} />}
                allowClear
                style={{ marginLeft: '180px', width: 400, padding: 8 }}
              />
            </Form.Item>
            <Form.Item
              label={
                <h4 style={{ fontSize: theme.fontSizes.secondary, margin: '0' }}>Birthdate</h4>
              }
              name="birthdate"
              colon={false}
            >
              <CustomDatePicker style={{ marginLeft: '192px', width: 400, padding: 8 }} />
            </Form.Item>
            <Form.Item name="receiveOffers" colon={false} valuePropName="checked">
              <Checkbox
                onChange={(e) => setReceiveOffers(e.target.checked)}
                checked={receiveOffers}
                style={{ marginLeft: '278px', padding: 0 }}
              >
                <p
                  style={{
                    fontSize: theme.fontSizes.secondary,
                    color: theme.colors.black,
                    marginTop: '15px',
                  }}
                >
                  Receive offers from our partners
                </p>
              </Checkbox>
            </Form.Item>
            <Form.Item name="termsAndConditions" colon={false} valuePropName="checked">
              <Checkbox
                onChange={(e) => setTermsAndConditions(e.target.checked)}
                checked={termsAndConditions}
                style={{ marginLeft: '278px', padding: 0 }}
                required
              >
                <p
                  style={{
                    fontSize: theme.fontSizes.secondary,
                    color: theme.colors.black,
                    marginTop: '15px',
                  }}
                >
                  I agree to the terms and conditions and the privacy policy
                </p>
              </Checkbox>
            </Form.Item>
            <Form.Item {...tailLayoutbutton}>
              <Button
                type="primary"
                style={{ padding: '20px 50px', backgroundColor: theme.colors.primary }}
                htmlType="submit"
                loading={loading}
              >
                <p
                  style={{
                    fontSize: theme.fontSizes.secondary,
                    marginTop: '15px',
                  }}
                >
                  Submit
                </p>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;

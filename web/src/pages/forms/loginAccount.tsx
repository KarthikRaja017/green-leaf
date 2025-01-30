import { LockOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Button, Divider, Form, Input, notification } from 'antd';
import { useState } from 'react';
import { theme } from '../components/theme';
import { loginAccount } from './service';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const tailLayoutbutton = {
    wrapperCol: { offset: 9, span: 13 },
  };
  const handleLogin = async (values) => {
    setLoading(true);
    const { status, message, payload } = await loginAccount(values);
    if (status) {
      localStorage.setItem('gltoken', payload.token);
      notification.success({ message });
      setTimeout(() => {
        history.push('/main')
      }, 2000);
    } else {
      notification.error({ message });
    }
    setLoading(false);
  };
  return (
    <>
      <div style={{ padding: '100px 0', margin: '0' }}>
        <h1 style={{ fontSize: theme.fontSizes.primary, margin: '0' }}>Log in to your Account</h1>
        <div style={{ width: 1120, padding: '0' }}>
          <Divider
            style={{
              margin: '20px 0',
              borderWidth: '1px',
              borderColor: theme.colors.mediumHighlight,
              borderStyle: 'solid',
            }}
          />
          <div
            style={{
              width: 1120,
              height: '100%',
              borderRadius: 8,
              padding: 35,
              border: `2px solid ${theme.colors.mediumHighlight}`,
            }}
          >
            <Form onFinish={handleLogin}>
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
                label={
                  <h4 style={{ fontSize: theme.fontSizes.secondary, margin: '0' }}>Password</h4>
                }
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
              <p
                style={{
                  fontSize: theme.fontSizes.secondary,
                  marginTop: '15px',
                  marginLeft: '380px',
                  cursor: 'pointer',
                }}
                onClick={(e) => history.push('/green-leaf/user/forgotPassword')}
              >
                Forgot your password?
              </p>
              <Form.Item {...tailLayoutbutton}>
                <Button
                  type="primary"
                  style={{ padding: '20px 50px', backgroundColor: theme.colors.primary }}
                  htmlType="submit"
                >
                  <p
                    style={{
                      fontSize: theme.fontSizes.secondary,
                      marginTop: '15px',
                    }}
                  >
                    Sign In
                  </p>
                </Button>
              </Form.Item>
              <p
                style={{
                  fontSize: theme.fontSizes.secondary,
                  marginTop: '15px',
                  marginLeft: '380px',
                  cursor: 'pointer',
                }}
                onClick={(e) => history.push('/green-leaf/user/createAccount')}
              >
                No account? Create one here
              </p>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

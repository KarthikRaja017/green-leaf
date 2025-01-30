import React from 'react';
import { Button, Typography, Spin } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';

const { Title, Text } = Typography;

const UnderProduction = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <RocketOutlined
        style={{
          fontSize: 80,
          color: '#fff',
          animation: 'float 3s infinite ease-in-out',
        }}
      />
      <Title
        level={2}
        style={{
          color: '#fff',
          fontWeight: 'bold',
          margin: '20px 0 10px',
          animation: 'fadeIn 2s',
        }}
      >
        🚀 Under Production
      </Title>
      <Text
        style={{
          fontSize: 18,
          color: '#f0f0f0',
          marginBottom: 30,
          animation: 'fadeIn 3s',
        }}
      >
        Our development team is working hard to bring this to life. Stay tuned!
      </Text>
      <Spin
        style={{
          marginBottom: 30,
          animation: 'bounce 2s infinite',
        }}
        size="large"
      />
      <Button
        style={{
          backgroundColor: '#f5222d',
          color: '#fff',
          border: 'none',
          fontSize: 16,
          fontWeight: 'bold',
          borderRadius: 8,
          padding: '10px 20px',
        }}
        onClick={() => {
          history.push('/main');
        }}
      >
        Go Home
      </Button>

      <div
        style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), rgba(0,0,0,0))',
          animation: 'rotate 10s linear infinite',
          pointerEvents: 'none', // Fix here
        }}
      />
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default UnderProduction;

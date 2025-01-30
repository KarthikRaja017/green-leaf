import { Card, Col, Layout, Menu, Row, Statistic } from 'antd';
import { PieChartOutlined, TableOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './styles.css'

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => (
  <Sider collapsible collapsed={collapsed}>
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={<TableOutlined />}>
        Tables
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined />}>
        Configuration
      </Menu.Item>
    </Menu>
  </Sider>
);

const { Header } = Layout;

const CustomHeader = () => (
  <Header style={{ background: '#fff', padding: 0 }}>
    <div className="header-logo">
      <img src="/logo.png" alt="Logo" />
    </div>
  </Header>
);

const Dashboard = () => (
    <div className="dashboard-content">
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Dine-In" value={0} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Pick-Up" value={0} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Delivery" value={0} />
          </Card>
        </Col>
      </Row>
    </div>
  );


  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <CustomHeader />
          <Layout.Content style={{ padding: '24px' }}>
            <Dashboard />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  };

  export default App;
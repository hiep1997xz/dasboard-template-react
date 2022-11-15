import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useContext, useState } from 'react'
import Header from '../../pages/Header/Header'
import Home from '../../pages/Home/Home'
import Footer from '../../pages/Footer/Footer'

import './NavBar.scss'
import { AuthContext } from '../../context/AuthContext'

const NavBar = () => {
  const { Sider } = Layout
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="container">
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      {/* <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}>
        Content
      </Content> */}
      <Home />
      <Footer />
    </Layout>
  </Layout>
  )
}

export default NavBar
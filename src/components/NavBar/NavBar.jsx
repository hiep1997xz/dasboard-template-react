import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import Footer from '../../pages/Footer/Footer'
import Header from '../../pages/Header/Header'
import Home from '../../pages/Home/Home'

import logo from '../../assets/logo.png'

import './NavBar.scss'

const NavBar = () => {
  const { Sider } = Layout
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState('dark');
  return (
    <Layout className='container'>
      <Sider trigger={null} collapsible collapsed={collapsed} className={theme}>
        <div className="logo">
          <img src={logo} alt='logo' className="logo_img" />
        </div>
        <Menu
          theme={theme}
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
        <Header
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        theme={theme}
        setTheme={setTheme}
        />
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

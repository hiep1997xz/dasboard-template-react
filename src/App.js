import { Layout } from 'antd'
import React, { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import logo from './assets/logo.png'

import SideBar from './components/SideBar/SideBar'
import Footer from './pages/Footer/Footer'
import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

import './scss/global.scss'
import './App.scss'
import ListUser from './pages/ListUser/ListUser'
import FormInput from './components/Form/Form'
import Kanba from './pages/Kanba/Kanba'
import Editor from './pages/Editor/Editor'
import ChatJs from './pages/Chatjs/ChatJs'
import AdvTable from './pages/AdvTable/AdvTable'

const App = () => {
  const { Sider, Content } = Layout
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState('dark')
  const { user } = useContext(AuthContext)

  return (
    <>
      {!user ? (
        <>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      ) : (
        <>
          <Layout className="container">
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              className={theme}>
              <div className="logo">
                {/* <img src={logo} alt="logo" className="logo_img" /> */}
              </div>
              <SideBar theme={theme} />
            </Sider>
            <Layout className="site-layout">
              <Header
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                theme={theme}
                setTheme={setTheme}
              />
              <Content>
                <Routes>
                  <Route path="/dasboard" element={<Home />} />
                  <Route path="/project" element={<Profile />} />
                  <Route path="/list-user" element={<ListUser />} />
                  <Route path="/adv-table" element={<AdvTable />} />
                  <Route path="/form" element={<FormInput />} />
                  <Route path="/kanba" element={<Kanba />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/chatjs" element={<ChatJs />} />
                </Routes>
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </>
      )}
    </>
  )
}
export default App

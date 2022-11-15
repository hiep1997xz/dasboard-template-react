import {
  CaretDownOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Dropdown, Menu, Switch } from 'antd'
import React, { useContext, useState } from 'react'
import icon_signin from '../../assets/icon_login.png'
import profile_icon from '../../assets/profile_icon.png'
import thongbao from '../../assets/thongbao.png'
import { AuthContext } from '../../context/AuthContext'

import light from '../../assets/light.png'
import dark from '../../assets/dark.png'

import './Header.scss'

export const menuClose = -200

const Header = ({ 
  collapsed, 
  setCollapsed,
  theme,
  setTheme
 }) => {
  const { user, logOut } = useContext(AuthContext)
  const [menuPosistion, setMenuPosition] = useState(menuClose)


  const menu = () => {
    return (
      <>
        <Menu>
          <Menu.Item key={1}>
            <div
              className="p-5px pl-5px logout"
              onClick={() => {
                setMenuPosition(menuClose)
              }}>
              <span className="logout_icon">
                <img
                  src={profile_icon}
                  alt="profile_icon"
                  className="img_icon_menu"
                />
              </span>
              <span>Profile</span>
            </div>
          </Menu.Item>
          <Menu.Item key={2}>
            <div
              className="p-5px pl-5px logout"
              onClick={() => {
                setMenuPosition(menuClose)
                logOut()
              }}>
              <span className="logout_icon">
                <LoginOutlined />
              </span>
              <span>LogOut</span>
            </div>
          </Menu.Item>
        </Menu>
      </>
    )
  }
  
  const handleChangeTheme = (value) => {
    setTheme(value ? 'light' : 'dark');
  }

  return (
    <div className={`header_container`}>
      <div className="group_theme">
        <div className="trigger" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div>
          <img src={light} alt="" className="img_icon_light" />
          <Switch onChange={handleChangeTheme}></Switch>
          <img src={dark} alt="" className="img_icon_dark" />
        </div>
      </div>

      <div className="group_icon">
        <div className="icon_margin">
          <img src={thongbao} alt="icon_signin" className="img_icon" />
        </div>
        <div className="icon_margin">
          <img src={icon_signin} alt="icon_signin" className="img_icon" />
          <span>{user.email}</span>
          <Dropdown
            placement="bottomLeft"
            className="group_logout"
            overlay={menu()}
            trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <CaretDownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Header

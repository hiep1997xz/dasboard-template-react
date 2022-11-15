import {
  CaretDownOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import icon_signin from '../../assets/icon_login.png'
import profile_icon from '../../assets/profile_icon.png'
import thongbao from '../../assets/thongbao.png'

import './Header.scss'

export const menuClose = -200

const Header = ({ collapsed, setCollapsed }) => {
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

  return (
    <div className="header_container">
      <div className="trigger" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="group_icon">
        <div className="icon_margin">
          <img src={thongbao} alt="icon_signin" className="img_icon" />
        </div>
        <div className="icon_margin">
          <img src={icon_signin} alt="icon_signin" className="img_icon" />
          <span>Name</span>
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

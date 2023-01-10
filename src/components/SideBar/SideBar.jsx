import {
  AreaChartOutlined,
  EditOutlined,
  HolderOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UserOutlined,
  TableOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ theme }) => {
  const navigate = useNavigate()

  const handleUserClick = () => navigate('/dasboard')
  const handleVideosClick = () => navigate('/project')
  const handleListUserClick = () => navigate('/list-user')
  const handleAdvTableClick = () => navigate('/adv-table')
  const handleKanbaClick = () => navigate('/kanba')
  const handleEditorClick = () => navigate('/editor')
  const handleChatJs = () => navigate('/chatjs')

  return (
    <>
      <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={handleUserClick}>
          <HomeOutlined />
          <span> Home</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleListUserClick}>
          <UnorderedListOutlined />
          <span> ListUser</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleAdvTableClick}>
          <TableOutlined />
          <span>Adv Table</span>
        </Menu.Item>
        {/* <Menu.SubMenu title={titleSubMenu}>
          <Menu.Item>item 3</Menu.Item>
          <Menu.Item>item 3</Menu.Item>
          <Menu.Item>item 3</Menu.Item>
        </Menu.SubMenu> */}
        <Menu.Item key="4" onClick={handleKanbaClick}>
          <HolderOutlined />
          <span>Kanba</span>
        </Menu.Item>
        <Menu.Item key="5" onClick={handleEditorClick}>
          <EditOutlined />
          <span>Editor</span>
        </Menu.Item>
        <Menu.Item key="6" onClick={handleChatJs}>
        <AreaChartOutlined />
          <span>ChatJs</span>
        </Menu.Item>
        <Menu.Item key="7" onClick={handleVideosClick}>
          <UserOutlined />
          <span> Project</span>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default SideBar

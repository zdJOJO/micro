import React, { FC, useMemo, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import classes from './index.module.less'

const { Header, Content, Footer, Sider } = Layout

const PedestalLayout: FC<any> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = useMemo(() => {
    return [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `nav ${index + 1}`
    }))
  }, [])

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        // collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken)
        }}
      >
        <div className={classes['logo']} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menuItems} />
      </Sider>
      <Layout>
        <Header className={classes['site-layout-sub-header-background']} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed)
          })}
        </Header>
        <Content style={{ margin: '16px 16px 0' }}>
          <div className={classes['site-layout-background']}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default PedestalLayout

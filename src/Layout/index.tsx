import { cloneDeep } from 'lodash-es'
import React, { useCallback, useMemo, useState } from 'react'
import { Outlet, To, useNavigate } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import routes from '@/route/routesConfig'
import classes from './index.module.less'

const { Header, Content, Footer, Sider } = Layout

const PedestalLayout = () => {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  // 将路由的 path 从相对路径转换成 绝对路径
  const transformRoutes = useCallback((routes: any[], parentPath?: string) => {
    if (!routes || routes.length === 0) return []
    routes.forEach(route => {
      const oldPath = route.path
      route.path = parentPath ? `${parentPath}${oldPath}` : oldPath
      transformRoutes(route.children, oldPath)
    })
    return routes
  }, [])

  const menuItems = useMemo(() => {
    const newRoutes = transformRoutes(cloneDeep(routes))
    return (newRoutes[0]?.children || [])
      .filter((route: { path: any; label: any }) => !!route.path && !!route.label)
      .map((route: { path: To; icon: any; label: any }) => ({
        key: route.path as string,
        icon: route.icon,
        label: route.label,
        onClick: () => {
          navigate(route.path)
        }
      }))
  }, [transformRoutes])

  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={classes['logo']} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          items={menuItems}
          onSelect={({ selectedKeys: keys }) => setSelectedKeys(keys)}
        />
      </Sider>
      <Layout>
        <Header className={classes['site-layout-sub-header-background']} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed)
          })}
        </Header>
        <Content style={{ margin: '16px 16px 0' }}>
          <div className={classes['site-layout-background']}>
            <Outlet />
          </div>
        </Content>
        <Footer className={classes.footer} style={{ textAlign: 'center' }}>
          Ant Design ©2022 Created by zdJOJO
        </Footer>
      </Layout>
    </Layout>
  )
}

export default PedestalLayout

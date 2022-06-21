import React, { lazy, ReactNode } from 'react'
import { PieChartOutlined } from '@ant-design/icons'
import PedestalLayout from '@/Layout'
import { RouteObject } from 'react-router-dom'
import { ROUTE_PATH } from './enum'

const App1 = lazy(() => import('@/Modules/App1'))
const App2 = lazy(() => import('@/Modules/App2'))
const NotFound = lazy(() => import('@/404'))

interface IRoute extends RouteObject {
  label?: string
  icon?: ReactNode
  children?: IRoute[]
}

const routes: Array<IRoute> = [
  {
    path: '/',
    element: <PedestalLayout />,
    children: [
      { index: true, element: <App1 /> },
      {
        path: `${ROUTE_PATH.APP_1}`,
        element: <App1 />,
        label: '子应用1',
        icon: <PieChartOutlined />
      },
      {
        path: `${ROUTE_PATH.APP_2}`,
        element: <App2 />,
        label: '子应用2',
        icon: <PieChartOutlined />
      },
      { path: '*', element: <NotFound /> }
    ]
  }
]

export default routes

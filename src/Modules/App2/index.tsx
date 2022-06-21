import { ROUTE_PATH } from '@/route/enum'
import React from 'react'

const App2 = () => {
  return (
    <div>
      App 2
      <micro-app name={ROUTE_PATH.APP_2} url="http://127.0.0.1:8002" baseroute={`/${ROUTE_PATH.APP_2}`} />
    </div>
  )
}

export default App2

import { ROUTE_PATH } from '@/route/enum'
import React from 'react'

const App1 = () => {
  return (
    <div>
      <micro-app name={ROUTE_PATH.APP_1} url="http://127.0.0.1:3001/" baseroute={`/${ROUTE_PATH.APP_1}`} />
    </div>
  )
}

export default App1

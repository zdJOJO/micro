import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter as RouterV5, Switch, Route } from 'react-router-dom-v5'
import Routes from './route'
import './App.less'

/**
 *  react-router-dom V6版本
 *
 */
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </div>
  )
}

export default App

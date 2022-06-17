import React from 'react'
import classes from './index.module.less'
import notFoundImg from '../assets/images/404.png'

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <img src={notFoundImg} />
    </div>
  )
}

export default NotFound

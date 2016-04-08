import React from 'react'
//import styles from './styles.css'
const MainHeader = ({ children, title }) => (
  <div className="layout__main-header f2 black-80 tracked bold plm">
    <div className="layout__main-header__title">
      {title}
    </div>
    {
      children ?
        <div className="layout__main-header__children">
            { children }
        </div> :
        null
    }
  </div>
)

export default MainHeader

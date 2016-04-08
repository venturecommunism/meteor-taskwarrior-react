import React from 'react'
const SidebarButton = ({ children, toggleOverlay, type }) => (
  <div
    onClick={toggleOverlay.bind(null, type)}
    className="sidebar-header--button__container dim pam">
    <div className="sidebar-header--button__inner light-green f2">
      { children }
    </div>
  </div>
)

export default SidebarButton
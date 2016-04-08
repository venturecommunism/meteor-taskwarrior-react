import React from 'react'
const SideBar = ({ content}) => (
  <div className="sidebar_outer">
    {content()}
  </div>
)
export default SideBar

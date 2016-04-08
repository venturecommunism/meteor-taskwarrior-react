import React from 'react'
import MDInfo from 'react-icons/lib/md/info-outline'
import MDSettings from 'react-icons/lib/md/settings'
import MDFavorite from 'react-icons/lib/md/favorite'
import SidebarHeader from '../../../_layout/components/sidebar/header.jsx'
const Header = ({}) => {
  return (
    <SidebarHeader>
      <div className="sidebar--header_inner">
        <div className="fileinfo--header__tab header-height fileinfo--header__tab-active">
          <MDFavorite />
        </div>
        <div className="fileinfo--header__tab bold header-height">
          <MDInfo />
        </div>
        <div className="fileinfo--header__tab header-height">
          <MDSettings />
        </div>
      </div>
    </SidebarHeader>
  )
}

export default Header

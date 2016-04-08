import React from 'react'
import MDInfo from 'react-icons/lib/md/info-outline'
import MDSettings from 'react-icons/lib/md/settings'
import MDPeople from 'react-icons/lib/md/people'
import SidebarHeader from '../../../_layout/components/sidebar/header.jsx'
const Header = ({}) => {
  return (
    <SidebarHeader>
      <div className="sidebar--header_inner">
        <div className="fileinfo--header__tab header-height fileinfo--header__tab-active">
          <MDPeople />
        </div>
      </div>
    </SidebarHeader>
  )
}

export default Header
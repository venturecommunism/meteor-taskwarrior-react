import React from 'react'
import SidebarTop from '../../../_layout/components/sidebar/top.jsx'
import MDCreateFolder from 'react-icons/lib/md/create-new_folder'
import MDUploadFile from 'react-icons/lib/md/file-upload'

import FileInfo from './fileInfo.jsx'
import SidebarButton from './button.jsx'
const Top = ({name, fileUrl, userId, createdAt, toggleOverlay={toggleOverlay}}) => (
  <SidebarTop>
    <div className="sidebar-header--button__holder">
      <SidebarButton toggleOverlay={ toggleOverlay } type="folder">
        <MDCreateFolder />
      </SidebarButton>
      <SidebarButton toggleOverlay={ toggleOverlay } type="doc">
        <MDUploadFile />
      </SidebarButton>
    </div>
  </SidebarTop>
)

export default Top;

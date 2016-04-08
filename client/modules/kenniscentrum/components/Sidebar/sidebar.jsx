import React from 'react'
import SidebarBody from '../../../_layout/components/sidebar/body.jsx'
import Top from './top.jsx'
import Bottom from './bottom.jsx'
import Header from './header.jsx'
import FavoriteList from './FavoriteList/FavoriteList.jsx'

//import styles from './styles.css'

const SideBar = ({ favorietenStore, currentFile, toggleOverlay }) => {
  return (
    <div className="sidebar--container">
      <Top toggleOverlay={ toggleOverlay }/>
      <Header />
      <SidebarBody>
        <FavoriteList
          loading={favorietenStore.loading}
          favorites={favorietenStore.documents}/>
      </SidebarBody>
    </div>
  )
}

export default SideBar

//usersList={ usersList }
//createFolder={ createFolder }
//isFetchingUserList={ isFetchingUserList }
//listUsers={ listUsers }
//isModalOpen={ isModalOpen }
//toggleModal={ toggleModal } />

//<Top
//name={currentFile.fileName}
//fileUrl={currentFile.fileUrl}
//createdAt={currentFile.createdAt}
//userId={currentFile.userId}
///>

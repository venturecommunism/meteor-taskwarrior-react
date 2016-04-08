import React from 'react'
import MenuBar from './menu_bar.jsx'
import MainContent from './main_content.jsx'
import SideBar from './side_bar.jsx'
import TopBar from '../components/topbar/topbar.jsx'
import SideBarTop from './sidebar/top.jsx'
import SideBarHeader from './sidebar/header.jsx'
import SideBarBody from './sidebar/body.jsx'
import SnackbarContainer from '../../../modules/snackbar/containers/snackbar.jsx'

//import styles from '../style.css'

export default class extends React.Component {
  render() {
    const { side_menu, main_content, sidebar_content, sidebar_top_content, topbar_content} = this.props
    return (
      <div>
        <SnackbarContainer />
        <MenuBar/>
        <TopBar content={topbar_content}/>
        <MainContent content={main_content}/>
        <SideBar content={sidebar_content}/>
      </div>
    )
  }
}

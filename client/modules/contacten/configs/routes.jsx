import React from 'react'
import { mount } from 'react-mounter'
import Layout from '../../_layout/components/layout.jsx'
import ContactenContainer from '../containers/contacten.js'
import Searchbar from '../containers/Searchbar.jsx'
//import SideBar from '../containers/sidebar.jsx'
import Sidebar from '../containers/Sidebar.jsx'

export default (injectDeps, {FlowRouter}) => {
  const layoutCtx = injectDeps(Layout)
  FlowRouter.route('/contacten/', {
    name: 'contacten.list',
    action(params, queryParams) {
      const { page } = queryParams

      mount(layoutCtx, {
        main_content: () => (<ContactenContainer page={page}/>),
        sidebar_content: () => (<Sidebar />),
        topbar_content: () => (<Searchbar />),
      })
    }
  })
  FlowRouter.route('/contacten/profiel', {
    name: 'contacten.profiel',
    action(params, queryParams) {
      const { page } = queryParams

      mount(layoutCtx, {
        main_content: () => (<ContactenContainer page={page}/>),
        sidebar_content: () => null,
        topbar_content: () => (<Searchbar />),
      })
    }
  })
}

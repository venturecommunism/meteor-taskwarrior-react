import React from 'react'
//import { FlowRouter } from 'meteor/kadira:flow-router'
import { mount } from 'react-mounter'
//import { Meteor } from 'meteor/meteor'

import Layout from '../../_layout/components/layout.jsx'
import SideBar from '../containers/sidebar.jsx'
import FileExplorer from '../containers/file_explorer.jsx'
import Searchbar from '../components/Searchbar/FileExplorerSearchbar.jsx'

export default (injectDeps, { FlowRouter }) => {

    const LayoutCtx = injectDeps(Layout)

    FlowRouter.route('/kenniscentrum/', {
        names: 'kenniscentrum.list',

        action(params, queryParams) {
            //console.log('Params', params)
            console.log('QueryParams', queryParams)
            mount(LayoutCtx, {
                main_content: () => (<FileExplorer folderId={'home'} />),
                sidebar_content: () => (<SideBar /> ),
                topbar_content: () => (<Searchbar />),
            })
        }
    })

    FlowRouter.route('/kenniscentrum/folder/', {
        names: 'kenniscentrum.folders',

        action(params, queryParams) {
            const { folderId } = params;
            const { id } = queryParams

            mount(LayoutCtx, {
                main_content: () => (<FileExplorer folderId={id} />),
                sidebar_content: () => (<SideBar /> ),
                topbar_content: () => (<Searchbar />),
            })
        }
    })

}

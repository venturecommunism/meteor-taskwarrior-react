/*

import ParamsExample from './ParamsExample.jsx'
import CreateTaskContainer from '../containers/CreateTaskContainer'
import TrendingTasks from './TrendingTasks.jsx'
import React from 'react'
import FeedList from './FeedList.jsx'

const Layout = ({tasks}) => (
  <div className="feed">
    <div className="container">

      <div className="col-25">
        <ParamsExample />
      </div>

      <div className="col-50">
        <CreateTaskContainer />
        <FeedList tasks={tasks} />
      </div>

      <div className="col-25">
      </div>

    </div>
  </div>
)

export default Layout


*/


import React from 'react';
import Sidebar from './_sidebar.jsx';
import ParamsExample from './ParamsExample.jsx'
import CreateTaskContainer from '../containers/CreateTaskContainer'

import dataComposer from '../composers/feed.jsx';
import Component from './_feed.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <ParamsExample />
            <Sidebar />
          </div>
          <div className="col-md-9">
            <CreateTaskContainer />
            <Container />
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import SideBar from './sidebar.jsx'
import CreateTaskContainer from '../state/createtask'

import paramsComposer from '../state/params'
import dataComposer from '../data/feed';
import Component from './_feed.jsx';
const Container = dataComposer(Component);
const SideBarContainer = paramsComposer(dataComposer(SideBar))

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <SideBarContainer />
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

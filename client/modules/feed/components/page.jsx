import React from 'react';

import createTaskComposer from '../state/createtask'
import CreateTask from './createtask.jsx'
const CreateTaskContainer = createTaskComposer(CreateTask) 

import paramsComposer from '../state/params'
import dataComposer from '../data/feed';
import Feed from './feed.jsx';
const FeedContainer = dataComposer(Feed);

import SideBar from './sidebar.jsx'
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
            <FeedContainer />
          </div>
        </div>
      </div>
    );
  }
}

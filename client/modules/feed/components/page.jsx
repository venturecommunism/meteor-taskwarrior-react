import React from 'react';

import createTaskComposer from '../state/createtask'
import CreateTask from './createtask.jsx'
const CreateTaskContainer = createTaskComposer(CreateTask) 

import Container from '../containers/container'
import Composer from '../data/composer'

import MainQuery from '../state/query'
import Feed from './feed.jsx'
const FeedContainer = Container(Composer, MainQuery, Feed)

import SideBarQuery from '../state/sidebarquery'
import ParamsComposer from '../state/params'
import SideBar from './sidebar.jsx'
const SideBarContainer = ParamsComposer(Container(Composer, SideBarQuery, SideBar))

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

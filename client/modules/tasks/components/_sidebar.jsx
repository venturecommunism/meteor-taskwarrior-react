import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">Inbox navigation</h3>
        </div>
        <div className="box-body no-padding">
          <ul className="nav nav-pills nav-stacked">
            <li><a href="/tasks"><i className="fa "></i> Inbox</a></li>
            <li><a href="/tasks/add"><i className="fa "></i> Add task</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

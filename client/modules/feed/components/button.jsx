import React from 'react';

export default ({data, actions, taskid}) => (
  <div key={data.uuid} className="universal-button" >
    <div className={data.uuid} onClick={ preventDefault(actions.buttonpress, taskid) }>{actions.buttontext()}</div> <br />
    <div>id: {taskid}</div>
  </div>
)

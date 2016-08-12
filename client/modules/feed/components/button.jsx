import React from 'react';

export default ({data, actions, taskid}) => (
  <div key={data.uuid} className="universal-button" >
    <button className={data.uuid} onClick={ preventDefault(actions.buttonpress, taskid) }>{actions.buttontext()}</button> <br />
  </div>
)

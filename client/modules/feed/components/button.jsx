import React from 'react';

export default ({data, actions}) => (
  <div key={data.uuid} className="universal-button" >
    <div className={data.uuid} onClick={actions.buttonpress}>{actions.buttontext()}</div> <br />
  </div>
)

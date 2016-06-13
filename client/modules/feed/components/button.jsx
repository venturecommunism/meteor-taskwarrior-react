import React from 'react';

export default ({...queryParams, data, actions}) => (
  <div key={queryParams.projects} className="universal-button">

    <div onClick={actions.buttonpress}>{actions.buttontext()}</div> <br />
  </div>
)

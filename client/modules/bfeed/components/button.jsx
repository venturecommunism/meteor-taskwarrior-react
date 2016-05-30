import React from 'react';

export default ({data, actions}) => (
  <div key={data._id} className="universal-button">

    <div onClick={actions.buttonpress}>{actions.buttontext()}</div> <br />
  </div>
)

import React from 'react';

export default ({task, buttonpress, buttontext}) => (
  <div key={task._id} className="universal-button">

    <div onClick={buttonpress}>{buttontext}</div> <br />
  </div>
)

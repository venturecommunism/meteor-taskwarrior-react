import React from 'react';

export default ({task, buttonpress}) => (
  <div key={task._id} className="universal-button">

    <div onClick={buttonpress}>Click</div> <br />
  </div>
)

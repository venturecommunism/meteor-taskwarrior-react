import React from 'react'
const Photobox = ({image}) => (
  <div className="profile-overview__photo">
    <div className="profile-overview__photo__picture">
      <img src={image} alt=""/>
    </div>
    <div className="profile-overview__photo__change">

    </div>
  </div>
)
export default Photobox

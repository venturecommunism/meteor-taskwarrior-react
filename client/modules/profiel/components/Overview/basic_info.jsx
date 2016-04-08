import React from 'react'
//import style from './style.css'
const BasicInfo = ({firstName, lastName, functie}) => (
  <div className="profile-overview__basicinfo">
    <div className="f3 black-70 bold mbs tracked-tight-l profile-overview__basicinfo__name">
      {`${firstName} ${lastName}`}
    </div>
    <div className="f5 black-70 mbl profile-overview__basicinfo__function">
      {functie}
    </div>
    <div className="profile-overview__basicinfo__praktijk black-70">
      <div className="profile-overview__basicinfo__praktijk__name mbs">
        Praktijk XYZ
      </div>
      <div className="profile-overview__basicinfo__praktijk__plaats">
        EMC1, EMC2
      </div>
    </div>
  </div>
)
export default BasicInfo

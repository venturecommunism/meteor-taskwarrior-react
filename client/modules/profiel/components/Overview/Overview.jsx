import React from 'react'
import PropTypes from '../../../../lib/PropTypes'
import Photobox from './photobox.jsx'
import BasicInfo from './basic_info.jsx'

//import style from './style.css'

const Overview = ({image, firstName, lastName, functie}) => (
  <div className="profile-overview">
    <Photobox image={image}/>
    <BasicInfo
      firstName={firstName}
      lastName={lastName}
      functie={functie}/>
  </div>
)
Overview.propTypes = {
  image: PropTypes.string.describe(
    'image URL to show Profile Image'
  ),
  firstName: PropTypes.string.isRequired.describe(
    'First name of loaded profile'
  ),
  lastName: PropTypes.string.isRequired.describe(
    'Last name of loaded profile'
  ),
  functie: PropTypes.string.describe(
    'Function is loaded profile'
  )
}
export default Overview

import React from 'react' //eslint-disable-line no-unused vars
import PropTypes from '../../../../lib/PropTypes'
//import './styles.css'
const FavoriteContactListItem = ({id, firstName, gotoProfile, lastName, image, mobile}) => (
  <div
    onClick={gotoProfile.bind(null, id)}
    className="favorite-contact__list-item">
    <div className="favorite-contact__list-item__icon">
      <img src={image} alt=""/>
    </div>
    <div className="favorite-contact__list-item__info">
      <div className="favorite-contact__list-item__info-name">
        {firstName + " " + lastName}
      </div>
      <div className="favorite-contact__list-item__info-details">
        { mobile }
      </div>
    </div>
  </div>
)

FavoriteContactListItem.propTypes = {
  firstName: PropTypes.string.isRequired.describe(
    'Firstname of contact'
  ),
  lastName: PropTypes.string.isRequired.describe(
    'Lastname of contact'
  ),
  mobile: PropTypes.string.isRequired.describe(
    'Mobile # of contact from contact field'
  )

}
export default FavoriteContactListItem

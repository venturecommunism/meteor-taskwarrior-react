import React from 'react'
import DropdownContactListItem from './DropdownContactListItem.jsx'
import PropTypes from '../../../../lib/PropTypes'

const ContactListItem = ({index, image, id, type, gotoProfile, firstName, lastName, emc, discipline, makeContactFavorite}) => {
  const handleClick = (event) => {
    console.log('clicked')
    gotoProfile(id)
  }

  const optionsClicked = () => {
    const name = firstName + ' ' + lastName
    makeContactFavorite(id, name)
  }

  return (
  <div className="contact-list--item black-60 f4 pbm ptm"
       key={`contact-item-${type}-${id}-${index}`}
       onClick={handleClick}>
    <div className="contact-table-item contact-table-item__icon">
      <img className="contact-table-item--icon__image" src={image} alt=""/>
    </div>
    <div className="contact-table-item contact-table-item__name">
      {`${firstName} ${lastName}`}
    </div>
    <div className="contact-table-item contact-table-item__discipline">
      { discipline }
    </div>
    <div className="contact-table-item contact-table-item__emc">
      { emc }
    </div>
    <div className="contact-table-item contact-table-item__dropdown"
    onClick={(e) => {e.stopPropagation()}}>
      <DropdownContactListItem makeContactFavorite={optionsClicked}/>
    </div>
  </div>
  )
}
ContactListItem.defaultProps = {
  image: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
}
ContactListItem.propTypes = {
  image: PropTypes.string.describe(
    'Profile image URL of user'
  ),
  firstName: PropTypes.string.describe(
    'Firstname of contact'
  ),
  lastName: PropTypes.string.describe(
    'Lastname of contact'
  ),
  discipline: PropTypes.string.describe(
    'Discipline of contact'
  ),
  emc: PropTypes.string.describe(
    'EMC of contact'
  )
}
export default ContactListItem
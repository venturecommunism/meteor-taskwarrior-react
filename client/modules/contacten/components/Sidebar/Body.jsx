import React from 'react' //eslint-disable-line no-unused vars
import SidebarBody from '../../../_layout/components/sidebar/body.jsx'
import FavoriteContactItem from './FavoriteContactItem.jsx'
import PropTypes from '../../../../lib/PropTypes'
const FavorietenBody = ({contacten, loading, gotoProfile}) => {
  return (
    <div>
      <SidebarBody>
        <div className="favorite-contact-header f4 pls mtm mbm black-80">
          Mijn contacten
        </div>
        <div className="favorite-contact-list f5 w-100 black-60 list-group-item">
          {
            loading ? 'Aan het laden' :
              contacten.map((contact, index) => {
                return (
                  <FavoriteContactItem
                    key={'favorieten-contact-item-index$' + index}
                    gotoProfile={gotoProfile}
                    id={contact._id}
                    firstName={contact.profile.firstName}
                    lastName={contact.profile.lastName}
                    image={contact.profile.image}
                    mobile={contact.contact.mobile}
                  />
                )
              })
          }
        </div>
      </SidebarBody>
    </div>
  )
}
FavorietenBody.defaultProps = {
  loading: true
}
FavorietenBody.propTypes = {
  loading: PropTypes.bool.isRequired.describe(
    'Indication of favorties are already in favorites reducer')
}
export default FavorietenBody

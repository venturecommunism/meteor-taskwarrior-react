import React from 'react'
import ContactListItem from './ContactListItem.jsx'
//import styles from './styles.css'

class ContactList extends React.Component {
  render() {
    const { contacten, type, gotoProfile, makeContactFavorite } = this.props
    return (
      <div className="contact-list--container">
        {
          contacten.map((contact, index) => (
            <ContactListItem
              type={type}
              index={index}
              id={contact._id}
              makeContactFavorite={makeContactFavorite}
              gotoProfile={gotoProfile}
              firstName={contact.profile.firstName}
              lastName={contact.profile.lastName}
              image={contact.profile.image}
              discipline={contact.discipline}
              emc={contact.emc}
            />
          ))
        }
      </div>
    )
  }
}
export default ContactList

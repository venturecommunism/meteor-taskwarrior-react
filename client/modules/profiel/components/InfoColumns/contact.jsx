import React from 'react'
//import './style.css'
const ContactColumn = ({contact}) => (
  <div className="f4 black-80 info-column-item info-column-item__contact">
    <div className="info-column-item__title">
      Contact
    </div>
    <div className=" f5 black-80 info-column-item__body">
      <div className="info-column-item__body_item">
        {contact.phone}
      </div>
      <div className="info-column-item__body_item">
        {contact.mobile}
      </div>
      <div className="info-column-item__body_item">
        {contact.email}
      </div>
      <div className="info-column-item__body_item">
        {contact.website}
      </div>
    </div>
  </div>
)
export default ContactColumn

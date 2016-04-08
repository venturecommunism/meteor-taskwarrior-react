import React from 'react'
import Contact from './contact.jsx'
import AdresColumn from './adressen.jsx'
import NevenActiviteitenColumn from './nevenactiviteiten.jsx'
import SpecialisatiesColumn from './specialisaties.jsx'
import BiografieColumn from './biografie.jsx'
import PropTypes from '../../../../lib/PropTypes'
//import styles from './style.css'

const InfoColumn = ({ adressen, contact, specialisaties, nevenfuncties, bio }) => (
  <div className="info-column">
    <Contact contact={contact} />
    <NevenActiviteitenColumn nevenfuncties={nevenfuncties}/>
    <AdresColumn adressen={adressen}/>
    <SpecialisatiesColumn specialisaties={specialisaties}/>
    <BiografieColumn bio={bio} />
  </div>
)

InfoColumn.propTypes = {
    adressen: PropTypes.array.describe(
      'Collection of work adresses'
    ),
    contact: PropTypes.object.describe(
      'Contact details'
    ),
    specialisaties: PropTypes.array.describe(
      'Collection of Specialisaties'
    ),
    nevenfuncties: PropTypes.array.describe(
      'Collection of Nevenfuncties'
    ),
    bio: PropTypes.string.describe(
      'Personal biography'
    )
}
export default InfoColumn

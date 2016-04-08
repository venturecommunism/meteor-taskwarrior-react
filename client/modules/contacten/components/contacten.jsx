import React from 'react'
import Header from '../../_layout/components/header/main_header.jsx'
import TableHeader from './TableHeader/table_header.jsx'
import ContactList from '../components/ContactList/ContactList.jsx'
import SortButton from '../components/SortButton/SortButton.jsx'

//import './styles.css'

class Contacten extends React.Component {
  render() {
    const { contactsStore, searchUsers, contactsSearchStore, gotoProfile, listContacts, makeContactFavorite } = this.props
    const { isSearching, searchResults, searchActive } = contactsSearchStore

    return (
      <div className="contact-container">
        <Header title={searchActive ? "Zoekresultaten" : "Contacten"}>

          <SortButton listContacts={listContacts}/>

        </Header>
        <TableHeader />
        {
          searchActive ?
            <ContactList
              makeContactFavorite={makeContactFavorite}
              type={'list'}
              gotoProfile={gotoProfile}
              contacten={searchResults}/> :
            <ContactList
              makeContactFavorite={makeContactFavorite}
              type={'search'}
              gotoProfile={gotoProfile}
              contacten={contactsStore.contacts}/>
        }
      </div>
    )
  }
}
export default Contacten


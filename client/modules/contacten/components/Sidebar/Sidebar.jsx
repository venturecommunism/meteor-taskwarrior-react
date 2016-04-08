import React from 'react' //eslint-disable-line no-unused vars
import Top from './Top.jsx'

import Header from './Header.jsx'
import Body from './Body.jsx'
//import styles from './styles.css'

const ContactSidebar = ({ favorietenStore, gotoProfile }) => (
  <div>
    <Top />
    <Header/>
    <Body
      gotoProfile={gotoProfile}
      loading={favorietenStore.loading}
      contacten={favorietenStore.contacts} />
  </div>
)
export default ContactSidebar

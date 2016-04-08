import React from 'react'
import Header from '../_layout/components/header/main_header.jsx'
import TableHeader from './components/TableHeader/table_header.jsx'
import Overview from './components/Overview/Overview.jsx'
import InfoColumns from './components/InfoColumns/info_column.jsx'
import PropTypes from '../../lib/PropTypes'
class Profiel extends React.Component {
  render() {
    const { profile, isLoading } = this.props.profileStore
    return (
      <div>
        <Header title={"Profiel"}/>
        {
          isLoading ?
            'Profiel aan het laden' :
            <div>
              <Overview
                firstName={profile.profile.firstName}
                lastName={profile.profile.lastName}
                image={profile.profile.image}
                functie={profile.profile.functie}
              />
              <InfoColumns
                adressen={profile.adressen}
                contact={profile.contact}
                specialisaties={profile.specialisaties}
                nevenfuncties={profile.nevenfuncties}
                bio={profile.bio}
              />
            </div>
        }
      </div>
    )
  }
}
Profiel.defaultProps = {
  isLoading: true
}
Profiel.propTypes = {
  isLoading: PropTypes.bool.isRequired.describe(
    'Loading profile data yes or no'
  )
}
export default Profiel

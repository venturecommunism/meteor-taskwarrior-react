import { ApolloProvider } from 'react-apollo'

import React from 'react'
import { connect } from 'react-apollo'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Accounts } from 'meteor/std:accounts-ui'

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
})

const App = ({ userId, querywrapper }) => {
  return (
    <div>
      <Accounts.ui.LoginForm />
      { userId ? (
        <div>
          <pre>{JSON.stringify(querywrapper, null, 2)}</pre>
          <button onClick={() => querywrapper.refetch()}>Refetch!</button>
        </div>
      ) : 'Please log in!' }
    </div>
  )
}

// This container brings in Apollo GraphQL data
const AppWithData = connect({
  mapQueriesToProps({ ownProps }) {
      return {
        querywrapper: {
          query: gql`
            query getOverdueCalendarData ($dueafter: String) {
              oldfeed (dueafter: $dueafter) {
                due
                description
                uuid
              }
            }
          `,
          variables: {
             dueafter: ownProps.dueafter
          },
        },
      }
  },
})(App)

// This container brings in Tracker-enabled Meteor data
const AppWithUserId = createContainer(() => {
  //Session.set('now', formattedNow())
  var now = formattedNow()
  return {
    userId: Meteor.userId(),
    dueafter: now,
  }
}, AppWithData)

export default ({client}) => (
  <ApolloProvider client={client} >
    <AppWithUserId />
  </ApolloProvider>
)

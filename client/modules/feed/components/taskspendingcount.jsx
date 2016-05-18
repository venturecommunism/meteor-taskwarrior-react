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
     { !userId && !querywrapper.loading ? (
      <Accounts.ui.LoginForm />
     ) : '' }
      { userId && !querywrapper.loading ? (
        <div>
          {JSON.stringify(querywrapper, null, 2)}
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
            query {
              count (collection: "taskspending") {
                total
              }
            }
          `,
          variables: {
          },
        },
      }
  },
})(App)

// This container brings in Tracker-enabled Meteor data
const AppWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId(),
  }
}, AppWithData)

export default ({client}) => (
  <ApolloProvider client={client} >
    <AppWithUserId />
  </ApolloProvider>
)

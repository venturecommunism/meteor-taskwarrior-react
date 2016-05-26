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
          <ul>{querywrapper.query.return.map( (task) => 
            <li key={task.uuid}>
              <p>{countdowntimer(task.due)}</p>
              <p>{task.description}</p>
            </li>
          )}</ul>
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
              query (collection: "taskspending", limit: 5, dueafter: $dueafter) {
                return {
                  due
                  description
                  uuid
                }
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

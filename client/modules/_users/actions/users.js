export default {
    listUsers({LocalState, Meteor}) {
        LocalState.set('LIST_USERS_REQUEST', true)

        Meteor.call('_users.listUsers', (err, res) => {
            if (err) LocalState.set('LIST_USERS_ERROR', err)
            else {
                LocalState.set('LIST_USERS_ERROR', null)
                LocalState.set('LIST_USERS_SUCCESS', true)
                LocalState.set('LIST_USERS_RESPONSE', res)
            }
        })

        LocalState.set('LIST_USERS_REQUEST', false)
    }
}
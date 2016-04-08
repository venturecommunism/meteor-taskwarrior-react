import React from 'react'

import { Notification } from 'react-notification'

class Snackbar extends React.Component {
  getNotificationStyles() {
    let bar = {
      background: this.props.error ? '#EF5350' : '#332732'
    }

    let active = {
      left: '3rem',
      zIndex: 999
    }

    let action = {
      color: '#FFCCBC'
    }
    return { bar, active, action }
  }
  render() {
    const { closeSnackbar } = this.props
    const { open, message, error} = this.props.snackbarStore
    return (
      <Notification
        message={message}
        action={'Ok'}
        dismissAfter={5000}
        isActive={open}
        onClick={closeSnackbar}
        onDismiss={closeSnackbar}
        style={this.getNotificationStyles()}
      />
    )
  }
}
export default Snackbar

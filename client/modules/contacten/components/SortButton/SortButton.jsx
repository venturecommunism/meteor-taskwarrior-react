import React from 'react'
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton'
import PropTypes from '../../../../lib/PropTypes'

const SortButton = ({ listContacts }) => {

  const handleSort = (value, e) => {
    e.stopPropagation()
    listContacts(value)
  }
  return (
    <Wrapper
      className='AriaMenuButton f4'
      onSelection={handleSort}>
      <Button className='AriaMenuButton-trigger pts pbs plm prm '>
        Sorteer
      </Button>
      <Menu className='AriaMenuButton-menu'>
        <MenuItem className='AriaMenuButton-menuItem AriaMenuButton-menuItemWrapper pam'>
          Alfabetisch
        </MenuItem>
        <MenuItem className='AriaMenuButton-menuItem AriaMenuButton-menuItemWrapper pam'>
          EMC
        </MenuItem>
        <MenuItem className='AriaMenuButton-menuItem AriaMenuButton-menuItemWrapper pam'>
          Discipline
        </MenuItem>
      </Menu>
    </Wrapper>
  )
}

SortButton.propTypes = {
  listContacts: PropTypes.func.isRequired.describe(
    'Function that will call action to sort list by selected option'
  )
}

export default SortButton
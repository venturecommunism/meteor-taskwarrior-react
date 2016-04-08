export const LOAD_PROFILE = 'profiel/LOAD_PROFILE'
export const LOAD_PROFILE_REQUEST = 'profilel/LOAD_PROFILE_REQUEST'

const initialState = {
  profile: {},
  isEditing: false,
  isLoading: true
}

export function profileReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
        profile: {}
      }
    case LOAD_PROFILE:
      return {
        ...state,
        profile: action.profile,
        isLoading: false
      }
    default:
      return state
  }
}

export default {
  loadProfile() {
    console.log('load profiel!')
  }
}
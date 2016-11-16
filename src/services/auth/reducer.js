import { AUTH_STATE_CHANGED } from './actions'

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { loading: true, user: null }
export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
      return { loading: false, user: action.payload }
    default:
      return state
  }
}

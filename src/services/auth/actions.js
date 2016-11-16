export const AUTH_STATE_CHANGED = 'AUTH_STATE_CHANGED'

export function receiveUser (user) {
  return {
    type: AUTH_STATE_CHANGED,
    payload: user ? { email: user.email } : null
  }
}

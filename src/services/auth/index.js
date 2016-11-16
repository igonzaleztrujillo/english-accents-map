import firebase from 'firebase'
import { receiveUser } from './actions'

export const AUTH_PROVIDER_GOOGLE = 0
export const AUTH_PROVIDER_FACEBOOK = 1
export const AUTH_PROVIDER_TWITTER = 2
export const AUTH_PROVIDER_GITHUB = 3

export default function init (store) {
  firebase.auth().onAuthStateChanged(function (user) {
    console.log(user)
    store.dispatch(receiveUser(user))
  })
}

export function login (provider) {
  const firebaseProvider = getAuthProvider(provider)
  firebase.auth().signInWithRedirect(firebaseProvider)
}

export function logout () {
  firebase.auth().signOut()
}

function getAuthProvider (provider) {
  switch (provider) {
    case AUTH_PROVIDER_GOOGLE:
      return new firebase.auth.GoogleAuthProvider()
    case AUTH_PROVIDER_FACEBOOK:
      return new firebase.auth.FacebookAuthProvider()
    case AUTH_PROVIDER_TWITTER:
      return new firebase.auth.TwitterAuthProvider()
    case AUTH_PROVIDER_GITHUB:
      return new firebase.auth.GithubAuthProvider()
    default:
      throw 'Wrong authentication provider'
  }
}

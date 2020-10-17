import firebase from 'firebase/app'
import 'firebase/firestore'
import dotenv from 'dotenv'
dotenv.config()

const {
  VUE_APP_apiKey,
  VUE_APP_authDomain,
  VUE_APP_databaseURL,
  VUE_APP_projectId,
  VUE_APP_storageBucket,
  VUE_APP_messagingSenderId,
  VUE_APP_appId
} = process.env

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: VUE_APP_apiKey,
    authDomain: VUE_APP_authDomain,
    databaseURL: VUE_APP_databaseURL,
    projectId: VUE_APP_projectId,
    storageBucket: VUE_APP_storageBucket,
    messagingSenderId: VUE_APP_messagingSenderId,
    appId: VUE_APP_appId
  })
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
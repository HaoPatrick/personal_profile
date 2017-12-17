// const Firebase = () => import(/* webpackChunkName: "firebase" */ 'firebase')
import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBYDjrYBVpyiCBGyrMHTrhElsajvebynpM',
  authDomain: 'testproject-52cfa.firebaseapp.com',
  databaseURL: 'https://testproject-52cfa.firebaseio.com',
  storageBucket: 'testproject-52cfa.appspot.com',
  messagingSenderId: '363300347449'
}

const firebaseApp = Firebase.initializeApp(config, 'all')

export const firebase = Firebase
export const db = firebaseApp.database()
export const storage = firebaseApp.storage()
export const authFunc = firebaseApp.auth()
export const auth = firebaseApp.auth

import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBucxWMmfPtqfdv8XfVyqib2HRSsKfAOXc',
  authDomain: 'blood-bank-app-007.firebaseapp.com',
  projectId: 'blood-bank-app-007',
  storageBucket: 'blood-bank-app-007.appspot.com',
  messagingSenderId: '937138906715',
  appId: '1:937138906715:web:58895f627f3f67a191017e',
}

export const firebase2 = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth
export const db = firebase.database()
export const storage = firebase.storage()
export const firestore = firebase.firestore()

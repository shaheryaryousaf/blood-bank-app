import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types'
import { auth, firebase2, db, firestore } from '../config/firebase'

export const signUp = (name, email, password, password2) => async (
  dispatch
) => {
  try {
    if (password !== password2) {
      alert("Passwords don't match.")
      return
    }
    await firebase2
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          email,
          name,
        }
        const usersRef = firestore.collection('profiles')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            console.log(response)
          })
          .catch((error) => {
            alert(error)
          })
      })
      .catch((error) => {
        alert(error)
      })
  } catch (error) {
    var errorCode = error.code
    var errorMessage = error.message
    console.log(errorCode)
    console.log(errorMessage)
    dispatch({
      type: CREATE_USER_FAIL,
    })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    await firebase2
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firestore.collection('profiles')
        usersRef
          .doc(uid)
          .get()
          .then((userData) => {
            if (!userData.exists) {
              alert('User does not exist anymore.')
              return
            }
            const user = userData.data()
            dispatch({
              type: LOGIN_SUCCESS,
              payload: response,
            })
          })
          .catch((error) => {
            alert(error)
          })
      })
      .catch((error) => {
        alert(error)
      })
  } catch (error) {
    console.log(error)
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

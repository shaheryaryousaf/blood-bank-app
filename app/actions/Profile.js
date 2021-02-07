import {
  COMPLETE_PROFILE_SUCCESS,
  COMPLETE_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_ALL_PROFILES_SUCCESS,
  GET_ALL_PROFILES_FAIL,
} from './types'
import { firestore } from '../config/firebase'

/* ============================== */
/* CREATE NEW USER PROFILE */
/* ============================== */
export const completeProfile = (data) => async (dispatch) => {
  try {
    firestore.collection('profiles').doc(data.id).update({
      phone: data.phone,
      age: data.age,
      blood_group: data.blood_group,
      address: data.address,
      city: data.city,
      bio: data.bio,
    })
    dispatch({
      type: COMPLETE_PROFILE_SUCCESS,
      payload: res,
    })
  } catch (err) {
    dispatch({
      type: COMPLETE_PROFILE_FAIL,
    })
  }
}

/* ============================== */
/* GET ALL PROFILES */
/* ============================== */
export const getAllProfiles = () => async (dispatch) => {
  try {
    firestore.collection('profiles').onSnapshot((snapshot) => {
      const postData = []
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
      console.log(postData)
      dispatch({
        type: GET_ALL_PROFILES_SUCCESS,
        payload: postData,
      })
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_PROFILES_FAIL,
    })
  }
}

/* ============================== */
/* GET USER PROFILE */
/* ============================== */
export const getProfile = (data) => async (dispatch) => {
  try {
    firestore
      .collection('profiles')
      .doc(data)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: doc.data(),
          })
        } else {
          dispatch({
            type: GET_PROFILE_FAIL,
          })
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error)
      })
  } catch (err) {
    dispatch({
      type: GET_PROFILE_FAIL,
    })
  }
}

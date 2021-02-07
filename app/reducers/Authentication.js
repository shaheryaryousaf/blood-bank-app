import {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/types'
import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState = {
  user: null,
  isAuthenticated: AsyncStorage.getItem('token') ? true : false,
  token: AsyncStorage.getItem('token'),
}

const auth = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
      }
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', payload.user)
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
      }
    case CREATE_USER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}
export default auth

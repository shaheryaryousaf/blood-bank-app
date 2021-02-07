import {
  COMPLETE_PROFILE_SUCCESS,
  COMPLETE_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_ALL_PROFILES_SUCCESS,
  GET_ALL_PROFILES_FAIL,
} from '../actions/types'

const initialState = {
  profile: {},
  profiles: [],
}

const Profile = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ALL_PROFILES_SUCCESS:
      return {
        ...state,
        profiles: payload,
      }
    case COMPLETE_PROFILE_SUCCESS:
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: payload,
      }
    case COMPLETE_PROFILE_FAIL:
    case GET_PROFILE_FAIL:
    case GET_ALL_PROFILES_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}
export default Profile

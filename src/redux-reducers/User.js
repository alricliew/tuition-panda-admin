import * as common from "../js/common";
import { createSlice } from '@reduxjs/toolkit'

const userBaseData = {
  [common.UID_KEY]: "",
  [common.NAME_KEY]:  "",
  [common.USERNAME_KEY]: "",
  [common.IMAGE_KEY]: "",
  [common.PHONE_KEY]: "",
  [common.EMAIL_KEY]: "",
  [common.LAST_LOGIN_KEY]: "",
  [common.LAST_UPDATE_KEY]: "",
  [common.ACCOUNT_STATUS_KEY]: "",

  [common.LANGUAGE_KEY]: "",
  [common.EMAIL_VERIFIED_KEY]:"",
  [common.USER_NUMBER_KEY]: "",
  [common.PROVIDER_ID_KEY]: "",
  [common.CREATE_AT_KEY]: "",
}

export const userBase = createSlice({
  name: 'User',
  initialState: userBaseData,
  reducers: {
    setUserBase: (state, action) => {
      return {...state, ...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserBase } = userBase.actions

export default userBase.reducer


// // Redux - User Reducer
// Ref: https://www.youtube.com/watch?v=CVpUuw9XSjY
// const userBaseData = {
//   [common.UID_KEY]: "",
//   [common.NAME_KEY]: "",
//   [common.USERNAME_KEY]: "",
//   [common.IMAGE_KEY]: "",
//   [common.PHONE_KEY]: "",
//   [common.EMAIL_KEY]: "",
//   [common.LAST_LOGIN_KEY]:  "",
//   [common.LAST_UPDATE_KEY]: "",
//   [common.ACCOUNT_STATUS_KEY]: "",
//   isLogged: false,
// }

// // action = {type ="", payload = {}}
// const userBaseReducer = (state = userBaseData, action) => {
//   switch (action.type) {
//     case 'SET':
//       return { ...state, ...action.payload } // Upating current state
//     case 'UNSET':
//       return userBaseData // Reset Current state to default.
//     default:
//       return state
//   }
// }

// export default userBaseReducer;
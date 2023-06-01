import { configureStore } from '@reduxjs/toolkit'

import userBaseReducer from "./redux-reducers/User";
import coreuiStateReducer from './redux-reducers/CoreuiState'; // Used for show/hide sidebar

const store = configureStore({
  reducer: {
    userBase: userBaseReducer, // Base User, isLogged
    // userInfo: userInfoReducer, // User Info, isLogged
    coreuiState: coreuiStateReducer
  },
})

export default store

// import { createStore } from 'redux'
// const initialState = {
//   sidebarShow: true,
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }
// const store = createStore(changeState)
// export default store

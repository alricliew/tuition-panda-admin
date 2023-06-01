import * as common from "../js/common";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
}

export const coreuiState = createSlice({
  name: 'coreuiState',
  initialState: initialState,
  reducers: {
    setCoreuiState: (state, action) => {
      return {...state, ...action.payload}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCoreuiState } = coreuiState.actions

export default coreuiState.reducer


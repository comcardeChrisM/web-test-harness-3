import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'

export interface Tokens {
  globalError: object | null
}

const initialState: Tokens = {
  globalError: null,
}

export const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setGlobalError: {
      reducer(
        state: WritableDraft<Tokens>,
        action: PayloadAction<object | null>
      ) {
        console.debug(action.payload)
        state.globalError = action.payload
      },
      prepare(value: object | null) {
        return { payload: value }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGlobalError } = errorsSlice.actions

export default errorsSlice.reducer

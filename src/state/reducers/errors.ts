import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'

import { GlobalError } from '@/types/general'

export interface Tokens {
  globalError: GlobalError | null
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
        action: PayloadAction<GlobalError | null>
      ) {
        state.globalError = action.payload
      },
      prepare(value: GlobalError | null) {
        return { payload: value }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGlobalError } = errorsSlice.actions

export default errorsSlice.reducer

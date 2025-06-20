import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'

export interface Tokens {
  client: string | null
  server: string | null
}

const initialState: Tokens = {
  client: null,
  server: null,
}

export const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setClient: {
      reducer(state: WritableDraft<Tokens>, action: PayloadAction<string>) {
        state.client = action.payload
      },
      prepare(value: string) {
        return { payload: value }
      },
    },
    setServer: {
      reducer(state: WritableDraft<Tokens>, action: PayloadAction<string>) {
        state.server = action.payload
      },
      prepare(value: string) {
        return { payload: value }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { setClient, setServer } = tokensSlice.actions

export default tokensSlice.reducer

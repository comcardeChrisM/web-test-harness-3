import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'

export interface ClientConfiguration {
  config: object
}

const initialState: ClientConfiguration = {
  config: {},
}

export const clientConfigurationSlice = createSlice({
  name: 'clientConfiguration',
  initialState,
  reducers: {
    setClientConfiguration: {
      reducer(
        state: WritableDraft<ClientConfiguration>,
        action: PayloadAction<object>
      ) {
        state.config = action.payload
      },
      prepare(value: object) {
        return { payload: value }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { setClientConfiguration } = clientConfigurationSlice.actions

export default clientConfigurationSlice.reducer

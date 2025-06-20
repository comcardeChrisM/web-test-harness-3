import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'

import { ClientConfigResponse } from '@/types/general'

export interface ClientConfiguration {
  config: ClientConfigResponse | object
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
        action: PayloadAction<ClientConfigResponse>
      ) {
        state.config = action.payload
      },
      prepare(value: ClientConfigResponse) {
        return { payload: value }
      },
    },
  },
})

// Action creators are generated for each case reducer function
export const { setClientConfiguration } = clientConfigurationSlice.actions

export default clientConfigurationSlice.reducer

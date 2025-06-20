import { configureStore } from '@reduxjs/toolkit'

import { clientConfigurationSlice } from '@/state/reducers/clientConfiguration'
import { errorsSlice } from '@/state/reducers/errors'
import { tokensSlice } from '@/state/reducers/tokens'

export const store = configureStore({
  reducer: {
    tokens: tokensSlice.reducer,
    clientConfiguration: clientConfigurationSlice.reducer,
    errors: errorsSlice.reducer,
  },
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

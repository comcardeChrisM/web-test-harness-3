import { configureStore } from '@reduxjs/toolkit'

import { tokensSlice } from '@/state/reducers/tokens'

export const store = configureStore({
  reducer: {
    tokens: tokensSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

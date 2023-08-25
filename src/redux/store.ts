import { configureStore } from '@reduxjs/toolkit'
import { datesSlice } from './slicers/Dates'
import { reunionsSlice } from './slicers/Reunions'
import { coursesSlice } from './slicers/Courses'
import { participantsSlice } from './slicers/Participants'
import { usersSlice } from './slicers/User'

export const store = configureStore({
  reducer: {
    dates: datesSlice.reducer,
    reunions: reunionsSlice.reducer,
    courses: coursesSlice.reducer,
    participants: participantsSlice.reducer,
    user: usersSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
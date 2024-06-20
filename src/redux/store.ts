import { configureStore } from '@reduxjs/toolkit'
import datesReducer from './dates/datesSlice'
import reunionsReducer from './reunions/reunionsSlice'
import coursesReducer  from './courses/coursesSlice'
import participantsReducer from './participants/participantsSlice'
import displayReducer from './display/displaySlice'

export const store = configureStore({
  reducer: {
    dates: datesReducer,
    reunions: reunionsReducer,
    courses: coursesReducer,
    participants: participantsReducer,
    display: displayReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
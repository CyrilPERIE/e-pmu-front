import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CoursesState {
  courses: {id: number, numExterne: number}[]
  selectedCourse: number
}

export const initialState: CoursesState = {
  courses: [],
  selectedCourse: NaN
}


export const fetchCourses = createAsyncThunk(
  'programme/fetchCourses',
  // Declare the type your function argument here:
  async (reunion_id: number) => {
    const response = await fetch(`http://localhost:8081/programme/${reunion_id}/courses`)
    .then(
      (data) => data.json())
    // Inferred return type: Promise<MyData>
    return response
  }
)

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    updateCourse: (state, action: PayloadAction<number>) => {
      state.selectedCourse = action.payload
    },
    resetCourses: (state) => {
      state.courses = []
      state.selectedCourse = NaN
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCourses.fulfilled, (state, { payload }) => {
      state.courses = payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { updateCourse, resetCourses } = coursesSlice.actions
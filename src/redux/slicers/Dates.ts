import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DatesState {
  dates: string[]
  selectedDate: string
}

export const initialState: DatesState = {
  dates: [],
  selectedDate: ""
}


export const fetchDates = createAsyncThunk(
  'programme/fetchDatesw',
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(`http://localhost:8081/programme/dates`).then(
      (data) => data.json())
    // Inferred return type: Promise<MyData>
    return response
  }
)

export const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    updateDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDates.fulfilled, (state, { payload }) => {
      state.dates = payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { updateDate } = datesSlice.actions
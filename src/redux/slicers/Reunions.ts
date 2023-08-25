import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ReunionsState {
  reunions: {id: number, numOfficiel: number, specialites: string[]}[]
  selectedReunion: number
}

export const initialState: ReunionsState = {
  reunions: [],
  selectedReunion: NaN
}


export const fetchReunions = createAsyncThunk(
  'programme/fetchReunions',
  // Declare the type your function argument here:
  async (date: string) => {
    const response = await fetch(`http://localhost:8081/programme/${date}/reunions`)
    .then(
      (data) => data.json())
    // Inferred return type: Promise<MyData>
    return response
  }
)

export const reunionsSlice = createSlice({
  name: 'reunions',
  initialState,
  reducers: {
    updateReunion: (state, action: PayloadAction<number>) => {
      state.selectedReunion = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchReunions.fulfilled, (state, { payload }) => {
      state.reunions = payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { updateReunion } = reunionsSlice.actions
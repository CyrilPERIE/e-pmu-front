import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ParticipantsState {
  participants: {
		id: number,
		numPmu: number,
		urlCasaque: string,
		nom: string,
		ordreArrivee: number
	}[]
}

export const initialState: ParticipantsState = {
  participants: []
}


export const fetchParticipants = createAsyncThunk(
  'programme/fetchParticipants',
  // Declare the type your function argument here:
  async (course: number) => {
    const response = await fetch(`http://localhost:8081/programme/${course}/participants`).then(
      (data) => data.json())
    // Inferred return type: Promise<MyData>
    return response
  }
)

export const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    resetParticipants: (state) => {
      state.participants = []
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchParticipants.fulfilled, (state, { payload }) => {
      state.participants = payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { resetParticipants } = participantsSlice.actions
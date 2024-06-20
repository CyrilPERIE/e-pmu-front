import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDates } from './datesThunks';

interface DatesState {
  dates: string[];
  selectedDate: string;
}

const initialState: DatesState = { 
  dates: [],
  selectedDate: new Date().toISOString()
};

export const datesSlice = createSlice({
  name: 'dates',
  initialState,
  reducers: {
    updateDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDates.fulfilled, (state, { payload }) => {
      state.dates = payload;
    });
  }
});

export const { updateDate } = datesSlice.actions;
export default datesSlice.reducer;

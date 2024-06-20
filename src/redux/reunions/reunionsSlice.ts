import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReunions } from './reunionsThunks';
import { ReunionProps } from '../../components/ui/navbar/body/reunions/reunion';

interface ReunionsState {
  reunions: ReunionProps[];
  selectedReunion: ReunionProps | null;
}

const initialState: ReunionsState = {
  reunions: [],
  selectedReunion: null,
};

const reunionsSlice = createSlice({
  name: 'reunions',
  initialState,
  reducers: {
    updateReunion: (state, action: PayloadAction<ReunionProps>) => {
      state.selectedReunion = action.payload;
    },
    resetReunion: (state) => {
      console.log('resetReunion action');
      console.log(state.selectedReunion)
      state.selectedReunion = null
      console.log("apres")
      console.log(state.selectedReunion)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReunions.fulfilled, (state, { payload }) => {
      state.reunions = payload;
    });
  },
});

export const { updateReunion, resetReunion } = reunionsSlice.actions;
export default reunionsSlice.reducer;

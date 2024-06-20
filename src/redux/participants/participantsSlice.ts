import { createSlice } from '@reduxjs/toolkit';
import { fetchParticipants } from './participantsThunks';
import { ParticipantProps } from '../../components/ui/dashboard/body/participants/participant';

interface ParticipantsState {
  participants: ParticipantProps[];
}

const initialState: ParticipantsState = {
  participants: [],
};

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    resetParticipants: (state) => {
      state.participants = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchParticipants.fulfilled, (state, { payload }) => {
      state.participants = payload;
    });
  },
});

export const { resetParticipants } = participantsSlice.actions;
export default participantsSlice.reducer;

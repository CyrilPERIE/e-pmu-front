import { RootState } from '../store';

export const selectParticipants = (state: RootState) => state.participants.participants;

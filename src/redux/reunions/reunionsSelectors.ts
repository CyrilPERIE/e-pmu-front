import { RootState } from '../store';

export const selectReunions = (state: RootState) => state.reunions.reunions;
export const selectSelectedReunion = (state: RootState) => state.reunions.selectedReunion;

import { RootState } from '../store';

export const selectDates = (state: RootState) => state.dates.dates;
export const selectSelectedDate = (state: RootState) => state.dates.selectedDate;

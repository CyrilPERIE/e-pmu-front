import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchParticipants = createAsyncThunk(
  'participants/fetchParticipants',
  async (course: number) => {
    const response = await fetch(`http://localhost:8081/programme/${course}/participants`);
    const data = await response.json();
    return data;
  }
);

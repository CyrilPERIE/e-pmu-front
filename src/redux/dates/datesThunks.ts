import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDates = createAsyncThunk(
  'dates/fetchDates',
  async () => {
    const response = await fetch(`http://${ process.env.HOST || 'localhost'}:8081/programme/dates`);
    const data = await response.json();
    return data;
  }
);

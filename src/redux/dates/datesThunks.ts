import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDates = createAsyncThunk(
  'dates/fetchDates',
  async () => {
<<<<<<< HEAD
    const response = await fetch(`http://${ process.env.REACT_APP_HOST || 'localhost'}:8081/programme/dates`);
=======
    const response = await fetch(`http://${ process.env.HOST || 'localhost'}:8081/programme/dates`);
>>>>>>> f678242083bc44432c9b791fa3141cd05beeb9da
    const data = await response.json();
    return data;
  }
);

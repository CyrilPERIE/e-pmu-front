import { createAsyncThunk } from '@reduxjs/toolkit';
import { date_to_api } from '../../utils/date';

export const fetchReunions = createAsyncThunk(
  'reunions/fetchReunions',
  async (date: string) => {
    const date_f = date_to_api(date);
<<<<<<< HEAD
    const response = await fetch(`http://${process.env.REACT_APP_HOST || 'localhost'}:8081/programme/${date_f}/reunions`);
=======
    const response = await fetch(`http://${process.env.HOST || 'localhost'}:8081/programme/${date_f}/reunions`);
>>>>>>> f678242083bc44432c9b791fa3141cd05beeb9da
    const data = await response.json();
    return data;
  }
);

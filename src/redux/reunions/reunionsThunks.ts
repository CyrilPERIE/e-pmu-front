import { createAsyncThunk } from '@reduxjs/toolkit';
import { date_to_api } from '../../utils/date';

export const fetchReunions = createAsyncThunk(
  'reunions/fetchReunions',
  async (date: string) => {
    const date_f = date_to_api(date);
    const response = await fetch(`http://${process.env.HOST || 'localhost'}:8081/programme/${date_f}/reunions`);
    const data = await response.json();
    return data;
  }
);

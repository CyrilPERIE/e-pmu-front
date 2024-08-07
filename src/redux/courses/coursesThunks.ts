import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (reunion_id: number) => {
    const response = await fetch(`http://${ process.env.REACT_APP_HOST || 'localhost'}:8081/programme/${reunion_id}/courses`);
    const data = await response.json();
    return data;
  }
);

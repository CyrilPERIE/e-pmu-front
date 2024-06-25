import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (reunion_id: number) => {
<<<<<<< HEAD
    const response = await fetch(`http://${ process.env.REACT_APP_HOST || 'localhost'}:8081/programme/${reunion_id}/courses`);
=======
    const response = await fetch(`http://${ process.env.HOST || 'localhost'}:8081/programme/${reunion_id}/courses`);
>>>>>>> f678242083bc44432c9b791fa3141cd05beeb9da
    const data = await response.json();
    return data;
  }
);

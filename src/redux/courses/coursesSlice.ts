import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCourses } from './coursesThunks';
import { CourseProps } from '../../components/ui/navbar/body/courses/course';

interface CoursesState {
  courses: CourseProps[];
  selectedCourse: CourseProps | null;
}

const initialState: CoursesState = {
  courses: [],
  selectedCourse: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    updateCourse: (state, action: PayloadAction<CourseProps>) => {
      state.selectedCourse = action.payload;
    },
    resetCourse: (state) => {
      state.selectedCourse = null;
    },
    resetCourses: (state) => {
      state.courses = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, { payload }) => {
      state.courses = payload;
    });
  },
});

export const { updateCourse, resetCourse, resetCourses } = coursesSlice.actions;
export default coursesSlice.reducer; 

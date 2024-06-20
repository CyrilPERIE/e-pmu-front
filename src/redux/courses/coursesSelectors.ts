import { CourseProps } from '../../components/ui/navbar/body/courses/course';
import { RootState } from '../store';

export const selectCourses = (state: RootState): CourseProps[]  => state.courses.courses;
export const selectSelectedCourse = (state: RootState) => state.courses.selectedCourse;

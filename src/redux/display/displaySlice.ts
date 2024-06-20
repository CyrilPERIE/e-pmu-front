import { createSlice } from '@reduxjs/toolkit';
import { DisplayType, NavBarType } from '../../services/Chevaux/types';

interface DisplayState {
  mediaView: DisplayType.DASHBOARD | DisplayType.NAVBAR;
  navBarView: NavBarType.COURSES | NavBarType.REUNIONS
}

const initialState: DisplayState = {
  mediaView: DisplayType.NAVBAR,
  navBarView: NavBarType.COURSES
};

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setMediaViewDashboard: (state) => {
      state.mediaView = DisplayType.DASHBOARD;
    },
    setMediaViewNavbar: (state) => {
      state.mediaView = DisplayType.NAVBAR;
    },
    setNavBarViewReunions: (state) => {
      state.navBarView = NavBarType.REUNIONS;
    },
    setNavBarViewCourses: (state) => {
      state.navBarView = NavBarType.COURSES;
    },
  },
});

export const { setMediaViewDashboard, setMediaViewNavbar, setNavBarViewReunions, setNavBarViewCourses } = displaySlice.actions;
export default displaySlice.reducer;

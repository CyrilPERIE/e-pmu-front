import { RootState } from '../store';

export const selectMediaView = (state: RootState) => state.display.mediaView;
export const selectNavBarView = (state: RootState) => state.display.navBarView;

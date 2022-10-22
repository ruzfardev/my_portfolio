import { createSlice } from '@reduxjs/toolkit';

export const defaultVideosState = createSlice({
  name: 'defaultVideosState',
  initialState: {
    videos: [],
    searchResults: [],
    selectedVideo: null,
    loading: false,
    error: null,
  },
  reducers: {
    getVideosRequest: (state) => {
      state.loading = true;
    },
    getSearchRequest(state, action) {
      state.loading = true;
    },
    getSearchSuccess: (state, action) => {
      state.searchResults = action.payload.items;
      state.loading = false;
    },
    getVideosSuccess: (state, action) => {
      state.videos = action.payload.items;
      state.loading = false;
    },
    getVideosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setselectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
  },
});
export const {
  getVideosRequest,
  getVideosSuccess,
  getVideosFailure,
  getSearchRequest,
  getSearchSuccess,
  setselectedVideo,
} = defaultVideosState.actions;
export default defaultVideosState.reducer;

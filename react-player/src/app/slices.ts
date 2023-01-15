import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

export interface IMusic {
    id: number;
    artist: string;
    title: string;
    album: string;
    audioUrl: string;
}

export const musicSlice = createSlice({
    name: "music",
    initialState: {
        music: [] as IMusic[],
        selectedMusic: {} as IMusic
    },
    
    reducers: {
        loadMusicFolder: (state, action) => {
            state.music = [...state.music, action.payload]
        },
        setSelectedMusic: (state, action) => {
            state.selectedMusic = action.payload;
        }
    }
});

export const { loadMusicFolder, setSelectedMusic } = musicSlice.actions;
export default musicSlice.reducer;
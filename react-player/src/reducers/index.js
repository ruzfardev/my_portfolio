import { createSlice } from "@reduxjs/toolkit";

export const musicList = createSlice({
    name: "musicList",
    initialState: {
        list: [],
        selectedMusic: {},
    },
    reducers: {
        setList: (state, action) => {
                state.list = [...action.payload];
        },
        setSelectedMusic: (state, action) => {
            state.selectedMusic = action.payload;
        },
        

    }
});
export const { setList, setSelectedMusic } = musicList.actions;
export default musicList.reducer;

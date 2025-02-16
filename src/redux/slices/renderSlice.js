import { createSlice } from "@reduxjs/toolkit";

const renderSlice = createSlice({
    name: "render",
    initialState: {
        refresh: false,
    },
    reducers: {
        refresh(state) {
            state.refresh = !state.refresh;
        },
    },
});

export const { refresh} = renderSlice.actions;

export default renderSlice.reducer;
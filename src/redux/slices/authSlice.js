import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        email: ""
    },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.email = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.email = "";
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
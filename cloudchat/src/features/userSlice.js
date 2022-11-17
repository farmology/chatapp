import { createSlice } from '@reduxjs/toolkit';
import appApi from '../services/appApi';

export const userSlice = createSlice({
    name: 'user', 
    initialState: null,
    reducers: {
        addNotifications: (state, {payload}) => {

        },
        resetNotifications: (state, {payload}) => {

        },
    },
    extraReducers: (builder) => {
        // save user after sign up
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state,  {payload}) => payload);
        // save user after log in
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state,  {payload}) => payload);
        // logout and destroy user session
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => null);
    }
});

export const { addNotifications, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
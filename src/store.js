import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    mobileMenuOpen: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        toggleMobileMenu(state) {
            state.mobileMenuOpen = !state.mobileMenuOpen;
        }
    }
});

export const { login, toggleMobileMenu } = appSlice.actions;

const store = configureStore({
    reducer: appSlice.reducer
});

export default store;
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    mobileMenuOpen: false,
    showLoginModal: false
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
            state.showLoginModal = false;
        },
        toggleMobileMenu(state) {
            state.mobileMenuOpen = !state.mobileMenuOpen;
        },
        showLoginModal(state) {
            state.showLoginModal = true;
        },
        closeLoginModal(state) {
            state.showLoginModal = false;
        }
    }
});

export const { login, toggleMobileMenu, showLoginModal, closeLoginModal } = appSlice.actions;

const store = configureStore({
    reducer: appSlice.reducer
});

export default store;
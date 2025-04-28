import { createStore } from 'redux';

const initialState = {
    isLoggedIn: false,
    mobileMenuOpen: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedIn: true };
        case 'TOGGLE_MOBILE_MENU':
            return { ...state, mobileMenuOpen: !state.mobileMenuOpen };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
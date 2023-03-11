import { configureStore } from '@reduxjs/toolkit';
import themeSwitcherReducer from './features/themeSwitcherSlice';

const store = configureStore({
    reducer: {
        theme: themeSwitcherReducer,
    },
});

export default store;

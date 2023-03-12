import { configureStore } from '@reduxjs/toolkit';
import themeSwitcherReducer from './features/themeSwitcherSlice';
import todosReducer from './features/todosSlice';

const store = configureStore({
    reducer: {
        theme: themeSwitcherReducer,
        todos: todosReducer,
    },
});

export default store;

// const listener = () => console.log(store.getState().todos);
// store.subscribe(listener);

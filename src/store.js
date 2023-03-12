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

// store.subscribe(() => console.log(store.getState().todos));

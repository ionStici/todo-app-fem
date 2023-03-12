import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'todos',

    initialState: {
        allTodos: [],
    },

    reducers: {
        addTodo: (state, action) => {},
    },
};

const todosSlice = createSlice(options);

export default todosSlice.reducer;

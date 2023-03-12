import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.payload,
                    completed: false,
                },
            ];
        },

        deleteAllTodos: (state, action) => {
            return [];
        },

        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === +action.payload);
            if (todo) todo.completed = !todo.completed;
        },

        deleteTodo: (state, action) => {
            const todo = state.find(todo => todo.id === +action.payload);
            const index = state.indexOf(todo);
            state.splice(index, 1);
        },

        reorderIds: state => {
            state.forEach((todo, i) => (todo.id = i + 1));
        },

        filterAll: (state, action) => {},

        filterActive: (state, action) => {},

        filterCompleted: (state, action) => {},
    },
};

const todosSlice = createSlice(options);

export default todosSlice.reducer;
export const { addTodo, toggleTodo, deleteAllTodos, deleteTodo, reorderIds } =
    todosSlice.actions;

export const selectTodos = state => state.todos;

import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'todos',

    initialState: {
        allTodos: [],
        currentTodos: [],
    },

    reducers: {
        addTodo: (state, action) => {
            state.allTodos.push({
                id: state.allTodos.length + 1,
                text: action.payload,
                completed: false,
            });

            state.currentTodos = [...state.allTodos];
        },

        toggleTodo: (state, action) => {
            state.allTodos.forEach(todo => {
                if (todo.id === +action.payload) {
                    todo.completed = !todo.completed;
                }
            });

            state.currentTodos = [...state.allTodos];
        },

        filterAllTodos: (state, action) => {
            state.currentTodos = [];

            state.allTodos.forEach(todo => {
                state.currentTodos.push(todo);
            });
        },

        filterActiveTodos: (state, action) => {
            state.currentTodos = [];

            state.allTodos.forEach(todo => {
                if (todo.completed === false) {
                    state.currentTodos.push(todo);
                }
            });
        },

        filterCompletedTodos: (state, action) => {
            state.currentTodos = [];

            state.allTodos.forEach(todo => {
                if (todo.completed === true) {
                    state.currentTodos.push(todo);
                }
            });
        },
    },
};

const todosSlice = createSlice(options);

export default todosSlice.reducer;

export const {
    addTodo,
    toggleTodo,
    filterAllTodos,
    filterActiveTodos,
    filterCompletedTodos,
} = todosSlice.actions;

export const selectCurrentTodos = state => state.todos.currentTodos;

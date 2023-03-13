import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'todos',

    initialState: {
        allTodos: [],
        currentTodos: [],
        leftItems: 0,
    },

    reducers: {
        addTodo: (state, action) => {
            state.allTodos.push({
                id: state.allTodos.length + 1,
                text: action.payload,
                completed: false,
            });
        },

        toggleTodo: (state, action) => {
            state.allTodos.forEach(todo => {
                if (todo.id === +action.payload) {
                    todo.completed = !todo.completed;
                }
            });
        },

        deleteTodo: (state, action) => {
            const todo = state.allTodos.find(todo => {
                if (todo.id === +action.payload) {
                    return todo;
                }
            });

            const index = state.allTodos.indexOf(todo);

            state.allTodos.splice(index, 1);
        },

        reorderIDs: state => {
            state.allTodos = state.allTodos.map((todo, i) => {
                return {
                    ...todo,
                    id: i + 1,
                };
            });
        },

        filterAllTodos: state => {
            state.currentTodos = [...state.allTodos];
        },

        filterActiveTodos: state => {
            state.currentTodos = [];

            state.allTodos.forEach(todo => {
                if (todo.completed === false) {
                    state.currentTodos.push(todo);
                }
            });
        },

        filterCompletedTodos: state => {
            state.currentTodos = [];

            state.allTodos.forEach(todo => {
                if (todo.completed === true) {
                    state.currentTodos.push(todo);
                }
            });
        },

        clearCompleted: state => {
            state.allTodos = state.allTodos.filter(todo => {
                if (todo.completed === false) return todo;
            });
        },

        setLeftItems: state => {
            state.leftItems = state.allTodos.filter(
                todo => todo.completed === false
            ).length;
        },

        reorderTodos: (state, action) => {
            state.currentTodos = action.payload.map(id => {
                return state.currentTodos.find(todo => todo.id === id);
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
    deleteTodo,
    reorderIDs,
    clearCompleted,
    setLeftItems,
    reorderTodos,
} = todosSlice.actions;

export const selectCurrentTodos = state => state.todos.currentTodos;
export const selectLeftItems = state => state.todos.leftItems;

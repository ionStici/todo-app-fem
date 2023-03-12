import React from 'react';
import { Todo } from './markup';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentTodos } from './todosSlice';

import {
    addTodo,
    toggleTodo,
    filterAllTodos,
    filterActiveTodos,
    filterCompletedTodos,
    deleteTodo,
    reorderIDs,
    clearCompleted,
} from './todosSlice';

export const TodoApp = function () {
    const dispatch = useDispatch();
    const todos = useSelector(selectCurrentTodos);
    const [filter, setFilter] = React.useState('all');

    const setFilterAll = () => (filter = 'all');
    const setFilterActive = () => (filter = 'active');
    const setFilterCompleted = () => (filter = 'completed');

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(addTodo(event.target.querySelector('input').value));

        if (filter === 'all') dispatch(filterAllTodos());
        if (filter === 'active') dispatch(filterActiveTodos());
        if (filter === 'completed') dispatch(filterCompletedTodos());

        event.target.querySelector('input').value = '';
    };

    const handleTodoClick = event => {
        if (event.target.dataset.type === 'clearTodo') {
            dispatch(deleteTodo(event.target.closest('div').id));
            dispatch(reorderIDs());

            if (filter === 'all') dispatch(filterAllTodos());
            if (filter === 'active') dispatch(filterActiveTodos());
            if (filter === 'completed') dispatch(filterCompletedTodos());

            return;
        }

        if (event.target.dataset.type === 'toggleTodo') {
            dispatch(toggleTodo(event.target.dataset.id));

            if (filter === 'all') dispatch(filterAllTodos());
            if (filter === 'active') dispatch(filterActiveTodos());
            if (filter === 'completed') dispatch(filterCompletedTodos());

            return;
        }
    };

    const handleBtnClick = event => {
        if (event.target.dataset.type === 'clear') {
            dispatch(clearCompleted());
            dispatch(reorderIDs());

            if (filter === 'all') dispatch(filterAllTodos());
            if (filter === 'active') dispatch(filterActiveTodos());
            if (filter === 'completed') dispatch(filterCompletedTodos());

            return;
        }

        const buttons = event.target.closest('div').querySelectorAll('button');
        buttons.forEach(btn => {
            btn.style.color = 'var(--color-lightGrayBlue---darkGrayBlue)';
        });

        if (event.target.dataset.type === 'all') {
            event.target.style.color = 'var(--color-bright-blue)';
            setFilter('all');

            dispatch(filterAllTodos());

            return;
        }

        if (event.target.dataset.type === 'active') {
            event.target.style.color = 'var(--color-bright-blue)';
            setFilter('active');

            dispatch(filterActiveTodos());

            return;
        }

        if (event.target.dataset.type === 'completed') {
            event.target.style.color = 'var(--color-bright-blue)';
            setFilter('completed');

            dispatch(filterCompletedTodos());

            return;
        }

        if (filter === 'all') dispatch(filterAllTodos());
        if (filter === 'active') dispatch(filterActiveTodos());
        if (filter === 'completed') dispatch(filterCompletedTodos());
    };

    return (
        <Todo
            todos={todos}
            onSubmit={handleSubmit}
            onTodoClick={handleTodoClick}
            onBtnClick={handleBtnClick}
        />
    );
};

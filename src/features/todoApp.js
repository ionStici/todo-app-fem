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
} from './todosSlice';

export const TodoApp = function () {
    const dispatch = useDispatch();
    const todos = useSelector(selectCurrentTodos);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTodo(event.target.querySelector('input').value));
        event.target.querySelector('input').value = '';
    };

    const handleTodoClick = event => {
        if (event.target.dataset.type === 'clearTodo') {
            console.log('clearTodo');
            return;
        }

        if (event.target.dataset.type === 'toggleTodo') {
            dispatch(toggleTodo(event.target.dataset.id));
            return;
        }
    };

    const handleBtnClick = event => {
        if (event.target.dataset.type === 'clear') {
            console.log('clear');
            return;
        }

        const buttons = event.target.closest('div').querySelectorAll('button');
        buttons.forEach(btn => {
            btn.style.color = 'var(--color-lightGrayBlue---darkGrayBlue)';
        });

        if (event.target.dataset.type === 'all') {
            event.target.style.color = 'var(--color-bright-blue)';
            dispatch(filterAllTodos());
            return;
        }

        if (event.target.dataset.type === 'active') {
            event.target.style.color = 'var(--color-bright-blue)';
            dispatch(filterActiveTodos());
            return;
        }

        if (event.target.dataset.type === 'completed') {
            event.target.style.color = 'var(--color-bright-blue)';
            dispatch(filterCompletedTodos());
            return;
        }
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

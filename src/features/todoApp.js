import React from 'react';
import { Todo } from './markup';

export const TodoApp = function () {
    const handleSubmit = event => {
        event.preventDefault();
        // event.target.querySelector('input').value;
    };

    const handleTodoClick = event => {
        if (event.target.dataset.type === 'clearTodo') {
            console.log('clearTodo');
            return;
        }

        if (event.target.dataset.type === 'toggleTodo') {
            console.log('toggleTodo');
            // event.target.dataset.id
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
            console.log('all');
            event.target.style.color = 'var(--color-bright-blue)';
            return;
        }

        if (event.target.dataset.type === 'active') {
            event.target.style.color = 'var(--color-bright-blue)';
            console.log('active');
            return;
        }

        if (event.target.dataset.type === 'completed') {
            event.target.style.color = 'var(--color-bright-blue)';
            console.log('completed');
            return;
        }
    };

    return (
        <Todo
            todos={[]}
            onSubmit={handleSubmit}
            onTodoClick={handleTodoClick}
            onBtnClick={handleBtnClick}
        />
    );
};

import React, { useEffect } from 'react';
import styles from './../styles/todoApp.module.scss';

import iconCheck from './../images/icon-check.svg';
import iconCross from './../images/icon-cross.svg';

import {
    addTodo,
    toggleTodo,
    clearCompleted,
    deleteTodo,
    reorderIds,
    filterAll,
    filterActive,
    filterCompleted,
} from './todosSlice';

import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from './todosSlice';

export const Todo = function () {
    const dispatch = useDispatch();
    const input = React.useRef(null);
    useEffect(() => input.current.focus());

    const allTodos = useSelector(selectTodos);
    let todos;
    todos = allTodos;

    const allBtn = React.useRef(null);
    const activeBtn = React.useRef(null);
    const completedBtn = React.useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTodo(input.current.value));
        input.current.value = '';
    };

    const handleClick = event => {
        const type = event.target.dataset.type;

        if (type === 'clear') {
            dispatch(clearCompleted());
        }

        if (type === 'all') {
            dispatch(filterAll());
        }

        if (type === 'active') {
            dispatch(filterActive());
        }

        if (type === 'completed') {
            dispatch(filterCompleted());
        }
    };

    const handleTodoClick = event => {
        if (event.target.dataset.type === 'clearTodo') {
            dispatch(deleteTodo(event.target.closest('div').id));
            dispatch(reorderIds());
            return;
        }

        if (event.target.dataset.type === 'toggleTodo') {
            dispatch(toggleTodo(event.target.dataset.id));
            return;
        }
    };

    const circleStyles = {
        border: 'none',
        backgroundImage: 'var(--linear-gradient-bg)',
    };

    const iconStyles = { zIndex: '15' };

    const circleTopStyles = { display: 'none' };

    const textStyles = {
        textDecoration: 'line-through',
        color: 'var(--color-inactive-text)',
    };

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <form className={styles.inputBox} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Create a new todo..."
                        ref={input}
                    />
                    <button className={styles.add}>Add</button>
                </form>

                <div className={styles.innerWrapper}>
                    <div className={styles.todosBox}>
                        {todos.map((todo, i) => {
                            return (
                                <div
                                    className={styles.todo}
                                    key={i}
                                    id={todo.id}
                                    onClick={handleTodoClick}
                                    data-type="toggleTodo"
                                    data-id={todo.id}
                                    draggable
                                >
                                    <div
                                        className={styles.todoCircle}
                                        style={
                                            todo.completed
                                                ? circleStyles
                                                : undefined
                                        }
                                        data-type="toggleTodo"
                                        data-id={todo.id}
                                    >
                                        <img
                                            className={styles.iconCheck}
                                            src={iconCheck}
                                            alt=""
                                            style={
                                                todo.completed
                                                    ? iconStyles
                                                    : undefined
                                            }
                                            data-type="toggleTodo"
                                            data-id={todo.id}
                                        />
                                        <div
                                            className={styles.todoCircleTop}
                                            style={
                                                todo.completed
                                                    ? circleTopStyles
                                                    : undefined
                                            }
                                            data-type="toggleTodo"
                                            data-id={todo.id}
                                        ></div>
                                    </div>

                                    <p
                                        className={styles.todoText}
                                        style={
                                            todo.completed
                                                ? textStyles
                                                : undefined
                                        }
                                        data-type="toggleTodo"
                                        data-id={todo.id}
                                    >
                                        {todo.text}
                                    </p>

                                    <img
                                        className={styles.iconCross}
                                        src={iconCross}
                                        alt=""
                                        data-type="clearTodo"
                                    />
                                </div>
                            );
                        })}

                        {todos.length === 0 ? (
                            <div className={styles.default}>
                                <p>fill the form above to add new todos</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className={styles.bottomBox}>
                        <p className={styles.left}>5 items left</p>
                        <button
                            className={styles.clearBtn}
                            data-type="clear"
                            onClick={handleClick}
                        >
                            Clear Completed
                        </button>
                    </div>
                </div>

                <div className={styles.footer}>
                    <button
                        className={styles.allBtn}
                        onClick={handleClick}
                        data-type="all"
                        ref={allBtn}
                    >
                        All
                    </button>
                    <button
                        className={styles.activeBtn}
                        onClick={handleClick}
                        data-type="active"
                        ref={activeBtn}
                    >
                        Active
                    </button>
                    <button
                        className={styles.completedBtn}
                        onClick={handleClick}
                        data-type="completed"
                        ref={completedBtn}
                    >
                        Completed
                    </button>
                </div>
            </div>

            <p className={styles.footerText}>Drag and drop to reorder list</p>
        </section>
    );
};

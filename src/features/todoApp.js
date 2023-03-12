import React, { useEffect } from 'react';
import styles from './../styles/todoApp.module.scss';

import iconCheck from './../images/icon-check.svg';
import iconCross from './../images/icon-cross.svg';

import {
    addTodo,
    toggleTodo,
    deleteAllTodos,
    deleteTodo,
    reorderIds,
} from './todosSlice';

import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from './todosSlice';

export const Todo = function () {
    const dispatch = useDispatch();
    const input = React.useRef(null);
    useEffect(() => input.current.focus());

    const todos = useSelector(selectTodos);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTodo(input.current.value));
        input.current.value = '';
    };

    const handleClick = event => {
        const type = event.target.dataset.type;

        if (type === 'clear') dispatch(deleteAllTodos());
        // if (type === 'all') console.log('all');
        // if (type === 'active') console.log('active');
        // if (type === 'completed') console.log('completed');
    };

    const handleTodoClick = event => {
        if (event.target.dataset.type === 'clearTodo') {
            dispatch(deleteTodo(event.target.closest('div').id));
            dispatch(reorderIds());
            return;
        }

        // console.log(event.target);

        dispatch(toggleTodo(event.target.id));
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
                                >
                                    <div
                                        className={styles.todoCircle}
                                        style={
                                            todo.completed
                                                ? circleStyles
                                                : undefined
                                        }
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
                                        />
                                        <div
                                            className={styles.todoCircleTop}
                                            style={
                                                todo.completed
                                                    ? circleTopStyles
                                                    : undefined
                                            }
                                        ></div>
                                    </div>

                                    <p
                                        className={styles.todoText}
                                        style={
                                            todo.completed
                                                ? textStyles
                                                : undefined
                                        }
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
                    >
                        All
                    </button>
                    <button
                        className={styles.activeBtn}
                        onClick={handleClick}
                        data-type="active"
                    >
                        Active
                    </button>
                    <button
                        className={styles.completedBtn}
                        onClick={handleClick}
                        data-type="completed"
                    >
                        Completed
                    </button>
                </div>
            </div>

            <p className={styles.footerText}>Drag and drop to reorder list</p>
        </section>
    );
};

import React from 'react';
import styles from './../styles/todoApp.module.scss';
import iconCheck from './../images/icon-check.svg';
import iconCross from './../images/icon-cross.svg';

import { reorderTodos } from './todosSlice';
import { useDispatch } from 'react-redux';

import {
    filterAllTodos,
    filterActiveTodos,
    filterCompletedTodos,
} from './todosSlice';

// prettier-ignore
const circleStyles = { border: 'none', backgroundImage: 'var(--linear-gradient-bg)' };
// prettier-ignore
const textStyles = { textDecoration: 'line-through', color: 'var(--color-inactive-text)' };
const iconStyles = { zIndex: '15' };
const circleTopStyles = { display: 'none' };

export const Todo = props => {
    const dispatch = useDispatch();
    const todos = props.todos;

    let dragTodo = React.useRef(null);
    let prevTodo = React.useRef(null);

    // // // // // // // // // // // // // // //

    const handleDragStart = event => {
        if (event.target.dataset.type === 'clearTodo') return;
        dragTodo.current = event.target.closest('.todo_item');
    };

    const handleDragEnd = event => {};

    // // // // // // // // // // // // // // //

    const handleDropOver = event => {
        event.preventDefault();
    };

    const handleDragLeave = event => {
        const prevEl = event.target.closest('.todo_box');
        prevEl.style.backgroundColor = 'transparent';
    };

    const handleDragEnter = event => {
        const currEl = event.target.closest('.todo_box');
        currEl.style.backgroundColor =
            'var(--color-veryLightGrayBlue---veryDarkGrayBlue)';
    };

    const handleDrop = event => {
        event.preventDefault();
        prevTodo.current = event.target.closest('.todo_item');
        event.target.closest('.todo_box').style.backgroundColor = 'transparent';

        const dragId = +dragTodo.current.dataset.id;
        const prevId = +prevTodo.current.dataset.id;

        const ids = [...document.querySelectorAll('.todo_item')].map(
            todo => +todo.dataset.id
        );

        const dragIndex = ids.indexOf(dragId);
        const prevIndex = ids.indexOf(prevId);

        ids[dragIndex] = prevId;
        ids[prevIndex] = dragId;

        if (props.filter === 'all') {
            dispatch(reorderTodos(ids));
            // console.log(ids);
            // dispatch(filterAllTodos());
        }

        if (props.filter === 'active') {
            dispatch(reorderTodos(ids));
            // console.log(ids);
            // dispatch(filterActiveTodos());
        }

        if (props.filter === 'completed') {
            dispatch(reorderTodos(ids));
            // console.log(ids);
            // dispatch(filterCompletedTodos());
        }
    };

    // // // // // // // // // // // // // // //

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <form className={styles.inputBox} onSubmit={props.onSubmit}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Create a new todo..."
                    />
                    <button className={styles.add}>Add</button>
                </form>

                <div className={styles.innerWrapper}>
                    <div className={`${styles.todosBox} ${'todos_box'}`}>
                        {todos.map((todo, i, _) => {
                            return (
                                <div
                                    className="todo_box"
                                    key={i}
                                    data-id={todo.id}
                                    onDragLeave={handleDragLeave}
                                    onDragEnter={handleDragEnter}
                                    onDragOver={handleDropOver}
                                    onDrop={handleDrop}
                                >
                                    <div
                                        className={`${
                                            styles.todo
                                        } ${'todo_item'}`}
                                        id={todo.id}
                                        onClick={props.onTodoClick}
                                        data-type="toggleTodo"
                                        data-id={todo.id}
                                        draggable
                                        data-draggable="true"
                                        //
                                        onDragStart={handleDragStart}
                                        onDragEnd={handleDragEnd}
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
                                </div>
                            );
                        })}

                        {todos.length === 0 ? (
                            <div className={styles.default}>
                                <p>📝 📝 📝</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <div className={styles.bottomBox}>
                        <p className={styles.left}>
                            {props.leftItems} items left
                        </p>
                        <button
                            className={styles.clearBtn}
                            data-type="clear"
                            onClick={props.onBtnClick}
                        >
                            Clear Completed
                        </button>
                    </div>
                </div>

                <div className={styles.footer}>
                    <button
                        className={styles.allBtn}
                        onClick={props.onBtnClick}
                        data-type="all"
                    >
                        All
                    </button>
                    <button
                        className={styles.activeBtn}
                        onClick={props.onBtnClick}
                        data-type="active"
                    >
                        Active
                    </button>
                    <button
                        className={styles.completedBtn}
                        onClick={props.onBtnClick}
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

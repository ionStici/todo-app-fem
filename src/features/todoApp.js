import React from 'react';
import styles from './../styles/todoApp.module.scss';

import iconCheck from './../images/icon-check.svg';
import iconCross from './../images/icon-cross.svg';

export const Todo = function () {
    const input = React.useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        const value = input.current.value;
        console.log(value);
    };

    const handleClick = event => {
        const type = event.target.dataset.type;

        if (type === 'clear') console.log('clear');
        if (type === 'all') console.log('all');
        if (type === 'active') console.log('active');
        if (type === 'completed') console.log('completed');
    };

    const handleTodoClick = event => {
        console.log('todo clicked');

        if (event.target.dataset.type === 'clearTodo') {
            console.log('clear todo');
        }
    };

    const todos = [
        { id: 1, text: 'do that 1', completed: false },
        { id: 2, text: 'do this 2', completed: false },
        { id: 3, text: 'do that 3', completed: false },
        { id: 4, text: 'do this 4', completed: true },
        { id: 5, text: 'do that 5', completed: true },
        { id: 6, text: 'do this 6', completed: true },
    ];

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

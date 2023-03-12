import React from 'react';
import styles from './../styles/todoApp.module.scss';
import iconCheck from './../images/icon-check.svg';
import iconCross from './../images/icon-cross.svg';

// prettier-ignore
const circleStyles = { border: 'none', backgroundImage: 'var(--linear-gradient-bg)' };
// prettier-ignore
const textStyles = { textDecoration: 'line-through', color: 'var(--color-inactive-text)' };
const iconStyles = { zIndex: '15' };
const circleTopStyles = { display: 'none' };

export const Todo = props => {
    const todos = props.todos;

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
                    <div className={styles.todosBox}>
                        {todos.map((todo, i) => {
                            return (
                                <div
                                    className={styles.todo}
                                    key={i}
                                    id={todo.id}
                                    onClick={props.onTodoClick}
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

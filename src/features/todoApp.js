import React from 'react';
import styles from './../styles/todoApp.module.scss';

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
                        {/* {['text 1', 'text 2'].map((todo, i) => {
                            return (
                                <div className={styles.todo} key={i}>
                                    {todo}
                                </div>
                            );
                        })} */}

                        <div className={styles.default}>
                            <p>fill the form above to add new todos</p>
                        </div>
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

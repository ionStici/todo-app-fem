import React from 'react';
import styles from './../styles/todoApp.module.scss';

export const Todo = function () {
    const input = React.useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        const value = input.current.value;
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

                <div className={styles.todosBox}>content</div>
            </div>

            <p className={styles.footerText}>Drag and drop to reorder list</p>
        </section>
    );
};

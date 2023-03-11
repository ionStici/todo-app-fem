import styles from './../styles/todoApp.module.scss';

export const Todo = function () {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.inputBox}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Create a new todo..."
                    />
                    <button>Add</button>
                </div>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>

                    <div>
                        <p>5 items left</p>
                        <button>Clear Completed</button>
                    </div>
                </div>

                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>

            <p className={styles.footerText}>Drag and drop to reorder list</p>
        </section>
    );
};

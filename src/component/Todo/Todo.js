import styles from "./Todo.module.css";

const Todo = ({todoList, doneUndoneTodo}) => {

    const todo = todoList.map(td => (
        <li key={td.uid}>
            <input type="checkbox" checked={td.isComplete} onChange={(e) => doneUndoneTodo(td)} />
            <label className={td.isComplete ? styles.done : ""} >{td.text}</label>
        </li>
    ));

    return (
        <ul className={styles.todolist}>{todo}</ul>
    )
}

export default Todo;
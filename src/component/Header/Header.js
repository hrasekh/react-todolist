import styles from './Header.module.css';
import React, { useState } from 'react';
import {keyCodeEnter} from 'Helper/KeyCodes';

const Headers = ({setNewToDo}) => {

    const [todo, setTodo] = useState("");
    const onKeyDownTodo = (e) => {
        if(e.keyCode == keyCodeEnter){
            setNewToDo(todo)
            setTodo("");
        }
    }

    return(
        <header>
            <h1 className={styles.header}>Todo list</h1>
            <input className={styles.todoinput} 
                type="text" 
                placeholder='Enter your new to do ...'
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={onKeyDownTodo}
                value={todo}
                 />
        </header>
    )
}

export default Headers;
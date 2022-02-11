// import logo from './logo.svg';
import './App.css';
import Headers from 'component/Header/Header'; 
import Todo from 'component/Todo/Todo';
import React, { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
  const setNewToDo = (newTodoText) => {
    const todo = {
      uid: Date.now(),
      text: newTodoText, 
      isComplete: false
    };

    setTodoList([...todoList, todo])
  }

  const doneUndoneTodo = (todo) => {
    const newTodoList = todoList.map((td) => {
      if(td.uid == todo.uid){
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      }else{
        return td;
      }
    });
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <Headers setNewToDo={setNewToDo} />
      <Todo todoList={todoList} doneUndoneTodo={doneUndoneTodo} />
    </div>
  );
}

export default App;

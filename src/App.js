import React from 'react';
import CreateToDoButton from './components/CreateToDoButton';
import ToDoCounter from './components/ToDoCounter';
import ToDoList from './components/ToDoList';
import ToDoSearch from './components/ToDoSearch';
import ToDoItem from './components/ToDoItem';

import './styles/index.css';
import ToDoHeader from './components/ToDoHeader';

const todos = [
  {text:'Pendiente 1', completed:false},
  {text:'Pendiente 2', completed:false},
  {text:'Pendiente 3', completed:false},
  {text:'Pendiente 4', completed:false},
  {text:'Pendiente 5', completed:false},
]

function App() {
  return (
    <React.Fragment>
      <ToDoHeader/>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {todos.map(todo => (
          <ToDoItem key={todo.text} text={todo.text}/>
        ))}
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default App;

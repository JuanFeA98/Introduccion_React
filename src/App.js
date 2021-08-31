import React from 'react';
import CreateToDoButton from './components/CreateToDoButton';
import ToDoCounter from './components/ToDoCounter';
import ToDoList from './components/ToDoList';
import ToDoSearch from './components/ToDoSearch';
import ToDoItem from './components/ToDoItem';

import './styles/index.css';
import ToDoHeader from './components/ToDoHeader';

const defaultToDos = [
  {text:'La Rueda del Tiempo', completed:false},
  {text:'Never let me go', completed:true},
  {text:'Cien años de soledad', completed:true},
  {text:'Battle Royale', completed:false},
  {text:'Buda Blues', completed:false},
]

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedToDos = toDos.filter(toDo => !!toDo.completed).length;
  const totalToDos = toDos.length;
  
  let searchedToDos = [];

  if (!searchValue.length >= 1){
    searchedToDos = toDos;
  } else {
    searchedToDos = toDos.filter(toDo =>{
      const toDoText = toDo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return toDoText.includes(searchText)
    })
  }

  const completeToDo = (text)=>{
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos)  
  };


  const deleteToDo = (text)=>{
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos)  
  };

  return (
    <React.Fragment>
      <ToDoHeader/>
      <ToDoCounter total={totalToDos} completed={completedToDos}/>
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {searchedToDos.map(toDo => (
          <ToDoItem 
            key={toDo.text} 
            text={toDo.text} 
            complete={toDo.completed}
            onComplete={()=>completeToDo(toDo.text)}
            onDelete={()=>deleteToDo(toDo.text)}
            />
        ))}
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>
  );
}

export default App;

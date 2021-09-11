import React from 'react';
import CreateToDoButton from './components/CreateToDoButton';
import ToDoCounter from './components/ToDoCounter';
import ToDoList from './components/ToDoList';
import ToDoSearch from './components/ToDoSearch';
import ToDoItem from './components/ToDoItem';

import './styles/index.css';
import ToDoHeader from './components/ToDoHeader';

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
    
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    const stringItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringItem);
    
    setItem(newItem)
  }

  return [
    item, 
    saveItem
  ]
};

function App() {
  const [ toDos, saveToDos ] = useLocalStorage('TODOS_V1', []);

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
    saveToDos(newToDos)  
  };


  const deleteToDo = (text)=>{
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos = [...toDos];
    newToDos.splice(toDoIndex, 1);
    saveToDos(newToDos)  
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

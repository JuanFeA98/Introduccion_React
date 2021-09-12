import React from 'react';
import CreateToDoButton from './components/CreateToDoButton';
import ToDoCounter from './components/ToDoCounter';
import ToDoList from './components/ToDoList';
import ToDoSearch from './components/ToDoSearch';
import ToDoItem from './components/ToDoItem';

import './styles/index.css';
import ToDoHeader from './components/ToDoHeader';

function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
          
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 2000)
  },[]);

  const saveItem = (newItem) =>{
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      
      setItem(newItem)  
    } catch (error) {
      setError(error)
    }
  }

  return {
    item, 
    saveItem,
    loading,
    error
  }
};

function App() {
  const { 
    item: toDos, 
    saveItem: saveToDos,
    loading,
    error 
  } = useLocalStorage('TODOS_V1', []);

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

  // console.log('Render antes del efecto')

  // React.useEffect(()=>{
  //   console.log('Algo paso!')
  // }, [totalToDos]);

  // console.log('Render luego del efecto')
  

  return (
    <React.Fragment>
      <ToDoHeader/>
      <ToDoCounter total={totalToDos} completed={completedToDos}/>
      <ToDoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {error && <p>Ocurrio un error</p>}
        {loading && <p>Cargando...</p>}
        {(!loading && !searchedToDos.length) && <p>Crea tu primer To Do!</p>}

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

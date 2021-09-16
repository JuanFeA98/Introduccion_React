import React from "react";

import {ToDoContext} from './context/index.js'

import ToDoHeader from './components/ToDoHeader';
import ToDoCounter from './components/ToDoCounter';
import ToDoList from './components/ToDoList';
import ToDoSearch from './components/ToDoSearch';
import ToDoItem from './components/ToDoItem';
import CreateToDoButton from './components/CreateToDoButton';

import Modal from './modals/index';
import ToDoForm from "./components/ToDoForm.js";

function AppUI(){
    const {
        error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo,
        searchValue,
        setSearchValue,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext)
    
    return(
        <React.Fragment>
            <ToDoHeader/>
            <ToDoCounter/>
                <React.Fragment>
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
                </React.Fragment>
                
                {!!openModal &&(
                    <Modal classname='Modal'>
                        <ToDoForm/>
                    </Modal>
                )}

            <CreateToDoButton
                openModal = {openModal}
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}

export { AppUI }

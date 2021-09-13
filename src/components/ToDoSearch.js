import React from 'react';
import { ToDoContext } from '../context';
import '../styles/ToDoSearch.css'

function ToDoSearch(){        
    const {
        searchValue,
        setSearchValue
    } = React.useContext(ToDoContext)
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        <div className='ToDoSearch'>
            <input 
                placeholder='Buscar'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    )   
}

export default ToDoSearch
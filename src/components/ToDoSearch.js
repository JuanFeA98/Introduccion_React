import React from 'react';
import '../styles/ToDoSearch.css'

function ToDoSearch({ searchValue, setSearchValue }){        
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }
    
    return(
        <div className='ToDoSearch'>
            <input 
                // type="text" 
                placeholder='Buscar'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>
    )   
    
}

export default ToDoSearch
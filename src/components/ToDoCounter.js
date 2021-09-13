import React from 'react';
import { ToDoContext } from '../context';
import '../styles/ToDoCounter.css'

function ToDoCounter() {
    const {
        completedToDos,
        totalToDos
    }= React.useContext(ToDoContext)
    
    return(
        <div className="ToDoCounter">
            <p className='Saludo'>
                Hola! 
            </p>
            <p className='Contador'>
                Has completado {completedToDos} pendientes de {totalToDos}.
            </p>
        </div>
    )
}

export default ToDoCounter
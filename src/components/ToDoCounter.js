import React from 'react';
import '../styles/ToDoCounter.css'

function ToDoCounter() {
    return(
        <div className="ToDoCounter">
            <p className='Saludo'>
                Hola! 
            </p>
            <p className='Contador'>
                Aquí estan los pendientes
            </p>
        </div>
    )
}

export default ToDoCounter
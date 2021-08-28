import React from 'react';
import '../styles/ToDoCounter.css'

function ToDoCounter({ completed, total }) {
    return(
        <div className="ToDoCounter">
            <p className='Saludo'>
                Hola! 
            </p>
            <p className='Contador'>
                Has completado {completed} pendientes de {total}.
            </p>
        </div>
    )
}

export default ToDoCounter
import React from 'react'
import '../styles/ToDoItem.css'

export default function ToDoItem(props) {
    const onComplete = () => {
        alert(`Completaste la tarea ${props.text}`)
    }
    
    const onDelete = () => {
        alert(`Eliminaste la tarea: ${props.text}`)
    }
    
    return (
        <li className='ToDoItem'>
            <span 
                className={`Completed ${props.complete && 'IconActive'}`}
                onClick={onComplete}
            >
                ✔
            </span>
            <p className={`${props.complete && 'TextComplete'}`}>
                {props.text}
            </p>
            <span 
                className='Close'
                onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}
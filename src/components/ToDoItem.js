import React from 'react'
import '../styles/ToDoItem.css'

export default function ToDoItem(props) {    
    return (
        <li className='ToDoItem'>
            <span 
                className={`Completed ${props.complete && 'IconActive'}`}
                onClick={props.onComplete}
            >
                ✔
            </span>
            <p className={`${props.complete && 'TextComplete'}`}>
                {props.text}
            </p>
            <span 
                className='Close'
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    )
}
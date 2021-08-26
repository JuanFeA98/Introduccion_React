import React from 'react'
import '../styles/ToDoItem.css'

export default function ToDoItem(props) {
    return (
        <li className='ToDoItem'>
            <span className={`Completed ${props.complete && 'IconActive'}`}></span>
            <p className={`${props.complete && 'TextComplete'}`}>{props.text}</p>
            <span className='Close'>X</span>
        </li>
    )
}
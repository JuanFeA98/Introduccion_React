import React from 'react'
import '../styles/ToDoItem.css'

export default function ToDoItem(props) {
    return (
        <li className='ToDoItem'>
            <span className='Completed'></span>
            <p>{props.text}</p>
            <span className='Close'>X</span>
        </li>
    )
}

import React from 'react'

export default function ToDoItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}

import React from 'react'
import '../styles/ToDoList.css'

export default function ToDoList(props) {
    return (
        <section className='ToDoList'>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

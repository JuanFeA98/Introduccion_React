import React from 'react'

import '../styles/ToDoForm.css'
import { ToDoContext } from '../context'

export default function ToDoForm() {
    const [newToDoValue, setNewToDoValue] = React.useState('');
    
    const {
        addToDo,
        setOpenModal
    } = React.useContext(ToDoContext)
    
    const onChange = (event) =>{
        setNewToDoValue(event.target.value)
    }

    const onCancel = () =>{
        setOpenModal(false)
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        addToDo(newToDoValue)
        setOpenModal(false)
    }

    return (
        <form className='ToDoForm' onSubmit={onSubmit}>
            <label></label>
            <textarea 
                placeholder='Agregar'
                value={newToDoValue}
                onChange={onChange}
            />
            <div>
                <button
                    type='button'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

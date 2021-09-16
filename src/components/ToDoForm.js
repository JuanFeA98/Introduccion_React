import React from 'react'

import '../styles/ToDoForm.css'

export default function ToDoForm() {
    const onCancel = () =>{
        alert('H')
    }
    
    const onSubmit = () =>{
        alert('F')
    }

    return (
        <form className='ToDoForm' onSubmit={onSubmit}>
            <label></label>
            <textarea placeholder='Agregar'/>
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

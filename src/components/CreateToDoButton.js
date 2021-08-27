import React from 'react';
import '../styles/CreateToDoButton.css'

function CreateToDoButton(props){
    const onClickfunction = (mensaje) => {
        console.log(mensaje)
    }
    
    return(
        <button 
            className='CreateToDoButton'
            onClick={()=>onClickfunction('Jumm')}
        >
            +
        </button>
    )
}

export default CreateToDoButton
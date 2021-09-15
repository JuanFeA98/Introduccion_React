import React from 'react';
import '../styles/CreateToDoButton.css'

function CreateToDoButton(props){
    // const onClickfunction = () => {
    //     props.setOpenModal(true);
    // }
    
    return(
        <button 
            className='CreateToDoButton'
            onClick={()=>props.setOpenModal(!props.openModal)}
        >
            +
        </button>
    )
}

export default CreateToDoButton
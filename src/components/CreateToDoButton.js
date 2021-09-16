import React from 'react';
import '../styles/CreateToDoButton.css'

function CreateToDoButton(props){
    const onClickButton = () => {
        // props.setOpenModal(true);
        props.setOpenModal(prevState => !prevState)
    };
    
    return(
        <button 
            className='CreateToDoButton'
            // onClick={()=>props.setOpenModal(!props.openModal)}
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export default CreateToDoButton
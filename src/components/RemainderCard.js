import '../styles/styles.css';
import messageicon from '../assets/message-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const RemainderCard = () => {

    const [enableEdit, setEnableEdit] = useState(false);

    const mouseUp = () => {
        setEnableEdit(true);
    }

    const mouseDown = () => {
        setEnableEdit(false);
    }

    const editRemainder = () =>{
        console.log("editRemainder");
    }

    const deleteRemainder = () =>{
        console.log("deleteRemainder");
    }

    return(
        <div className="w-72 h-72 custom-border  cursor-pointer shadow-lg " onMouseOver={mouseUp} onMouseOut={mouseDown}>
            <div className="custom-border-bottom  h-1/6 flex-style">
                <p className="text-xl">12.01.2024 12:30:33</p>
            </div>
            <div className="custom-border-bottom  h-4/6 flex justify-center" >
                <img className="w-48" src={messageicon} alt="icon"></img>
                {enableEdit && (<div className="center-icons flex">
                    <div className="px-12" onClick={editRemainder}>
                        <FontAwesomeIcon icon={faEdit} size='3x'/>
                    </div>
                    <div className="px-12" onClick={deleteRemainder}>
                        <FontAwesomeIcon icon={faTrashCan} size='3x' />
                    </div>
                </div>)}
            </div>
            <div className="h-1/6 flex-style">
                <p className="text-2xl font-bold">A B'day</p>
            </div>
        </div>
    )
}

export default RemainderCard;
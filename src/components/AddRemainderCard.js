import '../styles/styles.css';
const AddRemainderCard = () =>{

    const openCreateRemainder = () =>{
        console.log("openCreateRemainder");
    }

    return(
        <div className="w-72 h-72 custom-border  cursor-pointer shadow-lg" onClick={openCreateRemainder}>
            <div className="h-2/3 flex-style">
                <div className="text-9xl">+</div>
            </div>
            <div className="background-gold h-1/3  flex-style">
                <h2 className="black-text text-2xl font-bold">Add Event Remainder</h2>
            </div>
        </div>
    )
}

export default AddRemainderCard;
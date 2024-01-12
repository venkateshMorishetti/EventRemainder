import '../styles/AddRemainder.css';
const AddRemainder = () =>{

    return(
        <div className="w-72 h-72 custom-border  cursor-pointer shadow-lg">
            <div className="h-2/3 flex-style">
                <label className="text-9xl">+</label>
            </div>
            <div className="background-gold h-1/3  flex-style">
                <h2 className="black-text text-2xl font-bold">Add Event Remainder</h2>
            </div>
        </div>
    )
}

export default AddRemainder;
import Header from './Header';
import '../styles/Body.css';
import AddRemainder from './AddRemainder';
import RemainderCard from './RemainderCard';
const Body = ()=>{
    return(
        <div className="bg-black bg-opacity-85 body">
            <Header />
            <div className="flex">
                <div className="p-8">
                    <AddRemainder />
                </div>
                <div className="p-8">
                    <RemainderCard />
                </div>
            </div>
        </div>
    )
}

export default Body;
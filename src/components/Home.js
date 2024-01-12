import Header from './Header';
import '../styles/styles.css';
import AddRemainderCard from './AddRemainderCard';
import RemainderCard from './RemainderCard';

const Home = () =>{
    return(
        <div >
            <Header />
            <div className="flex">
                <div className="p-8">
                    <AddRemainderCard />
                </div>
                <div className="p-8">
                    <RemainderCard />
                </div>
            </div>
        </div>
    )
}

export default Home;
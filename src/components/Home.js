import Header from './Header';
import '../styles/styles.css';
import AddRemainderCard from './AddRemainderCard';
import RemainderCard from './RemainderCard';
import { useSelector } from 'react-redux';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { updateChartOptionsStatus } from '../utility/appConfigSlice';
import AnalysisChart from './AnalysisChart';

const Home = () =>{
    const dispatch = useDispatch();
    const showChartOptions = useSelector(store => store.appConfig.displayChartOptions);
    const hideChartOptions = () => {
        dispatch(updateChartOptionsStatus())
    }
    return(
        <div>
            <Header />
            {showChartOptions && <div className='rounded-2xl chart-options-box bg-zinc-500 shadow-2xl'>
                <div className='chart-option-close-icon cursor-pointer' onClick={hideChartOptions}>
                    <FontAwesomeIcon icon={faXmark} size='2x' className="white-text"/>
                    <AnalysisChart />
                    <div className='flex justify-center text-xl font-bold '>
                        <button className='rounded-lg bg-gray-900 py-1.5 px-4 white-text'>Sign Out</button>
                    </div>
                </div>
            </div>}
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
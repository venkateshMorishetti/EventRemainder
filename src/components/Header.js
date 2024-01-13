import { APP_LOGO } from "../utility/constants";
import "../styles/styles.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";
import { updateIsInSignInPage, updateChartOptionsStatus } from "../utility/appConfigSlice";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const redirectToHomePage = () =>{
        navigate('/');
        dispatch(updateIsInSignInPage(false))
    }
    const displayChartOptions = () => {
        dispatch(updateChartOptionsStatus())
    }

    return (
        
            <div className="header py-3">
                <div className="px-4 cursor-pointer" onClick={redirectToHomePage}><img src={APP_LOGO} alt="app logo"  className="w-24 -rotate-45"/></div>
                <div className="px-4 cursor-pointer" onClick={displayChartOptions}>
                    <FontAwesomeIcon icon={faBars} size='4x' className="gold-text"/>
                </div>
            </div>
            
        
    );
}

export default Header;
import { APP_LOGO } from "../utility/constants";
import "../styles/styles.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from "react-redux";
import { updateIsInSignInPage } from "../utility/appConfigSlice";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isInSignInPage = useSelector(store => store.appConfig.isInSignInPage)

    const redirectToSignInPage = () => {
        navigate('/signin');
        dispatch(updateIsInSignInPage(true))
    }
    const redirectToHomePage = () =>{
        navigate('/');
        dispatch(updateIsInSignInPage(false))
    }
    return (
        <div className="header py-3">
            <div className="px-4 cursor-pointer" onClick={redirectToHomePage}><img src={APP_LOGO} alt="app logo"  className="w-24 -rotate-45"/></div>
            {!isInSignInPage && <div className="pe-14">
                <button className="text-xl text-white border-solid border-2  px-6 py-3 custom-border" onClick={redirectToSignInPage}>Sign In</button>
            </div>}
        </div>
    );
}

export default Header;
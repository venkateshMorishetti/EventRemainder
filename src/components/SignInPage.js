import { APP_LOGO } from "../utility/constants";
import "../styles/styles.css";
import{ faCircleLeft, faCircleRight, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
const SignInPage = () => {
    const navigate = useNavigate();
    const redirectToHomePage = () =>{
        navigate('/');
    }
    return (
        <div className="h-full">
            <div className="login-logo-alignment  cursor-pointer" onClick={redirectToHomePage}>
                <img src={APP_LOGO} alt="app logo"  className="w-24 -rotate-45"/>
            </div>
            <div className="login-tab">
                <div className="login-tab-content flex flex-col">
                    <div className="p-12">
                        <div className="flex pb-16">
                            <div onClick={redirectToHomePage} className=" cursor-pointer ">
                                <FontAwesomeIcon icon={faCircleLeft} size='2x' className="white-text"/>
                            </div>
                            <div className="pl-12">
                                {/* <h1 className="text-5xl font-bold text-white">LET'S GET STARTED</h1> */}
                                <h1 className="text-5xl font-bold text-white">VIRTUAL REMAINDER</h1> 
                            </div>
                        </div>
                        <div className="pb-20 flex pl-20">
                            <input type="number"className="mobile-number-box text-white" placeholder="Enter Mobile Number" />                        
                        </div>
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faCircleRight} size='4x' className="white-text"/>
                        </div>
                    </div>


                </div>

            </div>
            
        </div>
    );
}

export default SignInPage;
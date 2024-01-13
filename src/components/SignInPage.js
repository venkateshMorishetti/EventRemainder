import { APP_LOGO } from "../utility/constants";
import "../styles/styles.css";
import{ faCircleRight, faSmileBeam} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
const SignInPage = () => {
    const navigate = useNavigate();
    const [showOTP, setShowOTP] = useState(false);
    const redirectToHomePage = () =>{
        navigate('/');
    }

    const verifyPhoneNumber =() => {
        setShowOTP(true);
        if(showOTP){
            navigate('/home');
        }
    }
    return (
        <div className="h-full">
            <div className="login-logo-alignment  cursor-pointer" onClick={redirectToHomePage}>
                <img src={APP_LOGO} alt="app logo"  className="w-24 -rotate-45"/>
            </div>
            <div className="login-tab">
                <div className="login-tab-content flex flex-col">
                    <div className="p-12">
                        <div className="flex pb-12">
                            <div className=" cursor-pointer ">
                                <FontAwesomeIcon icon={faSmileBeam} size='4x' className="gold-text"/>
                            </div>
                            <div className="pl-12">
                                <h1 className="text-5xl font-bold gold-text">VIRTUAL REMAINDER</h1> 
                            </div>
                        </div>
                        <div className="pb-14 flex pl-20">
                            
                        {!showOTP && <input type="number"className="mobile-number-box gold-text" placeholder="Enter Mobile Number" />   }  
                        {showOTP &&
                        <>
                            <div className="flex flex-col">
                            <div className="gold-text">
                                Please enter the verifcation code that we have sent to your Mobile Number.
                            </div>
                            <div className="flex mt-4">
                            <input type="number"className="otp-number-box gold-text w-14 h-14 " max="9" min="0" maxlength="1" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"/>  
                            <input type="number"className="otp-number-box gold-text w-14 h-14 ms-4 " max="9" min="0" maxlength="1" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"/>  
                            <input type="number"className="otp-number-box gold-text w-14 h-14 ms-4" max="9" min="0" maxlength="1" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"/>  
                            <input type="number"className="otp-number-box gold-text w-14 h-14 ms-4" max="9" min="0" maxlength="1" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"/>  
                            </div>
                            </div>
                        </> 
                         }                       
                        </div>
                        <div className="flex justify-center cursor-pointer" onClick={verifyPhoneNumber}>
                            <FontAwesomeIcon icon={faCircleRight} size='4x' className="gold-text "/>
                        </div>
                    </div>


                </div>

            </div>
            
        </div>
    );
}

export default SignInPage;
import { APP_LOGO } from "../utility/constants";
import "../styles/Header.css";
const Header = () => {
    return (
        <div className="header py-3">
            <div className="px-4"><img src={APP_LOGO} alt="app logo"  className="w-24 -rotate-45"/></div>
            <div className="pe-14">
                <button className="text-xl text-white border-solid border-2  px-6 py-3 custom-border">Sign In</button>
            </div>
        </div>
    );
}

export default Header;
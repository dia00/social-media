import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Indigo</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Indigo.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <Link to="/login">
                            <span className="loginForgot">Log In An Existing Account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
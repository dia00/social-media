import { Link, useNavigate } from "react-router-dom";
import { Users } from "../../dummyData.js";
import { useState } from "react";
import "./login.css";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleClick = () => {
        let hasUser = false;
        for(let i = 0; i < Users.length; i++) {
            if(email === Users[i].email && password === Users[i].password) {
                navigate('/');
            }
            else {
                setError("Invalid email or password");
            }
    }}

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Indigo</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Indigo.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input id="email" type="email" placeholder="Email" className="loginInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input id="password" type="password" placeholder="Password" className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button className="loginButton"
                                onClick={handleClick}>
                            Login
                        </button>
                        <div className="loginError"> {error} </div>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register">
                            <button className="loginRegisterButton">Create an Account</button>
                        </Link>
                        
                    </div> 
                </div>
            </div>
        </div>
    )
}


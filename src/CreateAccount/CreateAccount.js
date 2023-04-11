//this code is for the create account page
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const CreateAccount = () => {

    const navigate = useNavigate();
    const handleResister = () => {
        navigate("/app");
    }

    return (
        <div className="createAccount">
            <div className="createAccountWrapper">
                <div className="createAccountLeft">
                    <h3 className="createAccountLogo">Create Account</h3>
                    <span className="createAccountDesc">
                        Connect with friends and the world around you on Create Account.
                    </span>
                </div>
                <div className="createAccountRight">
                    <form className="createAccountBox">
                        <input placeholder="Username" className="createAccountInput" />
                        <input type="email" placeholder="Email" className="createAccountInput" />
                        <input type="password" placeholder="Password" className="createAccountInput" />
                        <input placeholder="Password Again" className="createAccountInput" />
                        <button onClick={handleResister} className="createAccountButton">Sign Up</button>      
                        <button className="createAccountRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CreateAccount;
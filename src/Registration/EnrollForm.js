import React, { useState }from "react";
import {useNavigate} from "react-router-dom";
import styles from "./RegistrationForm.module.css";
import { Auth } from "aws-amplify";
const EnrollForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = async () => {
        try{
            const user = await Auth.signIn(email, password);
            console.log("email:", user.email,"\npassword:", user.password);
            navigate("/app");
        } catch (error) {
            console.log("error signing in", error);
        }
    };

    return (
        <div className={styles.formcontainer}>
            <div className={styles.formwrapper}>
                <h1 className={styles.formtitle}>Login</h1>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.forminput}
                    placeholder="Email-address"
                    type="email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.forminput}
                    placeholder="Password"
                    type="password"
                />
                <button 
                    className={styles.formsubmit}  
                    onClick={handleLogin}>
                        Login
                </button>
                <div>
                    <label>Need a new account? </label>
                    <button 
                        className={styles.createAccount} 
                        onClick={() => navigate("/createnewaccount")}>
                            sign up
                    </button>
                </div>
            </div>
        </div>
    );
}
export default EnrollForm;
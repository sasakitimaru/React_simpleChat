import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./RegistrationForm.module.css";
const EnrollForm = () => {

    const navigate = useNavigate();

    const handleResister = () => {
        navigate("/createnewaccount");
    }
    const handleResister2 = () => {
        navigate("/app");
    }
    return (
        <div className={styles.formcontainer}>
            <div className={styles.formwrapper}>
                <h1 className={styles.formtitle}>Enroll Form</h1>
                <input
                    className={styles.forminput}
                    placeholder="Email-address"
                    type="email"
                />
                <input
                    className={styles.forminput}
                    placeholder="Password"
                    type="password"
                />
                <button className={styles.formsubmit} onClick={handleResister2}>
                    Login
                </button>
                <button class={styles.createAccount} onClick={handleResister}>create Account</button>
            </div>
        </div>
    );
}
export default EnrollForm;
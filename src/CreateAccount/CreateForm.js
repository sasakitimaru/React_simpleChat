import React, { useRef, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import styles from './CreateAccount.module.css';

const CreateForm = () => {
    const passRef = useRef();
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkpassword = (e) => {
        const match = e.target.value === passRef.current.value;
        setPasswordsMatch(match);
        // console.log("prev: ", e.target.value, "\ncurrent:", passRef.current.value);
        // console.log("true?:", match);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(passwordsMatch){
            try {
                const { user } = await Auth.signUp({
                    username: email,
                    password,
                    attributes: {
                        name: username,
                        email: email,
                    },
                });
                console.log("user created:", user);
                navigate("/verify", { state: { username: email } });
            } catch (error) {
                console.log("error signing up:", error);
            }
        }else{
            console.log("passwords don't match");
        }
    };

    return (
        <>
            <form className={styles.createAccountBox}>
                <label className={styles.createAccountLabel}>Username</label>
                <input 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    className={styles.createAccountInput} 
                />
                <label className={styles.createAccountLabel}>Email</label>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" placeholder="Email" 
                    className={styles.createAccountInput} 
                />
                <label className={styles.createAccountLabel}>Password</label>
                <input 
                    onChange={(e) => setPassword(e.target.value)} 
                    ref={passRef} 
                    type="password" 
                    placeholder="Password" 
                    className={styles.createAccountInput} 
                />
                <label className={styles.createAccountLabel}>Password Again</label>
                <input 
                    onChange={(e) => checkpassword(e)} 
                    type="password" 
                    placeholder="Password Again" 
                    className={styles.createAccountInput} 
                />
                {!passwordsMatch && <label className={styles.createAccountwarning}>not match</label>}
            </form>
            <button onClick={handleSubmit} className={styles.createAccountButton}>sign up</button>
        </>
    );
}
export default CreateForm;

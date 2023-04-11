import React, { useRef, useState } from 'react';
import styles from './CreateAccount.module.css';

const CreateForm = () => {
    const passRef = useRef();
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const checkpassword = (e) => {
        const match = e.target.value === passRef.current.value;
        setPasswordsMatch(match);
        console.log("prev: ", e.target.value, "\ncurrent:", passRef.current.value);
        console.log("true?:", match);
    }

    return (
        <form className={styles.createAccountBox}>
            <label className={styles.createAccountLabel}>Username</label>
            <input placeholder="Username" className={styles.createAccountInput} />
            <label className={styles.createAccountLabel}>Email</label>
            <input type="email" placeholder="Email" className={styles.createAccountInput} />
            <label className={styles.createAccountLabel}>Password</label>
            <input ref={passRef} type="password" placeholder="Password" className={styles.createAccountInput} />
            <label className={styles.createAccountLabel}>Password Again</label>
            <input onChange={(e) => checkpassword(e)} type="password" placeholder="Password Again" className={styles.createAccountInput} />
            {!passwordsMatch && <label className={styles.createAccountwarning}>not match</label>}
        </form>
    );
}
export default CreateForm;

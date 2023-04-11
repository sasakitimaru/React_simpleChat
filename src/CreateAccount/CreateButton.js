//this is a react component that is used to create a button
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateAccount.module.css';
const CreateButton = () => {

    const navigate = useNavigate();
    const handleResister = () => {
        navigate("/app");
    }

    return (
        <button onClick={handleResister} className={styles.createAccountButton}>sign up</button>
    );
}  
export default CreateButton;
//this is the title and comment section of the create account page
//this is a react component that is used to create the title and comment section of the create account page
import React from 'react';
import styles from './CreateAccount.module.css';

const TitleAndComment = () => {
    return (
        <div className={styles.createAccountWrapper}>
            <h3 className={styles.createAccountLogo}>sign up a new account</h3>
            <span className={styles.createAccountDesc}>
                Connect with friends and the world around you on Create Account.
            </span>
        </div>
    );
}
export default TitleAndComment;

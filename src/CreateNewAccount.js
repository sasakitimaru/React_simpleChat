import React from "react";
import styles from "./CreateAccount/CreateAccount.module.css";

import { TitleAndComment, CreateForm, CreateButton} from "./CreateAccount/index";

const CreateNewAccount = () => {
    
    return (
        <div class ={styles.createAccount} >
            <TitleAndComment/>
            <CreateForm/>
            <CreateButton/>
        </div>
    );
}
export default CreateNewAccount;
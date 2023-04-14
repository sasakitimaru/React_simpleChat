//import React, { useState, useEffect,useRef } from "react";
import { EnrollForm } from "./Registration/index";
import React, { useEffect }from "react";
import { aws_exports } from "./CreateAccount/index";
const RegistrationForm = () => {

    useEffect(() => {
        aws_exports();
    }, []);

    return (
        <div>
            <EnrollForm />
        </div>
    );
}
export default RegistrationForm;
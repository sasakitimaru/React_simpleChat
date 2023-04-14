import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Verify = (props) => {
    const [code, setCode] = useState("");
    const location = useLocation();
    const username = location.state.username;
    const navigate = useNavigate();

    const verifycode = async () => {
        try {
            await Auth.confirmSignUp(username, code);
            console.log("Code confirmed successfully.");
            navigate("/");
        } catch (error) {
            console.log("Error confirming the code: ", error);
        }
    };

    const resendCode = async () => {
        try {
            await Auth.resendSignUp(username);
            console.log("Code resent successfully");
        } catch (error) {
            console.log("Error resending the code: ", error);
        }
    };

    return (
        <div>
            <h1>We are verifying your account</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Enter the code sent to your email</label>
                <input onChange={(e) => setCode(e.target.value)} type="text" />
                <button onClick={verifycode}>Verify</button>
                <button onClick={resendCode}>Resend Code</button>
            </form>
        </div>
    );
};
export default Verify;

import React from "react";

import './Login.css'
import LoginContainer from "../components/LoginContainer";

const Login = () => {
    return(
        <div className="main-container">
            <div className="left-container">
                <div className="image-container">
                    <img src="./images/students.png" alt="somthing"/>
                    <div className="text-overlay">
                        <h3 className="slogan">Empowering Educators, Enhancing Learning.</h3>

                    </div>
                </div>
            
            
            </div>

            <div className="right-container">
                <img src="./images/logo.png" alt="Description of the logo" class="logo"/>

                <LoginContainer/>
                

            </div>
        </div>

    );
};

export default Login;

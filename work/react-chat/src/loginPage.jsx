import React from 'react';
import './loginPage.css';


const LoginPage=({Login,username,ifDisplay,ifDisabled})=>{
    return(
        <div id="login-frame" style={{display:ifDisplay}}>

        <div className="login-page" >
            <span className="login-label">Login</span>
            <input name="username" className="username-to-send"  placeholder="Enter username" onChange={(e)=>username(e)}/>
            <button disabled={ifDisabled} className="login-send-button"  onClick={(e)=>Login(e) }>Login</button>

            </div>
    </div>
    )

};

export default LoginPage;
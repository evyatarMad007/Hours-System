import React, { Component } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { apiUrl } from '../../config/config.json';
const axios = require('axios');

class Signin extends Component {
    state = { 
        user: { 
            password: "123456",
            email: "evyatar@gmail.com",
        },
        errors: {}
    } 

    // componentDidMount() {
    //     const userData =  this.state.user;
    //     const options = {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(userData)
    //     }
    //     fetch(`${apiUrl}/users/signup`, options)
    //     .then( res  => res)
    //     .then( data => console.log(data));

        

    // }

    render() { 
        return ( 
            <div className="signin">
                
                <div className="signin__content">
                    <div className="signin__content__form-box">
                        <div className="title-login">
                            <p>Sign In</p>
                        </div>
                        <form id="signin-form" action="" method="POST" novalidate="novalidate">
                            <div className="inputs-area">
                            <div className="email-box">
                                <label htmlFor=""><GoMail/></label>
                                <input type="email" name="email" placeholder="Email Adress"/>
                            </div>
                            <div className="password-box">
                                <label htmlFor=""><RiLockPasswordLine/></label>
                                <input type="password" name="password" placeholder="Password"/>
                            </div>
                            </div>
                            <div className="submit-box">
                                <button type="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signin;
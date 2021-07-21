import React, { Component }from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { AiOutlinePhone,AiOutlineUser } from "react-icons/ai";
import { apiUrl } from '../../config/config.json';
import http from '../../service/httpService';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import Joi from "joi-browser";
// import userService from "../services/userService";


class Signup extends Component {
    state = { 
        data: { 
            first_name: "",
            last_name: "",
            password: "",
            phone_number: "",
            email: "",
        },
        errors: {}
    }

     schema = {
        first_name: Joi.string().required().email().label("first_name"),
        last_name: Joi.string().required().email().label("last_name"),
        phone_number: Joi.string().required().email().label("phone_number"),
        password: Joi.string().required().min(6).label("Password"),
        email: Joi.string().required().email().label("Email"),
      };


     doSubmit = async () => {
         const data = {...this.state.data};
         await http.post(`${apiUrl}/users/signup`, data); 
     }


    render() { 

        // if( userService.getCurrentUser() ) return <Redirect to="/"/>  // if user token easist go to home page <--


        return ( 
            <div className="signup">
                
                <div className="signup__content">
                    <div className="signup__content__form-box">
                        <div className="title-register">
                            <p>Sign Up</p>
                        </div>
                        <form id="signup-form" action="" method="POST" novalidate="novalidate">
                            <div className="inputs-area">
                                <div className="username-box">
                                <div className="l-name">
                                        <input type="text" name="l_name" placeholder="Last Name"/>
                                    </div>
                                    <div className="f-name">
                                        <label htmlFor=""><AiOutlineUser/></label>
                                        <input type="text" name="f_name" placeholder="First Name"/>
                                    </div>
                                </div>

                                <div className="phone-box">
                                    <label htmlFor=""><AiOutlinePhone/></label>
                                    <input type="tel" name="Phone" placeholder="Phone Number"/>
                                </div>

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
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signup;
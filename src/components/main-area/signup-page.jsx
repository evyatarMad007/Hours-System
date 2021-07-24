import React, { Component }from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { AiOutlinePhone,AiOutlineUser } from "react-icons/ai";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import Joi  from 'joi';
// import http from '../../service/httpService';
// import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import userService from "../services/userService";

class Signup extends Component {
    state = { 
        user: { 
            first_name: "Evyatar",
            last_name: "Madari",
            password: "123456",
            phone_number: "0504777882",
            email: "evyatar@gmail.com",
        },
        errors: {}
    } 
     schema = {
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        phone_number: Joi.string().required(),
        password: Joi.string().required().min(6),
        email: Joi.string().required(),
      };

    handlerChangeUser = (property, value) => {
        let user = this.state.user;
        user[property] = value;
        this.setState({ user })
    }

    doSubmit = async () => {
        const userData =  {...this.state.user}; // deep copy


        await axios.post(`${apiUrl}/users/signup`, userData )
          .then( res => console.log(res.data,'res'))
          .catch( err => console.log(err,'err'))
        this.setState({user: {first_name: "",last_name: "",password: "",phone_number: "",email: "",}})
        toast("here we need tow rite the message");

    }
    

    render() { 
        
        // if( userService.getCurrentUser() ) return <Redirect to="/"/>  // if user token easist go to home page <--
       

        return ( 
            <div className="signup" onClick={this.doSubmit}>
                
                <div className="signup__content">
                    <div className="signup__content__form-box">
                        <div className="title-register">
                            <p>Sign Up</p>
                        </div>
                        <form id="signup-form" action="" method="POST" noValidate="noValidate">
                            <div className="inputs-area">
                                <div className="username-box">
                                    <div className="l-name">
                                        <input autoComplete="true" type="text" name="l_name" value={this.state.user.last_name} onChange={ e => this.handlerChangeUser('last_name', e.target.value)} placeholder="Last Name"/>
                                    </div>
                                    <div className="f-name">
                                        <label htmlFor=""><AiOutlineUser/></label>
                                        <input autoComplete="true" type="text" name="f_name" value={this.state.user.first_name} onChange={ e => this.handlerChangeUser('first_name', e.target.value)} placeholder="First Name"/>
                                    </div>
                                </div>

                                <div className="phone-box">
                                    <label htmlFor=""><AiOutlinePhone/></label>
                                    <input autoComplete="true" type="tel" name="Phone" value={this.state.user.phone_number} onChange={ e => this.handlerChangeUser('phone_number', e.target.value)} placeholder="Phone Number"/>
                                </div>

                                <div className="email-box">
                                    <label htmlFor=""><GoMail/></label>
                                    <input autoComplete="true" type="email" name="email" value={this.state.user.email} onChange={ e => this.handlerChangeUser('email', e.target.value)} placeholder="Email Adress"/>
                                </div>

                                <div className="password-box">
                                    <label htmlFor=""><RiLockPasswordLine/></label>
                                    <input autoComplete="true" type="password" name="password" value={this.state.user.password} onChange={ e => this.handlerChangeUser('password', e.target.value)} placeholder="Password"/>
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
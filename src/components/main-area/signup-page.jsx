import React, { Component }from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { AiOutlinePhone,AiOutlineUser } from "react-icons/ai";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
// import http from '../../service/httpService';
// import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import userService from "../services/userService";

class Signup extends Component {
    state = { 
        user: { 
            first_name: "",
            last_name: "",
            password: "",
            phone_number: "",
            email: "",
        },
        errors: {
            err_first_name: "",
            err_last_name: "",
            err_password: "",
            err_phone_number: "",
            err_email: "",
        },
        isValid: {
            first_name: false,
            last_name: false,
            password: false,
            phone_number: false,
            email: false,
        },
        toSubmitMode: false
    }

    handlerChangeUser = (inpName, inpValue) => {
        let user = this.state.user;
        let {errors, isValid} = this.state;
        user[inpName] = inpValue;
        this.setState({ user })
        // validate 
        if( user.first_name ) {
            if( user.first_name.length < 2 ) {
                errors.err_first_name = 'שם פרטי חייב להכיל לפחות 2 תווים';
                isValid.first_name = false;
            } 
            if( user.first_name.length >= 2 ) {
                errors.err_first_name = null;
                isValid.first_name = true;
            }
        }
        if( user.last_name ) {
            if( user.last_name.length < 2 ) {
                errors.err_last_name = 'שם משפחה חייב להכיל לפחות 2 תווים';
                isValid.last_name = false;
            } 
            if( user.last_name.length >= 2 ) {
                errors.err_last_name = null;
                isValid.last_name = true;
            }
        }
        if( user.email ) {
            const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if( ! regEmail.test(user.email) ) {
                errors.err_email = "דוא''ל לא ולידי";
                isValid.email = false;
            } 
            if( regEmail.test(user.email) ) {
                errors.err_email = null;
                isValid.email = true;
            }
        }
        if( user.phone_number ) {
            const regIsraeliPhone = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
            if( ! regIsraeliPhone.test(user.phone_number) ) {
                errors.err_phone_number = 'מספר טלפון לא חוקי';
                isValid.phone_number = false;
            } 
            if( regIsraeliPhone.test(user.phone_number) ) {
                errors.err_phone_number = null;
                isValid.phone_number = true;
            }
        }
        if( user.password ) {
            const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            if( ! regPassword.test(user.password) ) {
                if( user.password.length > 20 ) {
                    errors.err_password = 'הסיסמה חייבת להכיל תו, מספר, אות גדולה, אות קטנה, ובאורך של 8 תווים עד 20 תווים';
                    isValid.password = false;
                }
                errors.err_password = 'הסיסמא חייבת להכיל תו, מספר, אות גדולה, אות קטנה, ובאורך של 8 תווים עד 20 תווים';
                isValid.password = false;
            } 
            if( regPassword.test(user.password) || user.password >= 8 && user.password < 20) {
                errors.err_password = null;
                isValid.password = true;
            }
        }
        if( isValid.first_name && isValid.last_name && isValid.password && isValid.phone_number && isValid.email) {
           let {toSubmitMode} = this.state;
           toSubmitMode = true;
           this.setState({ toSubmitMode })
        }
        if( ! isValid.first_name || ! isValid.last_name || ! isValid.password || ! isValid.phone_number || ! isValid.email) {
           let {toSubmitMode} = this.state;
           toSubmitMode = false;
           this.setState({ toSubmitMode })
        }

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
        const { errors } = this.state;
        console.log(errors);
        // if( userService.getCurrentUser() ) return <Redirect to="/"/>  // if user token easist go to home page <--
       

        return ( 
            <div className="signup">
                
                <div className="signup__content">
                    <div className="signup__content__form-box">
                        <div className="title-register">
                            <p>Sign Up</p>
                        </div>
                        <form id="signup-form" action="" onSubmit={this.doSubmit} method="POST" autoComplete="off" noValidate>
                            <div className="inputs-area">
                                <div className="username-box">
                                    <div className="l-name">
                                        <label htmlFor=""></label>
                                        <input autoComplete="true" type="text" name="l_name" value={this.state.user.last_name} onChange={ e => this.handlerChangeUser('last_name', e.target.value)} placeholder="Last Name"/>
                                        <span className={ errors.err_last_name ? 'err err-on': 'err'}>{errors.err_last_name}</span>
                                    </div>
                                    <div className="f-name">
                                        <label htmlFor=""><AiOutlineUser/></label>
                                        <input autoComplete="true" type="text" name="f_name" value={this.state.user.first_name} onChange={ e => this.handlerChangeUser('first_name', e.target.value)} placeholder="First Name"/>
                                        <span className={ errors.err_first_name ? 'err err-on': 'err'}>{errors.err_first_name}</span>
                                    </div>
                                </div>

                                <div className="phone-box">
                                    <label htmlFor=""><AiOutlinePhone/></label>
                                    <input autoComplete="true" type="tel" name="Phone" value={this.state.user.phone_number} onChange={ e => this.handlerChangeUser('phone_number', e.target.value)} placeholder="Phone Number"/>
                                    <span className={ errors.err_phone_number ? 'err err-on': 'err'}>{errors.err_phone_number}</span>
                                </div>

                                <div className="email-box">
                                    <label htmlFor=""><GoMail/></label>
                                    <input autoComplete="true" type="email" name="email" value={this.state.user.email} onChange={ e => this.handlerChangeUser('email', e.target.value)} placeholder="Email Adress"/>
                                    <span className={ errors.err_email ? 'err err-on': 'err'}>{errors.err_email}</span>
                                </div>

                                <div className="password-box">
                                    <label htmlFor=""><RiLockPasswordLine/></label>
                                    <input autoComplete="true" type="password" name="password" value={this.state.user.password} onChange={ e => this.handlerChangeUser('password', e.target.value)} placeholder="Password"/>
                                    <span className={ errors.err_password ? 'err err-on': 'err'}>{errors.err_password}</span>
                                </div>
                                
                            </div>
                            <div className="submit-box">
                                <button type="submit" disabled={ this.state.toSubmitMode ? false : true }>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signup;
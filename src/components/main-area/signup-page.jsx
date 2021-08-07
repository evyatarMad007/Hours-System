import React, { Component }from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { AiOutlinePhone,AiOutlineUser } from "react-icons/ai";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userService from "../../utils/jwtUser";
import { Redirect } from "react-router-dom";
import PageHeader from '../common/page-header';

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

    // validate function 
    handlerChangeUser = (inpName, inpValue) => {
        let user = this.state.user;
        let {errors, isValid} = this.state;
        user[inpName] = inpValue;
        this.setState({ user })
        // validate 
        if( user.first_name ) {
            if( user.first_name.length < 2 ) {
                errors.err_first_name = 'First name must be at least 2 characters long';
                isValid.first_name = false;
            } 
            if( user.first_name.length >= 2 ) {
                errors.err_first_name = null;
                isValid.first_name = true;
            }
        }
        if( user.last_name ) {
            if( user.last_name.length < 2 ) {
                errors.err_last_name = 'Last name must be at least 2 characters long';
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
                errors.err_email = "Invalid email";
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
                errors.err_phone_number = 'Invalid phone number';
                isValid.phone_number = false;
            } 
            if( regIsraeliPhone.test(user.phone_number) ) {
                errors.err_phone_number = null;
                isValid.phone_number = true;
            }
        }
        if( user.password ) {
            const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if( ! regPassword.test(user.password) ) {
                if( user.password.length > 20 ) {
                    errors.err_password = 'Password Minimum eight characters, at least one letter and one numbeThe password must contain a minimum of 8 characters, letters and numbers';
                    isValid.password = false;
                }
                errors.err_password = 'The password must contain a minimum of 8 characters, letters and numbers';
                isValid.password = false;
            } 
            if( regPassword.test(user.password) && user.password.length >= 8 && user.password.length < 20) {
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

    // create new user
    doSubmit = async () => {
        const userData =  {...this.state.user}; // deep copy

        try {
            await axios.post(`${apiUrl}/users/signup`, userData )
            this.setState({user: {first_name: "",last_name: "",password: "",phone_number: "",email: "",}})
            toast("User created successfully.");
            this.props.history.replace('/signin');

        } 
        catch (err) {
            if( err.response && err.response.status === 409 ){
                let { errors } = this.state;
                errors.err_email = "Email is taken"
                this.setState({ errors })
            }
        }
    }

    render() { 
        const { errors } = this.state;
        const { user } = this.state;

        if( userService.getCurrentUser() ) return <Redirect to="/"/>        

        return ( 
            <div className="signup">
                <div className="signup__content">
                    <div className="signup__content__form-box">
                        <div className="title-register">
                            <PageHeader>Sign Up</PageHeader>
                            
                        </div>
                        <form id="signup-form"  method="POST" autoComplete="off" noValidate>
                            <div className="inputs-area">
                                
                                    <div className="f-name">
                                        <label htmlFor=""><AiOutlineUser/>{ user.first_name ? errors.err_first_name ? <div className="error-icon"><VscError/></div> : <div className="success-icon"><BiCheckCircle/></div> : ''}</label>
                                        <input autoComplete="true" type="text" name="f_name" value={this.state.user.first_name} onChange={ e => this.handlerChangeUser('first_name', e.target.value)} placeholder="First Name"/>
                                        <span className={ errors.err_first_name ? 'err err-on': 'err'}>{errors.err_first_name}</span>
                                    </div>
                                    <div className="l-name">
                                        <label htmlFor=""><AiOutlineUser/>{ user.last_name ? errors.err_last_name ? <div className="error-icon"><VscError/></div> : <div className="success-icon"><BiCheckCircle/></div> : ''}</label>
                                        <input autoComplete="true" type="text" name="l_name" value={this.state.user.last_name} onChange={ e => this.handlerChangeUser('last_name', e.target.value)} placeholder="Last Name"/>
                                        <span className={ errors.err_last_name ? 'err err-on': 'err'}>{errors.err_last_name}</span>
                                    </div>
                                    
                               
 

                                <div className="phone-box">
                                    <label htmlFor=""><AiOutlinePhone/>{ user.phone_number ? errors.err_phone_number ? <div className="error-icon"><VscError/></div> : <div className="success-icon"><BiCheckCircle/></div> : ''}</label>
                                    <input autoComplete="true" type="tel" name="Phone" value={this.state.user.phone_number} onChange={ e => this.handlerChangeUser('phone_number', e.target.value)} placeholder="Phone Number"/>
                                    <span className={ errors.err_phone_number ? 'err err-on': 'err'}>{errors.err_phone_number}</span>
                                </div>

                                <div className="email-box">
                                    <label htmlFor=""><GoMail/>{ user.email ? errors.err_email ? <div className="error-icon"><VscError/></div> : <div className="success-icon"><BiCheckCircle/></div> : ''}</label>
                                    <input autoComplete="true" type="email" name="email" value={this.state.user.email} onChange={ e => this.handlerChangeUser('email', e.target.value)} placeholder="Email Adress"/>
                                    <span className={ errors.err_email ? 'err err-on': 'err'}>{errors.err_email}</span>
                                </div>

                                <div className="password-box">
                                    <label htmlFor=""><RiLockPasswordLine/>{ user.password ? errors.err_password ? <div className="error-icon"><VscError/></div> : <div className="success-icon"><BiCheckCircle/></div> : ''}</label>
                                    <input autoComplete="true" type="password" name="password" value={this.state.user.password} onChange={ e => this.handlerChangeUser('password', e.target.value)} placeholder="Password"/>
                                    <span className={ errors.err_password ? 'err err-on': 'err'}>{errors.err_password}</span>
                                </div>
                                
                            </div>
                            <div className="submit-box">
                                <button type="button" onClick={this.doSubmit} disabled={ this.state.toSubmitMode ? false : true }>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signup;
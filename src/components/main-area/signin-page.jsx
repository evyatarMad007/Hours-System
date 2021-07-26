import React, { Component } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import userService from "../../utils/jwtUser";
import { Redirect } from "react-router-dom";

class Signin extends Component {
    state = { 
        user: { 
            password: "",
            email: "",
        },
        errors: {
            err_password: "",
            err_email: "",
        },
        isValid: {
            password: false,
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
        if(  isValid.password &&  isValid.email) {
           let {toSubmitMode} = this.state;
           toSubmitMode = true;
           this.setState({ toSubmitMode })
        }
        if( ! isValid.password || ! isValid.email) {
           let {toSubmitMode} = this.state;
           toSubmitMode = false;
           this.setState({ toSubmitMode })
        }

    }

    doSubmit = async () => {
        const userData =  {...this.state.user}; // deep copy
        
        try {
            await axios.post(`${apiUrl}/users/signin`, userData )
            .then( res => {
                localStorage.setItem('token', res.data.token);
                window.location = '/';
            })
   

        } 
        catch (err) {
            if( err.response && err.response.status === 400 ){
                let { errors } = this.state;
                errors.err_email = "Incorrect email and password"
                errors.err_password = "Incorrect email and password"
                this.setState({ errors })
            }
            if( err.response && err.response.status === 401 ){
                let { errors } = this.state;
                errors.err_email = "Incorrect email and password"
                errors.err_password = "Incorrect email and password"
                this.setState({ errors })
            }
        }
    }

    render() { 
        const { errors } = this.state;
        const { user } = this.state;

    if( userService.getCurrentUser() ) return <Redirect to="/"/> 

        return ( 
            <div className="signin">
                
                <div className="signin__content">
                    <div className="signin__content__form-box">
                        <div className="title-login">
                            <p>Sign In</p>
                        </div>
                        <form id="signin-form"  method="POST" autoComplete="off" noValidate>
                            <div className="inputs-area">
                            <div className="email-box">
                                <label htmlFor=""><GoMail/>{ user.email ? errors.err_email ? <div className="error-icon"><VscError/></div> : <div className="success-icon"><BiCheckCircle/></div> : ''}</label>
                                <input autoComplete="true" type="email" name="email" value={this.state.user.email} onChange={ e => this.handlerChangeUser('email', e.target.value)} placeholder="Email Adress"/>                                <span className={ errors.err_email ? 'err err-on': 'err'}>{errors.err_email}</span>
                            </div>
                            <div className="password-box">
                                <label htmlFor=""><RiLockPasswordLine/>{ user.password ? errors.err_password ? <div className="error-icon"><VscError/></div> : <div className="success-icon"><BiCheckCircle/></div> : ''}</label>
                                <input autoComplete="true" type="password" name="password" value={this.state.user.password} onChange={ e => this.handlerChangeUser('password', e.target.value)} placeholder="Password"/>
                                <span className={ errors.err_password ? 'err err-on': 'err'}>{errors.err_password}</span>
                            </div>
                            </div>
                            <div className="submit-box">
                                <button type="button" onClick={this.doSubmit} disabled={ this.state.toSubmitMode ? false : true }>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signin;
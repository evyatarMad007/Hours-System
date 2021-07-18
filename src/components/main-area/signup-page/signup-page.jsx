import React, { Component } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { AiOutlinePhone,AiOutlineUser } from "react-icons/ai";
class Signup extends Component {
    state = {  }



    render() { 
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
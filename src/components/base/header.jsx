import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { RiKeyFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
// import { FaWpforms } from 'react-icons/fa';
import userService from "../../utils/jwtUser";



class Header extends Component {
    state = { 
     
    }

    logout = () => {
        userService.logout();
        window.location = '/singin'
    }
    render() { 

        let fn = this.props.userData.firstName && this.props.userData.firstName.split('')[0];
        let ln = this.props.userData.lastName && this.props.userData.lastName.split('')[0];

        
        

        return ( 
            <header className="header">
                <div className="header__content">
                
                
                    <div className="header__content__left-side">
                        <NavLink className="navLink logo-navLink" to="/">
                            <div className="logo-box">
                            <span>Evyatar</span>
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                            </div></NavLink>
                    </div>


                    <div className="header__content__center"></div>
 
                    <div className="header__content__right-side">
                    { userService.getCurrentUser() 
                    ? <NavLink className="navLink profile-navLink" to="/profile">
                    
                    <span className="username"><i><FaUserCircle/></i> {! this.props.userData ? '' : `${this.props.userData.firstName}  ${this.props.userData.lastName}`}</span>
                    </NavLink>
                    : ''} 
                        { userService.getCurrentUser() 
                        ? <button className="logout" onClick={this.logout}>Logout </button> 
                        : <React.Fragment>
                            <NavLink className="navLink signin-navLink" to="/signin"><div className="signin-btn">Sign in <RiKeyFill/></div></NavLink>
                            <NavLink className="navLink signup-navLink" to="/signup"><div className="signup-btn">Sign up</div></NavLink>
                        </React.Fragment>
                        }
                        
                        
                    </div>
  
                    
                </div>
            </header>
         );
    }
}
 
export default Header;
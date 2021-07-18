import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { RiKeyFill } from 'react-icons/ri';
import { FaWpforms } from 'react-icons/fa';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="header">
                <div className="header__content">

                
                    <div className="header__content__left-side">
                        <NavLink className="navLink logo-navLink" to="/"><div className="logo-box">Intellecty</div></NavLink>
                    </div>


                    <div className="header__content__center"></div>

                    <div className="header__content__right-side">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU" alt="" />
                        </div>
                        <NavLink className="navLink signin-navLink" to="/signin"><div className="signin-btn">Sign in <RiKeyFill/></div></NavLink>
                        <NavLink className="navLink signup-navLink" to="/signup"><div className="signup-btn">Sign up <FaWpforms/></div></NavLink>
                        
                    </div>
  
                    
                </div>
            </header>
         );
    }
}
 
export default Header;
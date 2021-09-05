import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
class Navbar extends Component {
    
    
    state = { 
        openMode: false
    }

    navBarMode = () => {
        let { openMode } = this.state;
        openMode ? openMode = false : openMode = true;
        this.setState({ openMode });
    }
    
    render() { 

        let fn = this.props.userData.firstName && this.props.userData.firstName.split('')[0];
        let ln = this.props.userData.lastName && this.props.userData.lastName.split('')[0];

        const { openMode } = this.state;
        return ( 
            <nav className={ openMode ? 'navbar navbar--open-mode' : 'navbar'}>
                <div className={ openMode ? 'navbar__mode-btn mode-btn--to-close' : 'navbar__mode-btn' } onClick={this.navBarMode}><MdKeyboardArrowRight/></div>
                
                <div className="navbar__nav-controller">
                    <NavLink className="nav-bar-line" to="/hours-page">
                        <div className="icon"><AiOutlineFundProjectionScreen/></div>
                        <div className="text"><span>Hours system</span></div>
                    </NavLink>
                </div>

                <div className="profile-img">
                <NavLink className="navLink profile-navLink" to="/profile">
                        <div className="img">
                            {
                                this.props.userData.imgProfile 
                                ?  <img src={this.props.userData.imgProfile} alt="" /> 
                                : <span className="img-text">{ fn ? fn.toUpperCase() : ''}{ ln ? ln.toLowerCase() : ''}</span>
                            }
                        </div>
                </NavLink>
                    </div>
            </nav>
         );
    }
}
 
export default Navbar;
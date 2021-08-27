import React, { Component } from 'react';
import userService from "../../utils/jwtUser";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import PageHeader from '../common/page-header';
import {headersAuth} from '../../utils/constData';
import { FaUserAlt } from 'react-icons/fa';
import { GiPresent } from 'react-icons/gi';
import { CgGenderMale } from 'react-icons/cg';
import { RiUser6Fill, RiFacebookFill,RiLinkedinFill,RiGithubFill, RiToolsFill, RiMedalFill,RiUserSmileFill } from 'react-icons/ri';
import { MdLocationCity, MdPhone, MdEmail } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { GoNote } from 'react-icons/go';
import { BsFillStarFill } from 'react-icons/bs';

class Profile extends Component {
    state = { 
        error: null,
        isLoaded: false,
        userData: []
     }
     
    componentDidMount() {
        try {
            axios.get(`${apiUrl}/users/full-user-info`, headersAuth)
            .then( res => res)
            .then(
                 result => { this.setState({isLoaded: true,userData: result.data});},
                 error => {this.setState({isLoaded: true,error});}
            )
        }
        catch (err) {
            // write the code when u get some error status 
            // if( err.response && err.response.status === 400 ){}
        }

        
    }

    render() { 
        if( ! userService.getCurrentUser() ) return <Redirect to="/"/>
        const { error, isLoaded, userData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        } 
        else {
            return ( 
                <div className="profile">

                    <div className="profile__page-header" style={{ backgroundImage: 'url(https://www.ceres.org/sites/default/files/2019-10/nyc-skyline-banner.jpg)' }}>
                        <div className="img-profile-box" style={{ backgroundImage: 'url(https://evyatarmadari.co.il/static/media/profile.427dc728.jpg)' }}>
                        <button type="button" className="upload-img-btn">+
                        
                        </button>
                        </div>
                        <button type="button" className="upload-img-btn">+
                        </button>
                    </div>
                    <div className="profile__page-content">
                        <div className="profile-title">
                            <p className="full-name">Evyatar Madari</p>
                            <p className="proffession-name">Developer</p>
                        </div>
                        <div className="profile-details">
                            <div className="basic-info">
                                <ul>
                                    <li><div className="icon"><RiUser6Fill/></div><div className="text">{userData.firstName ? userData.firstName : <i>empty</i>}</div></li>
                                    <li><div className="icon"><RiUser6Fill/></div><div className="text">{userData.lastName ? userData.lastName  : <i>empty</i>}</div></li>
                                    <li><div className="icon"><GiPresent/></div><div className="text">{userData.age ? userData.age : <i>empty</i>}</div></li>
                                    <li><div className="icon"><CgGenderMale/></div><div className="text">{userData.gender ? userData.gender : <i>empty</i>}</div></li>
                                    <li><div className="icon"><MdLocationCity/></div><div className="text">{userData.cityAdress ? userData.cityAdress : <i>empty</i>}</div></li>
                                </ul>
                            </div>
                            <div className="business-info">
                            <ul>
                            <li><div className="icon"><GoNote/></div><div className="text">{userData.someData ? userData.someData :  <i>empty</i>}</div></li>
                                    <li><div className="icon"><RiToolsFill/></div><div className="text">{userData.someData ? userData.someData :  <i>empty</i>}</div></li>
                                    <li><div className="icon"><MdPhone/></div><div className="text">{userData.phoneNumber ? userData.phoneNumber :  <i>empty</i>}</div></li>
                                    <li><div className="icon"><HiOutlineMail/></div><div className="text">{userData.email ? userData.email :  <i>empty</i>}</div></li>
                                    <li><div className="icon"><RiFacebookFill/></div><div className="text">{userData.someData ? userData.someData :  <i>empty</i>}</div></li>
                                    <li><div className="icon"><RiLinkedinFill/></div><div className="text">{userData.someData ? userData.someData :  <i>empty</i>}</div></li>
                                    <li><div className="icon"><RiGithubFill/></div><div className="text">{userData.someData ? userData.someData :  <i>empty</i>}</div></li>
                                </ul>
                            </div>
                            <div className="explanation-info">
                            <ul>
                                <li className="users-type-title">Types Of Accounts</li>
                                <li><div className="icon basic"><RiUserSmileFill/></div><div className="text"><i>Basic - under 20 projects</i></div></li>
                                    <li><div className="icon star"><BsFillStarFill/></div><div className="text"><i>Advance - Over 10 projects</i></div></li>
                                    <li><div className="icon premium"><RiMedalFill/></div><div className="text"><i>Premium - full Tools</i></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
             );
        }

       
    }
}
 
export default Profile;
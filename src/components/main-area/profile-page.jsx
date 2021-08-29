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
import { IoIosRemove,IoIosAdd } from 'react-icons/io';
import { BsFillStarFill } from 'react-icons/bs';
import ClipLoader from "react-spinners/ClipLoader";



class Profile extends Component {
    state = { 
        error: null,
        isLoaded: false,
        userData: [],
        editBtnMode: false,
        inputChange: false,
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

    onInputChange = (e) => {

    }
    editData = () => {
        let { editBtnMode } = this.state;
        editBtnMode ? editBtnMode = false : editBtnMode = true;
        this.setState({ editBtnMode });
    }


    render() { 

        const { inputChange,editBtnMode } = this.state;

        if( ! userService.getCurrentUser() ) return <Redirect to="/"/>
        const { error, isLoaded, userData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div className="loading-box"><ClipLoader/></div>;
        } 
        else {
            return ( 
                <div className="profile">

                    <div className="profile__page-header">
                    
                    
                        <div className="img-background-box"  style={{ backgroundImage: 'url(https://www.ceres.org/sites/default/files/2019-10/nyc-skyline-banner.jpg)' }}>
                            <button type="button" className="upload-img-btn"><IoIosAdd/></button>
                            <button type="button" className="remove-img-btn"><IoIosRemove/></button>
                        </div>

                        <div className="img-profile-box" style={{ backgroundImage: 'url(https://evyatarmadari.co.il/static/media/profile.427dc728.jpg)' }}>
                            <button type="button" className="upload-img-btn"><IoIosAdd/></button>
                            <button type="button" className="remove-img-btn"><IoIosRemove/></button>
                        </div>
                       
                    </div>
                    <div className="profile__page-content">
                        <div className="profile-title">
                            <p className="full-name">Evyatar Madari</p>
                            <p className="proffession-name">Developer</p>
                        </div>
                        <div className="profile-details">
                            <div className="basic-info">
                                <ul>
                                    <li><div className="icon"><RiUser6Fill/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.firstName ? userData.firstName : ''}/> : userData.firstName ? <span>{userData.firstName}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiUser6Fill/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.lastName ? userData.lastName : ''}/> : userData.lastName ? <span>{userData.lastName}</span>  :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><GiPresent/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.age ? userData.age : ''}/> : userData.age ? <span>{userData.age}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><CgGenderMale/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.gender ? userData.gender : ''}/> : userData.gender ?<span>{userData.gender}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><MdLocationCity/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.cityAdress ? userData.cityAdress : ''}/> : userData.cityAdress ? <span>{userData.cityAdress}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><MdPhone/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.phoneNumber ? userData.phoneNumber : ''}/> : userData.phoneNumber ? <span>{userData.phoneNumber}</span> : <span><i>empty</i></span> }</div></li>

                                </ul>
                            </div>
                            <div className="business-info">
                            <ul>
                                    <li><div className="icon"><GoNote/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.someData ? userData.someData : ''}/> : userData.someData ? <span>{userData.someData}</span> : <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiToolsFill/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.someData ? userData.someData : ''}/> : userData.someData ?<span>{userData.someData}</span> :   <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><HiOutlineMail/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.email ? userData.email : ''}/> : userData.email ?<span>{userData.email}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiFacebookFill/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.someData ? userData.someData : ''}/> : userData.someData ? <span>{userData.someData}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiLinkedinFill/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.someData ? userData.someData : ''}/> : userData.someData ? <span>{userData.someData}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiGithubFill/></div><div className="text">{editBtnMode ? <input type="text" placeholder={userData.someData ? userData.someData : ''}/> : userData.someData ? <span>{userData.someData}</span> :  <span><i>empty</i></span> }</div></li>
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
                    <button className={inputChange ? 'save-btn save-btn--input-change' : 'save-btn'}>Save Data</button>

                    <button onClick={this.editData} className={editBtnMode ? 'edit-btn edit-btn--edit-hidden' : 'edit-btn'}>Edit</button>
                    <button onClick={this.editData} className={editBtnMode ? 'cancel-edit-btn' : 'cancel-edit-btn cancel-edit-btn--hidden'}>Cancel Edit</button>
                    </div>
                </div>
             );
        }

       
    }
}
 
export default Profile;
import React, { Component } from 'react';
import userService from "../../utils/jwtUser";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import PageHeader from '../common/page-header';
import {headersAuth} from '../../utils/constData';
import { GiPresent } from 'react-icons/gi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { RiUser6Fill, RiFacebookFill,RiLinkedinFill,RiGithubFill, RiToolsFill, RiMedalFill,RiUserSmileFill,RiInstagramLine } from 'react-icons/ri';
import { MdLocationCity, MdPhone, MdEmail } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { GoNote } from 'react-icons/go';
import { IoIosRemove,IoIosAdd } from 'react-icons/io';
import { BsFillStarFill } from 'react-icons/bs';
import ClipLoader from "react-spinners/ClipLoader";
// import Button from '@material-ui/core/Button';


class Profile extends Component {
    state = { 
        error: null,
        isLoaded: false,
        userData: [],
        editBtnMode: false,
        inputChange: false,
        user: { 
            firstName: "",
            lastName: "",
            age: "",
            cityAdress: "",
            phoneNumber: "",
            email: "",
            profession: "",
            facebook: "",
            linkedIn: "",
            instagram: "",
            github: "",
            website: "",
            aboutMe: "",
        },
        errors: {
            err_firstName: "",
            err_lastName: "",
            err_age: "",
            err_cityAdress: "",
            err_phoneNumber: "",
            err_email: "",
            err_profession: "",
            err_facebook: "",
            err_linkedIn: "",
            err_instagram: "",
            err_github: "",
            err_website: "",
            err_aboutMe: "",
        },
        isValid: {
            firstName: true,
            lastName: true,
            age: true,
            cityAdress: true,
            phoneNumber: true,
            email: true,
            profession: true,
            facebook: true,
            linkedIn: true,
            instagram: true,
            github: true,
            website: true,
            aboutMe: true,
        },
        toSubmitMode: false
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

    editData = () => {
        let { editBtnMode } = this.state;
        editBtnMode ? editBtnMode = false : editBtnMode = true;
        this.setState({ editBtnMode });
    }

    // changePassword = () => {
    //     if( user.password ) {
    //         const regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    //         if( ! regPassword.test(user.password) ) {
    //             if( user.password.length > 20 ) {
    //                 errors.err_password = 'Password Minimum eight characters, at least one letter and one numbeThe password must contain a minimum of 8 characters, letters and numbers';
    //                 isValid.password = false;
    //             }
    //             errors.err_password = 'The password must contain a minimum of 8 characters, letters and numbers';
    //             isValid.password = false;
    //         } 
    //         if( regPassword.test(user.password) && user.password.length >= 8 && user.password.length < 20) {
    //             errors.err_password = null;
    //             isValid.password = true;
    //         }
    //     }
        // if(  isValid.password &&  isValid.email) {
        //     let {toSubmitMode} = this.state;
        //     toSubmitMode = true;
        //     this.setState({ toSubmitMode })
        // }
        // if( ! isValid.password || ! isValid.email) {
        //     let {toSubmitMode} = this.state;
        //     toSubmitMode = false;
        //     this.setState({ toSubmitMode })
        // }
    // }

    handlerUpdateProfile = (inpName, inpValue) => {
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
        if( user.firstName ) {
            if( user.firstName.length < 2 ) {
                errors.err_firstName = 'First name must be at least 2 characters long';
                isValid.firstName = false;
            } 
            if( user.firstName.length >= 2 ) {
                errors.err_firstName = null;
                isValid.firstName = true;
            }
        }
        if( user.lastName ) {
            if( user.lastName.length < 2 ) {
                errors.err_lastName = 'Invalid Last name ';
                isValid.lastName = false;
            } 
            if( user.lastName.length >= 2 ) {
                errors.err_lastName = null;
                isValid.lastName = true;
            }
        }
        if( user.phoneNumber ) {
            const regIsraeliPhone = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;
            if( ! regIsraeliPhone.test(user.phoneNumber) ) {
                errors.err_phoneNumber = 'Invalid phone number';
                isValid.phoneNumber = false;
            } 
            if( regIsraeliPhone.test(user.phoneNumber) ) {
                errors.err_phoneNumber = null;
                isValid.phoneNumber = true;
            }
        }
        if( user.cityAdress ) {
            if( user.cityAdress.length < 2 ) {
                errors.err_cityAdress = 'Invalid City Adress';
                isValid.cityAdress = false;
            } 
            if( user.cityAdress.length >= 2 ) {
                errors.err_cityAdress = null;
                isValid.cityAdress = true;
            }
        }
        if( user.profession ) {
            if( user.profession.length < 2 ) {
                errors.err_profession = 'Invalid Profession';
                isValid.profession = false;
            } 
            if( user.profession.length >= 2 ) {
                errors.err_profession = null;
                isValid.profession = true;
            }
        }
        if( user.facebook ) {
            const regUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if( ! regUrl.test(user.facebook) ) {
                errors.err_facebook = "Invalid facebook URL";
                isValid.facebook = false;
            } 
            if( regUrl.test(user.facebook) ) {
                errors.err_facebook = null;
                isValid.facebook = true;
            }
        }
        if( user.linkedIn ) {
            const regUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if( ! regUrl.test(user.linkedIn) ) {
                errors.err_linkedIn = "Invalid linkedIn URL";
                isValid.linkedIn = false;
            } 
            if( regUrl.test(user.linkedIn) ) {
                errors.err_linkedIn = null;
                isValid.linkedIn = true;
            }
        }
        if( user.instagram ) {
            const regUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if( ! regUrl.test(user.instagram) ) {
                errors.err_instagram = "Invalid instagram URL";
                isValid.instagram = false;
            } 
            if( regUrl.test(user.instagram) ) {
                errors.err_instagram = null;
                isValid.instagram = true;
            }
        }
        if( user.github ) {
            const regUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if( ! regUrl.test(user.github) ) {
                errors.err_github = "Invalid github URL";
                isValid.github = false;
            } 
            if( regUrl.test(user.github) ) {
                errors.err_github = null;
                isValid.github = true;
            }
        }
        if( user.website ) {
            const regUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
            if( ! regUrl.test(user.website) ) {
                errors.err_website = "Invalid website URL";
                isValid.website = false;
            } 
            if( regUrl.test(user.website) ) {
                errors.err_website = null;
                isValid.website = true;
            }
        }
        if( user.aboutMe ) {
            if( user.aboutMe.length > 5000 ) {
                errors.err_aboutMe = 'Field on AboutMe must be a max 5,000 characters';
                isValid.aboutMe = false;
            } 
            if( user.aboutMe.length <= 5000 ) {
                errors.err_aboutMe = null;
                isValid.aboutMe = true;
            }
        }

        if(  isValid.email && isValid.firstName && isValid.lastName && isValid.phoneNumber && isValid.cityAdress && isValid.profession && isValid.facebook && isValid.linkedIn && isValid.instagram && isValid.github && isValid.website) {
           let {toSubmitMode} = this.state;
           toSubmitMode = true;
           this.setState({ toSubmitMode })
        }
        if( ! isValid.email || ! isValid.firstName || ! isValid.lastName || ! isValid.phoneNumber || ! isValid.cityAdress || ! isValid.profession || ! isValid.facebook || ! isValid.linkedIn || ! isValid.instagram || ! isValid.github || ! isValid.website) {
           let {toSubmitMode} = this.state;
           toSubmitMode = false;
           this.setState({ toSubmitMode })
        }

    }

    // onInputChange = () => {
    //     // alert('work');
    // }


    render() { 

        const { inputChange,editBtnMode,toSubmitMode } = this.state;

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
                    {/* <div className="test-file-inp">
                                        <Button/>
                    </div> */}
                    <div className="profile__page-content">
                        <div className="profile-title">
                            <p className="full-name">Evyatar Madari</p>
                            <p className="proffession-name">Developer</p>
                        </div>
                        <div className="explanation">
                        <ul>
                            <li className="users-type-title">Types Of Accounts</li>
                            <li><div className="icon basic"><RiUserSmileFill/></div><div className="text"><i>Basic - under 20 projects</i></div></li>
                                <li><div className="icon star"><BsFillStarFill/></div><div className="text"><i>Advance - Over 10 projects</i></div></li>
                                <li><div className="icon premium"><RiMedalFill/></div><div className="text"><i>Premium - full Tools</i></div></li>
                            </ul>
                        </div>

                        {/* <form action="" onSubmit={this.onInputChange}> */}
                        {/* <form action=""> */}
                        <div className="profile-details">
                            <div className="basic-info">
                                <ul>
                                    <li><div className="icon"><RiUser6Fill/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('firstName', e.target.value)} placeholder={userData.firstName ? userData.firstName : ''}/> : userData.firstName ? <span>{userData.firstName}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiUser6Fill/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('lastName', e.target.value)} placeholder={userData.lastName ? userData.lastName : ''}/> : userData.lastName ? <span>{userData.lastName}</span>  :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><GiPresent/></div><div className="text">{editBtnMode ? <input type="date" onChange={ e => this.handlerUpdateProfile('age', e.target.value)} placeholder={userData.age ? userData.age : ''}/> : userData.age ? <span>{userData.age}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><MdLocationCity/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('cityAdress', e.target.value)} placeholder={userData.cityAdress ? userData.cityAdress : ''}/> : userData.cityAdress ? <span>{userData.cityAdress}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><MdPhone/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('phoneNumber', e.target.value)} placeholder={userData.phoneNumber ? userData.phoneNumber : ''}/> : userData.phoneNumber ? <span>{userData.phoneNumber}</span> : <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><HiOutlineMail/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('email', e.target.value)} placeholder={userData.email ? userData.email : ''}/> : userData.email ?<span>{userData.email}</span> :  <span><i>empty</i></span> }</div></li>
                                </ul>
                            </div>
                            <div className="business-info">
                            <ul>
                                    <li><div className="icon"><RiToolsFill/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('profession', e.target.value)} placeholder={userData.profession ? userData.profession : ''}/> : userData.profession ?<span>{userData.profession}</span> :   <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiFacebookFill/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('facebook', e.target.value)} placeholder={userData.facebook ? userData.facebook : ''}/> : userData.facebook ? <span>{userData.facebook}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiLinkedinFill/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('linkedIn', e.target.value)} placeholder={userData.LinkedIn ? userData.LinkedIn : ''}/> : userData.LinkedIn ? <span>{userData.LinkedIn}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiInstagramLine/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('instagram', e.target.value)} placeholder={userData.instagram ? userData.instagram : ''}/> : userData.instagram ? <span>{userData.instagram}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><RiGithubFill/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('github', e.target.value)} placeholder={userData.github ? userData.github : ''}/> : userData.github ? <span>{userData.github}</span> :  <span><i>empty</i></span> }</div></li>
                                    <li><div className="icon"><AiOutlineGlobal/></div><div className="text">{editBtnMode ? <input type="text" onChange={ e => this.handlerUpdateProfile('website', e.target.value)} placeholder={userData.website ? userData.website : ''}/> : userData.website ? <span>{userData.website}</span> :  <span><i>empty</i></span> }</div></li>
                                </ul>
                            </div>
                            <div className="description-info">
                            <ul>
                                    <li><div className="icon"><GoNote/></div><div className="text">{editBtnMode ? <textarea type="text" onChange={ e => this.handlerUpdateProfile('aboutMe', e.target.value)} placeholder={userData.aboutMe ? userData.aboutMe : ''}/> : userData.aboutMe ? <span>{userData.aboutMe}</span> : <span><i>empty</i></span> }</div></li>
                            </ul>
                            </div>
                        </div>
                        <div className="buttons-area">
                        <button onClick={this.editData} className={editBtnMode ? 'edit-btn edit-btn--edit-hidden' : 'edit-btn'}>Edit</button>
                        <button onClick={this.editData} className={editBtnMode ? 'cancel-edit-btn' : 'cancel-edit-btn cancel-edit-btn--hidden'}>Cancel</button>
                        
                        { editBtnMode && <button className='save-btn save-btn--input-change' disabled={toSubmitMode ? false : true }>Save Data</button> }

                        </div>
                        {/* </form> */}

                    </div>
                
                </div>
             );
        }

       
    }
}
 
export default Profile;
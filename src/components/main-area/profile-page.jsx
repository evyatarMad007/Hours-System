import React, { Component } from 'react';
import userService from "../../utils/jwtUser";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import PageHeader from '../common/page-header';
import {headersAuth} from '../../utils/constData';

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
                    </div>

                    <div className="profile__page-content">
                        <div className="profile-title">
                            <p className="full-name">Evyatar Madari</p>
                            <p className="proffession-name">Developer</p>
                        </div>


                        <div className="profile-details">
                            {
                            <ul>
                                <li>First Name: {userData.firstName}</li>
                                <li>Last Name: {userData.lastName}</li>
                                <li>Age: {userData.age}</li>
                                <li>Gender: {userData.gender}</li>
                                <li>City Adress: {userData.cityAdress}</li>
                                <li>Email: {userData.email}</li>
                                <li>Phone Number: {userData.phoneNumber}</li>
                            </ul>
                            }
                        </div>
                    </div>
                </div>
             );
        }

       
    }
}
 
export default Profile;
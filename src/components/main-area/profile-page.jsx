import React, { Component } from 'react';
import userService from "../../utils/jwtUser";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import pageHeader from '../common/page-header';

class Profile extends Component {
    state = { 
        error: null,
        isLoaded: false,
        userData: []
     }
     
    componentDidMount() {
        const headersAuth = {headers: {'Authorization': `token ${localStorage.getItem('token')}`}}
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

                    <div className="profile__title">
                        <pageHeader>Profile Page</pageHeader>
                    </div>
                    <div className="profile__content">
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
             );
        }

       
    }
}
 
export default Profile;
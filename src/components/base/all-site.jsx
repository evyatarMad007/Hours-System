import React, { Component } from 'react';
import Header from './header';
import Navbar from './nav-bar';
import MainArea from '../main-area/main-area';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userService from "../../utils/jwtUser";
import { apiUrl } from '../../config/config.json';
import axios from 'axios';
import {headersAuth} from '../../utils/constData';
import  Favorites  from '../global/favorites';

class AllSite extends Component {
    
    state = { 
        user: false
     }
    componentDidMount() {
        if( userService.getCurrentUser() ){
            try {
                axios.get(`${apiUrl}/users/full-user-info`, headersAuth)
                .then( res => {
                    let { user } = this.state;
                    user = res.data
                    this.setState({ user })
                })
                .catch( err => {
                    if( err ){
                        userService.logout();
                    }
                }) 
            } catch (err) {
                // write the code when u get some error status 
                // if( err.response && err.response.status === 400 ){}
            }
        }
    }



    render() { 

        // console.log(this.state);
        
        return ( 
            <div className="all-site">
                <BrowserRouter>
                <ToastContainer/>
                <Header userData={this.state.user}/> 
                    { userService.getCurrentUser() 
                        ? <Navbar userData={this.state.user}/> 
                        : ''
                    }
                    <MainArea userData={this.state.user}/>
                    <Favorites/>
                </BrowserRouter> 
            </div>
         );
    }
}
 
export default AllSite;



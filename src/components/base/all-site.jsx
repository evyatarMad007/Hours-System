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
import {headersAuth} from '../../../utils/constData';
class AllSite extends Component {
    
    state = { 
        user: false
     }
    
    componentDidMount() {
        try {
            axios.get(`${apiUrl}/users/full-user-info`, headersAuth)
            .then( res => {
                let { user } = this.state;
                user = res.data
                this.setState({ user })
            })
        }
        catch (err) {
            // write the code when u get some error status 
            // if( err.response && err.response.status === 400 ){}
        }
    }


    render() { 

        return ( 
            <div className="all-site">
                <BrowserRouter>
                <ToastContainer/>
                <Header userData={this.state.user}/> 
                    { userService.getCurrentUser() 
                        ? <Navbar/> 
                        : ''
                    }
                    <MainArea userData={this.state.user}/> 
                </BrowserRouter> 
            </div>
         );
    }
}
 
export default AllSite;
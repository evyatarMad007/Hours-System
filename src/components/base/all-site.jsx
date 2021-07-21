import React, { Component } from 'react';
import Header from './header';
import Navbar from './nav-bar';
import MainArea from '../main-area/main-area';
import { BrowserRouter } from "react-router-dom";
class AllSite extends Component {
    
    state = {  }
    
    render() { 
        return ( 
            <div className="all-site">
                <BrowserRouter>
                    <Header/> 
                    <Navbar/> 
                    <MainArea/> 
                </BrowserRouter>
            </div>
         );
    }
}
 
export default AllSite;
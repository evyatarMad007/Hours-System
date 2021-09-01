import React, { Component } from 'react';
import {BsStarFill} from 'react-icons/bs';
import {HiOutlineX} from 'react-icons/hi';
import { Redirect } from "react-router-dom";
import userService from "../../utils/jwtUser";


class Favorites  extends Component {
    state = { 
        favoritesIsActive: false
     }

     showfavoritesBox = () => {
         let { favoritesIsActive } = this.state;
         favoritesIsActive ? favoritesIsActive = false : favoritesIsActive = true;
         this.setState({ favoritesIsActive });
     }
    
    render() { 
        const { favoritesIsActive } = this.state;

        if( ! userService.getCurrentUser() ) return <Redirect to="/"/>

        return ( 
            <div className="favorites">
                <div className={ favoritesIsActive ? 'favorites__favorites-box' : 'favorites__favorites-box favorites__favorites-box--hidden' }></div>

                    <div onClick={this.showfavoritesBox} className={ favoritesIsActive ? 'favorites__favorites-icon favorites__favorites-icon--box-active' : 'favorites__favorites-icon' }>
                        { favoritesIsActive ? <i className="close"><HiOutlineX/></i> : <i className="open"><BsStarFill/></i>}
                    </div>
                    
            </div>
         );
    }
}
 
export default Favorites;
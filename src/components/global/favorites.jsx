import React, { Component } from 'react';
import {BsStarFill} from 'react-icons/bs';


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

        return ( 
            <div className="favorites">
                {favoritesIsActive && <div className="favorites__favorites-box"></div>}
                    <div onClick={this.showfavoritesBox} className="favorites__favorites-icon"><i><BsStarFill/></i></div>
            </div>
         );
    }
}
 
export default Favorites;
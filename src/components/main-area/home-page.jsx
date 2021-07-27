import React, { Component } from 'react';
import pageHeader from '../common/page-header';


class Home extends Component {
    
    state = {  }
    
    render() { 
        return ( 
            <div className="home">
                <pageHeader>Home Page</pageHeader>
                <h2 className="home__page-subtitle">home page h2</h2>
                <p className="home__page-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem libero ab laboriosam harum illo.</p>
            </div>
         );
    }
}
 
export default Home;
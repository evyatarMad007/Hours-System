import React, { Component } from 'react';
import Home from './home-page';
import HoursPage from './hours-page/hours_page';
import Signin from './signin-page';
import Signup from './signup-page';
import Profile from './profile-page';

// react-router-dom -> in this component
import { Switch,Route } from "react-router-dom";

class MainArea extends Component {
    state = {  }

    render() { 
        return ( 
            <main className="main-area">
                <div className="main-area-container">
                    <div className="main-area-content">
                   
                    
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/signin"  component={Signin}/>
                        <Route path="/signup"  component={Signup}/>
                        <Route path="/profile"  component={Profile}/>
                        <Route path="/hours-page"  component={HoursPage}/>
                    </Switch>
                    
                    </div>
                </div>
                
            </main>
         );
    }

}
 
export default MainArea;
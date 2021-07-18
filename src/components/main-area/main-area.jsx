import React, { Component } from 'react';
import Home from './home-page/home-page';
import HoursPage from './hours-page/hours_page';
import Signin from './signin-page/signin-page';
import Signup from './signup-page/signup-page';

// react-router-dom -> in this component
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";

class MainArea extends Component {
    state = {  }

    render() { 
        return ( 
            <main className="main-area">
                <div className="main-area-container">
                    <div className="main-area-content">
                    
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/signin" exact component={Signin}/>
                        <Route path="/signup" exact component={Signup}/>
                        <Route path="/hours-page" exact component={HoursPage}/>
                    </Switch>
                    </div>
                 
                </div>
                
            </main>
         );
    }

}
 
export default MainArea;
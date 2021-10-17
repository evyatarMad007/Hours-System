import React, { Component } from 'react';
import PageHeader from '../common/page-header';


class Home extends Component {
    
    state = {  }
    
    render() { 
        return ( 
            <div className="home">
                <PageHeader>Hour counting system</PageHeader>
                <h2 className="home__page-subtitle">Manage your projects easily</h2>
                <p className="home__page-description">
                A free system that allows anyone who wants to count work hours to synchronize with their customer.
                <br />
                <br />
                This system is mainly suitable for freelancers who provide customer service independently.
                <br />
                <br />
                For any questions and answers below we will open an option to leave optimization tips and suggestions.
                <br /><br />
                We wish you a pleasant use of our app.
                </p>
            </div>
         );
    }
}
 
export default Home;
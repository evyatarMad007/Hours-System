import './components/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HoursPage from './components/hours-page/hours_page';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <header>
        <p></p>
      </header>
      <div className="App" style={{direction: "rtl"}}>
      <HoursPage/>
      </div>

    </React.Fragment>
  );
}

export default App;

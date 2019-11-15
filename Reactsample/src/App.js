import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Bookings from './components/Bookings';
// import Login from './components/Login';

// import Sample from './components/Nav';
import './App.css';
function App(){
    return (
      <Router>
        <div>
          <Switch>
            <Route  path="/" exact component={Home}/>
            {/* <Route  path="Bookings" component={Bookings}/> */}
            {/* <Route path="Booking" Component={Booking}/> */}
             <Bookings/>
             </Switch> 
        </div>
      </Router>
    );
  }


export default App;

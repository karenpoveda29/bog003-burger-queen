import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegisterForm } from './views/RegisterForm';
import { Login } from './views/Login';
import { HomeChef } from './views/HomeChef'
import { HomeWaiter } from './views/HomeWaiter';
import { ProfileSelection } from './views/ProfileSelection';

export const App= () => {

  return (
    
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path= "/">
            <Login />
          </Route>

          <Route path = "/login">
            <Login />
          </Route>
          
          <Route path = "/register">
            <RegisterForm />
          </Route>

          <Route path = "/profile-selection">
            <ProfileSelection />
          </Route>
          
          <Route path = "/home-waiter">
            <HomeWaiter />
          </Route>

          <Route path = "/home-chef">
            <HomeChef />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

//export default App;

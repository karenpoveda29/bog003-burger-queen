import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from './views/Login';
import { RegisterForm } from './views/RegisterForm';
import { ProfileSelection } from './views/ProfileSelection';
import { Waiter } from './views/Waiter';
import { HomeChef } from './views/HomeChef'

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
          
          <Route path = "/waiter">
            <Waiter />
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

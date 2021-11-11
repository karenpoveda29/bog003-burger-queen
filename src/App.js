import React from 'react'
import './App.css';
//import {fbConfig} from './fb'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegisterForm } from './components/RegisterForm';
import { Login } from './components/Login';
import { Home } from './components/Home'



export const App= () => {

  //const [user, setUser] = React.useState(null)
  //console.log(user);
  //console.log(setUser)
  /*setUser = {setUser}*/

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
        
        <Route path = "/home">
         <Home />
        </Route>

      </Switch>

    </Router>
    </div>
  );
}

//export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path= "/" >
         <Login />
        </Route>

        <Route path = "/login">
         <Login />
        </Route>
        
        <Route path = "/register">
         <Register />
        </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;

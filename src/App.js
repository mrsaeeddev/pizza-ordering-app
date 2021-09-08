import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Main from './components/Main/Main';
import './App.css';
import OrderPizza from './components/OrderPizza/OrderPizza';

function App() {
  const history = useHistory();

 
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/order">
            <OrderPizza />
          </Route>
          <Route path="/">
            <Main />
          </Route>          
        </Switch>
    </Router>
  )
}

export default App;

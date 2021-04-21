import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import './App.css'; 
import HomePage from './pages' 
import SigninPage from './pages/signin' 


function App() {
  return (
    <Router>
      <Switch> 
        <Route path="/" component={HomePage} exact />
        <Route path="/signin" component={SigninPage} exact />
 
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import '../App.css';
import { Route } from 'react-router-dom'
import Register from './Register'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import Login from './Login'

class App extends React.Component {

  render() {  
    return (
      <div className="App">
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route path='/add' render={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </div>
    );
  }
}

export default App

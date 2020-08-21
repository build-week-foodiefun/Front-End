import React from 'react';
import '../App.css';
import '../Table.css'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Register from './Register'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import Login from './Login'

class App extends React.Component {

  render() {
    console.log(window.location)
    return (
      <div className="App">
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute exact path='/list' component={Dashboard} />
        <PrivateRoute exact path='/add' component={Dashboard} />
        <PrivateRoute path={`/meal/:id/`} component={Dashboard} />
        {window.location.pathname === '/login' || window.location.pathname === '/register' ? <><h1 className='foodieFun'>Welcome to Foodie-Fun!</h1><h3>Please login or create a new account.</h3></> : null}
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData,
})

export default withRouter(connect(mapStateToProps)(App))

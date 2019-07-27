import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
// import { Route } from 'react-router-dom'
import { getAccount } from '../actions'
import NavBar from './NavBar'

class App extends React.Component {

  componentDidMount() {
    this.props.getAccount()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getAccount,
}

export default connect(null, mapDispatchToProps)(App);
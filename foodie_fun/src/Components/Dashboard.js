import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { getAccount } from '../actions'

class App extends React.Component {

  componentDidMount() {
    this.props.getAccount()
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapDispatchToProps = {
  getAccount,
}

export default connect(null, mapDispatchToProps)(App);
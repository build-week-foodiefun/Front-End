import React from 'react';
import '../App.css';
import { Route } from 'react-router-dom'
import Register from './Register'
import Dashboard from './Dashboard'

class App extends React.Component {

  render() {  
    return (
      <div className="App">
        <Route exact path='/register' component={Register} />
      </div>
    );
  }
}

export default App

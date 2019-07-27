import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { getAccount } from '../actions'
import NavBar from './NavBar'
import AddMeal from './AddMeal'
import MealList from './MealList'

class App extends React.Component {

  componentDidMount() {
    this.props.getAccount()
  }

  render() {

    return (
       
      <div className="App">
        <nav>
          <NavBar />
        </nav>

        <Route exact path='/' render={props => <MealList {...props} />} />
        <Route path='/add' render={(props) => <AddMeal {...props} />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData
})

const mapDispatchToProps = {
  getAccount,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
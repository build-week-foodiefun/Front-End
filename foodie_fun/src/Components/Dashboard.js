import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { getAccount, getMeal } from '../actions'
import NavBar from './NavBar'
import AddMeal from './AddMeal'
import MealList from './MealList'
import Meal from './Meal'
import Home from './Home'

class App extends React.Component {
  
  componentDidMount() {
    this.props.getAccount()
  }

  render() {
    console.log(this.props.mealChange)
    
    return (
      
      <div className="Dashboard">
        <nav>
          <NavBar />
        </nav>
      

        { this.props.isLoading ? <p className='loading'>Loading your meals...</p> : 
          this.props.userData === undefined ? window.location.reload() :
          <div className='appRoutes'>
            <Route exact path='/' render={props => <Home {...props} />} />
            
            <Route exact path='/list' render={props => <MealList {...props} />} />
            <Route path='/add' render={(props) => <AddMeal {...props} />} />
            <Route path='/meal/:id' render={(props) => <Meal {...props} />} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.userData,
  isLoading: state.isLoading,
  mealID: state.mealID,
  mealChange: state.mealChange,
})

const mapDispatchToProps = {
  getAccount,
  getMeal,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
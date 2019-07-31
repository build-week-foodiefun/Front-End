import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { getAccount, getMeal } from '../actions'
import NavBar from './NavBar'
import AddMeal from './AddMeal'
import MealList from './MealList'
import Meal from './Meal'

class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     mealID: this.props.mealID,
  //   }
  // }

  componentDidMount() {
    this.props.getMeal(this.props.mealID)
    this.props.getAccount()
  }
  
  render() {

    return (
       
      <div className="App">
        <nav>
          <NavBar />
        </nav>
      

        { this.props.isLoading ? <p className='loading'>Loading your meals...</p> : 
          this.props.userData === undefined ? window.location.reload() :
          <div className='appRoutes'>
            <section className='listRoute'>
              <Route exact path='/' render={props => <MealList {...props} />} />
            </section>
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
})

const mapDispatchToProps = {
  getAccount,
  getMeal,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { getAccount } from '../actions'
import NavBar from './NavBar'
import AddMeal from './AddMeal'
import MealList from './MealList'
import Meal from './Meal'

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
      

        { this.props.isLoading ? <p className='loading'>Loading your meals...</p> : 
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
})

const mapDispatchToProps = {
  getAccount,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
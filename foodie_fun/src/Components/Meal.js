import React from 'react'
import { Link, Route } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import UpdateMeal from './UpdateMeal'
import { getMeal } from '../actions'


class Meal extends React.Component {
  constructor(props) {
    super(props)
    const meal = this.props.userData.find(meal => `${meal.id}` === this.props.match.params.id)
    componentWillUpdate(nextProps, nextState) {
      
      this.props.getMeal(meal.id)
    }
    
    const {
      restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited,
      id
    } = this.props.userMeal
    this.state = {
      restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited,
      id
    }
  }
  
  render() {
    const { 
      restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited,
      id
    } = this.state
    console.log(this.props.userMeal)
    return (
      <div className='mealCard mealCardTwo'>
        {this.props.error && <p className='error'>{this.props.error}</p>}
        {/* <h2 className='restName'>{restaurant_name}</h2>
        <p className='restType'><span className='intro'>Type of restaurant:</span> {restaurant_type}</p>
        <img className='itemImg' src={`${item_photo}`} alt='A Meal' />
        <h3 className='itemName'>Meal: {item_name}</h3>
        <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /> <br />
        <p className='comment'><span className='intro'>Comments: </span>* {item_comment}</p>
        <p className='waitTime'><span className='intro'>Time waited for meal: </span>{wait_time}</p>
        <p className='visitDate'><span className='intro'>Ordered on: </span>{date_visited}</p> */}
        <section className='mealCardTop'>
          <h2 className='restName'>{restaurant_name}</h2>
        </section>
        <section className='mealCardBottom'>
          <div className='mealCardImg'>
            <img className='itemImg' src={`${item_photo}`} alt='A Meal' />
            <h3 className='itemName'>Meal: {item_name}</h3>
            <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /> <br />
          </div>
          <div className='mealCardBody'>
            <p className='restType'><span className='intro'>Type of restaurant:</span> {restaurant_type}</p>
            <p className='comment'><span className='intro'>Comments: </span>* {item_comment}</p>
            <p className='waitTime'><span className='intro'>Time waited for meal: </span>{wait_time}</p>
            <p className='visitDate'><span className='intro'>Ordered on: </span>{date_visited}</p>
          </div>
        </section>
        <nav id='mealNav'>
          <Link to={`/meal/${id}/update`}>Update Meal</Link>
        </nav>
        <Route path={`/meal/:id/update`} render={props => <UpdateMeal {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  userMeal: state.userMeal,
})

const mapDispatchToProps = {
  getMeal,
}

export default connect(mapStateToProps,mapDispatchToProps)(Meal)
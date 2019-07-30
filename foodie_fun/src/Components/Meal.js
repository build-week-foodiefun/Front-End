import React from 'react'
import { Link, Route } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import UpdateMeal from './UpdateMeal'


class Meal extends React.Component {

  render() {
    const meal = this.props.userData.find(meal => `${meal.id}` === this.props.match.params.id)
    const { 
      restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited
    } = meal
    console.log(meal)
    return (
      <div className='meal'>
        {this.props.error && <p className='error'>{this.props.error}</p>}
        <h2 className='restName'>{restaurant_name}</h2>
        <p className='restType'><span className='intro'>Type of restaurant:</span> {restaurant_type}</p>
        <img className='itemImg' src={`${item_photo}`} alt='A Meal' />
        <h3 className='itemName'>Meal: {item_name}</h3>
        <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /> <br />
        <p className='comment'><span className='intro'>Comments: </span>* {item_comment}</p>
        <p className='waitTime'><span className='intro'>Time waited for meal: </span>{wait_time}</p>
        <p className='visitDate'><span className='intro'>Ordered on: </span>{date_visited}</p>
        <nav id='mealNav'>
          <Link to={`/meal/${meal.id}/update`}>Update Meal</Link>
        </nav>
        <Route path={`/meal/:id/update`} render={props => <UpdateMeal {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
})

export default connect(mapStateToProps)(Meal)
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'

class MealList extends React.Component {
  render() {
    const { userData } = this.props

    return (
      <ul className='mealList'>
        {userData.map(meal => {
          const {
            restaurant_name,
            restaurant_type,
            item_photo,
            item_name,
            food_rating,
            item_comment,
            wait_time,
            date_visited,
          } = meal

          if (userData.isLoading) {
            return <p>Meals are loading...</p>
          }
          else if (userData === []) {
            return <h1 className='pleaseAdd'>Please add a meal to get started!</h1>
          }

          return <li className='mealCard'>
            <h2 className='restName'>{restaurant_name}</h2>
            <p className='restType'>Type of restaurant: {restaurant_type}</p>
            <image className='itemImg' src={`${item_photo}`} />
            <h3 className='itemName'>Meal: {item_name}</h3>
            <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /><br />
            <p className='comment'>Comments: * {item_comment}</p>
            <p className='waitTime'>Time waited for meal: {wait_time}</p>
            <p className='visitDate'>Ordered on: {date_visited}</p>
          </li>
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  restaurant_name: state.restaurant_name,
  restaurant_type: state.restaurant_type,
  item_photo: state.item_photo,
  item_name: state.item_name,
  food_rating: state.food_rating,
  item_comment: state.item_comment,
  wait_time: state.wait_time,
  date_visited: state.date_visited,
  userData: state.userData,
  isLoading: state.isLoading
})

export default connect(mapStateToProps)(MealList)
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component'
import { getMeal } from '../actions'

class MealList extends React.Component {
  
  render() {
    const { userData, isLoading } = this.props
    console.log(userData)

    if (isLoading) {
      return <p>Meals are loading...</p>
    }
    else if (userData.length === 0) {
      return <Link to='/add'><h1 className='pleaseAdd'>Please add a meal to get started!</h1></Link>
    }

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
            id
          } = meal

          return <Link key={id} to={`/meal/${id}`}>
            <li className='mealCard' key={id}>
              <section className='mealCardTop'>
                <h2 className='restName'>{restaurant_name}</h2>
              </section>
              <section className='mealCardBottom'>
                <div className='mealCardImg'>
                  <p className='restType'><span className='intro'>Type of restaurant:</span> {restaurant_type}</p>
                  <img className='itemImg' src={`${item_photo}`} alt='A Meal' />
                  <h3 className='itemName'>Meal: {item_name}</h3>
                  <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /><br />
                </div>
                {/* <div className='mealCardBody'>
                  <p className='comment'><span className='intro'>Comments: </span>* {item_comment}</p>
                  <p className='waitTime'><span className='intro'>Time waited for meal: </span>{wait_time}</p>
                  <p className='visitDate'><span className='intro'>Ordered on: </span>{date_visited}</p>
                </div> */}
              </section>
            </li>
          </Link>
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
  isLoading: state.isLoading,
  id: state.id,
  error: state.error,
  mealID: state.mealID,
})

const mapDispatchToProps = {
  getMeal,
}

export default connect(mapStateToProps,mapDispatchToProps)(MealList)
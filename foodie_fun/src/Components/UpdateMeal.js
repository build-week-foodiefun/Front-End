import React from 'react'
import { withRouter } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { updateMeal, deleteMeal, getMeal } from '../actions'

class AddMeal extends React.Component {
  constructor(props) {
    super(props)
    const meal = this.props.userData.find(meal => `${meal.id}` === this.props.match.params.id)
    this.state = {
      restaurant_name: meal.restaurant_name,
      restaurant_type: meal.restaurant_type,
      item_photo: meal.item_photo,
      item_name: meal.item_name,
      food_rating: meal.food_rating,
      item_comment: meal.item_comment,
      wait_time: meal.wait_time,
      date_visited: meal.date_visited,
    }
  }
  
  newMeal = evt => {
    evt.preventDefault()
    const { restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited
    } = this.state

    const payload = {
      restaurant_name,
      restaurant_type,
      item_photo,
      item_name,
      food_rating,
      item_comment,
      wait_time,
      date_visited
    }

    const id = this.props.match.params.id
    
    this.props.updateMeal(payload,id)
    
    setTimeout(() => {
      this.props.history.push(`/`)
    }, 200);
  }

  changeHandler = evt => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onStarClick = (next, prev, name) => {
    this.setState({
      food_rating: next,
    })
  }

  deleteItem = evt => {
    evt.preventDefault()

    const id = this.props.match.params.id

    this.props.deleteMeal(id)
    setTimeout(() => {
      this.props.history.push(`/`)
    }, 200);
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
      date_visited
    } = this.state
    
    return (
      <form className='addMeal updateMeal' onSubmit={this.newMeal}>
        <h2 className='addMealHeader'>Forget something? Update it so you'll have a way to remember or click delete and forget it forever!</h2>
        <input className='restNameInput' type='text' name='restaurant_name' placeholder='Restaurant Name' value={restaurant_name} required onChange={this.changeHandler} /><br />
        <input className='restTypeInput' type='text' name='restaurant_type' placeholder='Type of Restaurant' value={restaurant_type} required onChange={this.changeHandler} /><br />
        <div className='itemPhotoContainer'>
          <input className='itemPhotoInput' id='item_photo' type='text' placeholder='Add photo link: *not required' name='item_photo' accept='image/*' value={item_photo} onChange={this.changeHandler} /><br />
        </div>
        <input className='itemNameInput' type='text' name='item_name' placeholder='The Name of the Meal' value={item_name} onChange={this.changeHandler} required /><br />
        <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} onStarClick={this.onStarClick} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /><br />
        <input className='commentInput' type='text' name='item_comment' placeholder='Leave a Comment' value={item_comment} required onChange={this.changeHandler} /><br />
        <input className='waitTimeInput' type='text' name='wait_time' placeholder='How long did you wait?' value={wait_time} required onChange={this.changeHandler} /><br />
        <div className='visitDateContainer'>
          <label className='dateLabel' htmlFor='date_visited'>The Date You Ate:</label><br />
          <input className='visitDateInput' type='date' id='date_visited' name='date_visited' value={date_visited} required onChange={this.changeHandler} /><br />
        </div>
        <button className='addButton' type='submit'>Update Meal</button>
        <button className='deleteButton' type='button' onClick={this.deleteItem}>Delete Meal</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
})

const mapDispatchToProps = {
  updateMeal,
  deleteMeal,
  getMeal,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddMeal))
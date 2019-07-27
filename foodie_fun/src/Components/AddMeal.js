import React from 'react'
import { withRouter } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { addMeal } from '../actions'

class AddMeal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant_name: '',
      restaurant_type: '',
      item_photo: '',
      item_name: '',
      food_rating: '',
      item_comment: '',
      wait_time: '',
      date_visited: '',
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

    this.props.addMeal(payload)

    this.setState({
      restaurant_name: '',
      restaurant_type: '',
      item_photo: '',
      item_name: '',
      food_rating: '',
      item_comment: '',
      wait_time: '',
      date_visited: '',
    })

    this.props.history.push('/')
  }

  changeHandler = evt => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  starClick = (next,prev,name) => {
    this.setState({
      food_rating: next,
    })
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
      <form className='addMeal' onSubmit={this.addMeal}>
        <h2 className='addMealHeader'>Was it amazing? The worst ever? Add it so you'll have a way to remember!</h2>
        <input className='restName' type='text' name='restaurant_name' placeholder='Restaurant Name' value={restaurant_name} onChange={this.changeHandler} /><br />
        <input className='restType' type='text' name='restaurant_type' placeholder='Type of Restaurant' value={restaurant_type} onChange={this.changeHandler} /><br />
        <label className='photoLabel' for='item_photo'>Choose a Restaurant Photo:</label>
        <input className='itemPhoto' id='item_photo' type='file' name='item_photo' accept='image/*' value={item_photo} onChange={this.changeHandler} /><br />
        <input className='itemName' type='text' name='item_name' placeholder='The Name of the Meal' value={item_name} onChange={this.changeHandler} required /><br />
        <StarRatingComponent className='rating' name='rating' starCount={5} value={food_rating} onStarClick={this.starClick} renderStarIcon={() => <span role='img' aria-label='burger'>🍔</span>} /><br />
        <input className='comment' type='text' name='item_comment' placeholder='Leave a Comment' value={item_comment} onChange={this.changeHandler} /><br />
        <input className='waitTime' type='text' name='wait_time' placeholder='How long did you wait?' value={wait_time} onChange={this.changeHandler} /><br />
        <label className='dateLabel' for='date_visited'>The Date You Ate:</label>
        <input className='visitDate' type='date' id='date_visited' name='date_visited' value={date_visited} onChange={this.changeHandler} /><br />
      </form>
    )
  }
}

const mapDispatchToProps = {
  addMeal,
}

export default withRouter(connect(null,mapDispatchToProps)(AddMeal))
import React from 'react'
import { withRouter } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import { connect } from 'react-redux'
import { addMeal } from '../actions'

class AddMeal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurant_name: "Pizza Place TEST2",
      restaurant_type: "Italian",
      item_name: "Pepperoni Pizza",
      item_photo: "https://images.unsplash.com/photo-1549800076-831d7a97afac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
      food_rating: 5,
      item_comment: "Wow, pizza was so good! I really enjoyed it!",
      wait_time: "About 10 minutes.",
      date_visited: "2018-11-02",
      // restaurant_name: '',
      // restaurant_type: '',
      // item_photo: '',
      // item_name: '',
      // food_rating: 0,
      // item_comment: '',
      // wait_time: '',
      // date_visited: '',
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
    console.log(payload)
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

  onStarClick = (next,prev,name) => {
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
    console.log(food_rating)
    return (
      <form className='addMeal' onSubmit={this.newMeal}>
        <h2 className='addMealHeader'>Was it amazing? The worst ever? Add it so you'll have a way to remember!</h2>
        <p className='required'>* All fields are required.</p>
        <input className='restNameInput' type='text' name='restaurant_name' placeholder='Restaurant Name' value={restaurant_name} required onChange={this.changeHandler} /><br />
        <input className='restTypeInput' type='text' name='restaurant_type' placeholder='Type of Restaurant' value={restaurant_type} required onChange={this.changeHandler} /><br />
        <div className='itemPhotoContainer'>
          <label className='photoLabel' htmlFor='item_photo'>Add a Link To Your Meal's Photo:</label><br />
          <input className='itemPhotoInput' id='item_photo' type='text' name='item_photo' accept='image/*' value={item_photo} required onChange={this.changeHandler} /><br />
        </div>
        <input className='itemNameInput' type='text' name='item_name' placeholder='The Name of the Meal' value={item_name} onChange={this.changeHandler} required /><br />
        <StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} onStarClick={this.onStarClick} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /><br />
        <input className='commentInput' type='text' name='item_comment' placeholder='Leave a Comment' value={item_comment} required onChange={this.changeHandler} /><br />
        <input className='waitTimeInput' type='text' name='wait_time' placeholder='How long did you wait?' value={wait_time} required onChange={this.changeHandler} /><br />
        <div className='visitDateContainer'>
          <label className='dateLabel' htmlFor='date_visited'>The Date You Ate:</label><br />
          <input className='visitDateInput' type='date' id='date_visited' name='date_visited' value={date_visited} required onChange={this.changeHandler} /><br />
        </div>
        <button className='addButton' type='submit'>Add This Meal</button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  addMeal,
}

export default withRouter(connect(null,mapDispatchToProps)(AddMeal))
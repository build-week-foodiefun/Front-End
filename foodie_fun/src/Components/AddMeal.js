import React from 'react'
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
}
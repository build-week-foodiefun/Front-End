import React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import MealList from './MealList'
import StarRatingComponent from 'react-star-rating-component'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterInput: [],
      userData: this.props.userData,
    }
  }

  ratingFilter = evt => {
    let filtered = this.props.userData.filter(meal => meal.food_rating === parseInt(evt.target.value))
    console.log(filtered)
    if (filtered.length === 0) {
      console.log(filtered)
      this.setState({
        userData: this.props.userData,
        filterInput: ''
      })
    }
    else {
      this.setState({
        filterInput: evt.target.value,
        userData: filtered,
      }, () => {console.log(this.state)})
    }
  }

  typeFilter = evt => {
    let filtered = this.props.userData.filter(meal => meal.restaurant_type.toLowerCase() === evt.target.value.toLowerCase())
    
    if (filtered.length === 0) {
      console.log(filtered)
      this.setState({
        userData: this.props.userData,
        filterInput: ''
      })
    }
    else {
      this.setState({
        filterInput: evt.target.value,
        userData: filtered,
      })
    }
  }

  oneOfEach = () => {
    const items = this.props.userData.map(item => item.restaurant_type)
    const oneOfEachItem = [...new Set(items)]
    return oneOfEachItem
  }

  render() {
    const { isLoading } = this.props
    const { userData, filterInput } = this.state
    console.log(userData)
    console.log(isLoading)

    if (isLoading) {
      return <p>Meals are loading...</p>
    }
    else if (userData.length === 0) {
      return <Link to='/add'><h1 className='pleaseAdd'>Please add a meal to get started!</h1></Link>
    }

    return (
      <section className='home'>
        <div className='filters'>
          <label htmlFor='ratingFilter'>Search by - rating: </label>
          <input type='number' max='5' min='0' id='ratingFilter' placeholder='(0-5)' value={filterInput} onChange={this.ratingFilter} />
          <label htmlFor='typeFilter'>type: </label>
          <select id='typeFilter' onChange={this.typeFilter}>
            <option value='choose'>- None -</option>
            {this.oneOfEach().map((meal, index) => {
              return <option value={meal.toLowerCase()} key={index}>{meal}</option>
            })}
          </select>
        </div>
        <div className='tableContainer'>
          <table className='mealTable'>
            <thead>
              <tr className='headRow'>
                <th className='tableHead'>Rating</th>
                <th className='tableHead'>Food Type</th>
                <th className='tableHead'>Meal Photo</th>
                <th className='tableHead'>Restaurant</th>
                <th className='tableHead'>Meal Name</th>
                <th className='tableHead'>Wait Time</th>
                <th className='tableHead'>Comments</th>
                <th className='tableHead'>Ordered On</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map(meal => {

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

                return (
                  <tr className='mealRow' key={id}>
                    <td className='tableRating'><Link to={`/meal/${id}`}><StarRatingComponent className='rating' name={'rating'} starCount={5} value={food_rating} emptyStarColor={'RGBA(255,205,80,0.5)'} renderStarIcon={() => <span role='img' aria-label='burger'><i className="fas fa-hamburger"></i></span>} /></Link></td>
                    <td className='tableType'><Link to={`/meal/${id}`}>{restaurant_type}</Link></td>
                    <td className='tablePhoto'><Link to={`/meal/${id}`}><img className='itemImg' src={`${item_photo}`} alt='A Meal' /></Link></td>
                    <td className='tableRest'><Link to={`/meal/${id}`}>{restaurant_name}</Link></td>
                    <td className='tableName'><Link to={`/meal/${id}`}>{item_name}</Link></td>
                    <td className='tableWait'><Link to={`/meal/${id}`}>{wait_time}</Link></td>
                    <td className='tableComments'><Link to={`/meal/${id}`}>{item_comment}</Link></td>
                    <td className='tableDate'><Link to={`/meal/${id}`}>{date_visited}</Link></td>
                  </tr>
              )})
              }
            </tbody>
          </table>
        
          <section className='listRoute'>
            <Route exact path='/' render={props => <MealList {...props} />} />
          </section>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  isLoading: state.isLoading,
  mealChange: state.mealChange,
})

export default connect(mapStateToProps)(Home)
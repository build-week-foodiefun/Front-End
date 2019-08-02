import React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import MealList from './MealList'
import StarRatingComponent from 'react-star-rating-component'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredData: [],
    }
  }

  render() {
    const { userData, isLoading } = this.props
    console.log(userData)
    console.log(isLoading)

    if (isLoading) {
      return <p>Meals are loading...</p>
    }
    else if (userData.length === 0) {
      return <Link to='/add'><h1 className='pleaseAdd'>Please add a meal to get started!</h1></Link>
    }

    return (
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
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  isLoading: state.isLoading,
})

export default connect(mapStateToProps)(Home)
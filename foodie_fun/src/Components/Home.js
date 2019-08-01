import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

    if (isLoading) {
      return <p>Meals are loading...</p>
    }
    else if (userData.length === 0) {
      return <Link to='/add'><h1 className='pleaseAdd'>Please add a meal to get started!</h1></Link>
    }

    return (
      <table className='mealTable'>
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
            <tr className='mealRow'>
              <td className='tableRating'>{food_rating}</td>
              <td className='tableType'>{restaurant_type}</td>
              <td className='tablePhoto'>{item_photo}</td>
              <td className='tableRest'>{restaurant_name}</td>
              <td className='tableName'>{item_name}</td>
              <td className='tableWait'>{wait_time}</td>
              <td className='tableComments'>{item_comment}</td>
              <td className='tableDate'>{date_visited}</td>
            </tr>
          </Link>
        })}
      </table>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  isLoading: state.isLoading,
})

export default connect(null,mapStateToProps)(Home)
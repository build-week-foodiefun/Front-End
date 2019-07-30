import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function NavBar(props) {

  const logout = evt => {
    evt.preventDefault()

    localStorage.removeItem('token')
    props.history.push('/login')
  }

  return (
    <div className='navBar'>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add A Meal</Link>
      <button type='button' onClick={logout}>Logout</button>
    </div>
  )
}

export default withRouter(NavBar)
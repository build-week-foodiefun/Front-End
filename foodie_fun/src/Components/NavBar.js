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
      <section className='navBarLinks'>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add A Meal</Link>
      </section>
      <div className='notLinks'>
        <p className='foodieFun'>Foodie-Fun</p>
        <button className='logoutButton' type='button' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default withRouter(NavBar)
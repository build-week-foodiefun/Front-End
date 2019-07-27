import React from 'react'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <div className='navBar'>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add A Meal</Link>
    </div>
  )
}
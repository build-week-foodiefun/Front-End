import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute(props) {
  const {
    component: Component,
    ...rest
  } = props

  return (
    <Route {...rest} render={() => {
      const token = localStorage.getItem('token')

      if (token) {
        if (props.userData === []) {
          return <Redirect to='/add' />
        }
        else {
          return <Component />
        }
      }
      else {
       return <Redirect to='/login' />
      }
    }} />
  )
}

const mapStateToProps = state => ({
  userData: state.userData,
})

export default connect(mapStateToProps)(PrivateRoute)
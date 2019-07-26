import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../actions'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    const {username, password} = this.state

    this.props.createUser(username, password)
      .then(() => {
        this.props.history.push('/')
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    const {username, password} = this.state
    const {isLoading, error} = this.props

    return (
      <div className='register'>
        <form className='registerForm' onSubmit={this.handleSubmit}>
          {error && <p className='error'>{error}</p> }

          <input type='text' name='username' placeholder='Username' value={username} onChange={this.handleChange} /><br />
          <input type='password' name='password' placeholder='Password' value={password} onChange={this.handleChange} /><br />

          {isLoading ? <p>Creating account, please wait...</p> : <button className='registerButton' type='submit'>Create Account</button> }
        </form>
        <p className='loginLink'>Already a member? Click <a href='#'>here</a> to login.</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
})

const mapDispatchToProps = {
  createUser,
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
)
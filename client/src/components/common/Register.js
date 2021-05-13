import React from 'react'
import { useHistory } from 'react-router-dom'

import useForm from '../../utils/useForm'
import { registerUser } from '../../lib/api'


function Register() {

  const history = useHistory()
  const { formdata, handleChange } = useForm({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleRegister = async e => {
    e.preventDefault()
    try {
      console.log(formdata)
      await registerUser(formdata)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <form onSubmit={handleRegister} className="column is-one-quarter is-offset-one-quarter">
              <h1 className="title is-1 has-text-centered">Register</h1>
              <div className="field">
                <label className="label">First Name
                  <div className="control">
                    <input 
                      className="input"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      onChange={handleChange}
                      value={formdata.firstName}
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="label">Last Name
                  <div className="control">
                    <input 
                      className="input"
                      type="text"
                      placeholder="Surname"
                      name="lastName"
                      value={formdata.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="label">Username
                  <div className="control">
                    <input 
                      className="input"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={formdata.username}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="label">Email
                  <div className="control">
                    <input 
                      className="input"
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={formdata.email}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="label">Password
                  <div className="control">
                    <input 
                      className="input"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={formdata.password}
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <label className="label">Password Confirmation
                  <div className="control">
                    <input 
                      className="input"
                      type="password"
                      placeholder="Password Confirmation"
                      name="passwordConfirmation"
                      value={formdata.passwordConfirmation}
                      onChange={handleChange}
                    />
                  </div>
                </label>
              </div>
              <div className="field">
                <button className="button is-fullwidth" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register